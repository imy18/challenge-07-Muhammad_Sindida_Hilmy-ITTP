// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import Users from "../models/userModel.js";
import bcrypt from "bcrypt"; // Hash password
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.json(users);
    } catch (error) {
        // Jika terdapat error
        console.log(error);
    }
}

// Membuat function untuk registrasi
export const Register = async (req, res) => {
    const {
        name,
        email,
        password,
        confmPassword
    } = req.body;

    // Validasi
    if (password !== confmPassword) return res.status(400).json({
        msg: "Password dan Confirm Password tidak cocok"
    });

    // Jika password dan confirm password cocok
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword
        });

        // jika user tersimpan ke database
        res.json({
            msg: "Register Berhasil"
        });

    } catch (error) {
        // jika terdapat error
        console.log(error);
    }
}

// Membuat function untuk Login
export const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                // Cari berdasarkan email
                email: req.body.email
            }
        });

        const match = await bcrypt.compare(req.body.password, user[0].password);
        // Jika password tidak cocok
        if (!match) return res.status(400).json({
            msg: "Password salah"
        });

        // Jika password cocok
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;

        // Akses token
        const accesToken = jwt.sign({
            userId,
            name,
            email
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1200s' // 20 menit
        });

        // Refresh token
        const refreshToken = jwt.sign({
            userId,
            name,
            email
        }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d' // 1 hari
        });

        // Simpan refresh token kedalam database
        await Users.update({
            refresh_token: refreshToken
        }, {
            where: {
                id: userId
            }
        });

        // http only cookie yang akan dikirimkan ke client
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // Cookie expire
            //secure: true (jika menggunakan https)
        });

        // Respon ke client terkait akses token
        res.json({
            name,
            accesToken,
            refreshToken
        });


    } catch (error) {
        // Jika user tidak dapat ditemukan
        res.status(404).json({
            msg: "Email tidak ditemukan"
        });
    }
}

// Membuat function untuk Logout
export const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    // Jika tidak dapat token
    if (!refreshToken) return res.sendStatus(204);
    // Jika mendapatkan token
    const user = await Users.findAll({
        // Membandingkan token dengan yang ada di database
        where: {
            refresh_token: refreshToken
        }
    });

    // Jika tidak cocok
    if (!user[0]) return res.sendStatus(204);
    // Mengambil id dari database
    const userId = user[0].id;
    // Update refresh token yang terdapat dalam database
    await Users.update({
        refresh_token: null
    }, {
        where: {
            id: userId
        }
    });
    
    // Hapus cookie
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
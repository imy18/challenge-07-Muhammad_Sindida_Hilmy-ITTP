// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import express from "express";
import {
    getUsers,
    Register,
    Login,
    Logout
} from "../controllers/users.js";
import {
    verifyToken
} from "../middleware/verifyToken.js";

import {
    refreshToken
} from "../controllers/refreshToken.js";

const router = express.Router();
const prefix = "/v1/api/";

// ============================= USERS LOGIN ===================================

router.get(prefix + 'users', verifyToken, getUsers);
router.post(prefix + 'users', Register);
router.post(prefix + 'login', Login);

router.get(prefix +'token', refreshToken);
router.delete(prefix + 'logout', Logout);

export default router;
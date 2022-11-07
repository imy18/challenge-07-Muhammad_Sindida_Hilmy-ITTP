// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import {
    Sequelize
} from "sequelize";

const db = new Sequelize('ch7_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
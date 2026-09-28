import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host:"localhost",
    database: "pedrinho",
    password: "senai",
    port: 5432
});

export default pool;
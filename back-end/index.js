const { Router } = require("express");
const express = require("express")
const { Pool, Client } = require("pg")

const p = new Pool({
    host: process.env.DB || "localhost",
    port: process.env.DB_PORT || "5555",
    user: "postgres",
    password: "mysecretpassword"
})



const app = express();

app.get("/", async (req, res) => {
    const r = await p.query("select 'hola' SALUDO ")
    res.send("hello hello "  + JSON.stringify(r.rows[0])
    )
})

app.listen(process.env.PORT || 3011)
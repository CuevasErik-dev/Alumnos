const express = require("express");
const router = express.Router();
const db = require("../db");

// Usar promesas correctamente
router.get("/traer-alumnos", async (req, res) => {
    try {
        // Para mysql2 con promesas, se usa así:
        const [rows, fields] = await db.promise().query("SELECT * FROM alumno");
        res.json(rows);
    } catch (error) {
        console.error("Error fetching alumnos:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
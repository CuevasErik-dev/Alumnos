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

router.post("/crear-alumno", async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            carrera,
            gmail,
            numero_control ,
            telefono,
            imagenurl,
        } = req.body;

        // Validar campos requeridos
        if (!nombre || !apellido || !carrera || !gmail || !numero_control) {
            return res.status(400).json({
                error:
                    "Faltan campos requeridos: nombre, apellido, carrera, gmail, numero_control",
            });
        }

        const query = `INSERT INTO alumno (nombre, apellido, carrera, gmail, numero_control, telefono, imagenurl) 
                    VALUES (?, ?, ?, ?, ?, ?, ?)`;

        const [result] = await db
            .promise()
            .query(query, [
                nombre,
                apellido,
                carrera,
                gmail,
                numero_control,
                telefono,
                imagenurl || "",
            ]);

        res.json({
            success: true,
            id: result.insertId,
            message: "Alumno creado exitosamente",
            alumno: {
                id: result.insertId,
                nombre,
                apellido,
                carrera,
                gmail,
                numero_control,
                telefono,
                imagenurl,
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

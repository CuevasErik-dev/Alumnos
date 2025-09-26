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

        const imagenPorDefecto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpnmY-O9iz09Jka-vGvK2Lv-U-pL3H18CfA&s";
        const imagenFinal = imagenurl || imagenPorDefecto;


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
                imagenFinal
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

router.put("/editar-alumno", async (req, res) => {
    try {  
        const {
            id,
            nombre,
            apellido,
            carrera,
            gmail,
            numero_control,
            telefono,
            imagenurl,
        } = req.body;

        // Validar que el ID esté presente
        if (!id) {
            return res.status(400).json({
                error: "El ID del alumno es requerido",
            });
        }
        // Validar campos requeridos
        if (!nombre || !apellido || !carrera || !gmail || !numero_control) {
            return res.status(400).json({
                error: "Faltan campos requeridos: nombre, apellido, carrera, gmail, numero_control",
            });
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(gmail)) {
            return res.status(400).json({
                error: "El formato del email no es válido",
            });
        }

        const query = `UPDATE alumno SET nombre = ?, apellido = ?, carrera = ?, gmail = ?, numero_control = ?, telefono = ?, imagenurl = ? WHERE id = ?`;
        const [result] = await db
            .promise()
            .query(query, [
                nombre,
                apellido,
                carrera,
                gmail,
                numero_control,
                telefono || null,
                imagenurl || null,
                id,
            ]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Alumno no encontrado" });
        }     

        res.json({ 
            success: true, 
            message: "Alumno actualizado exitosamente",
            id: id 
        });
    } catch (error) {
        console.error("Error al editar alumno:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
module.exports = router;

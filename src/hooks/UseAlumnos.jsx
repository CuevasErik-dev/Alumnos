import { useState, useEffect } from 'react';
import api from '../services/api';

export const useAlumnos = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const cargarAlumnos = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.get("/alumnos/traer-alumnos");
            setAlumnos(response.data);
        } catch (err) {
            console.error("Error al cargar los alumnos:", err);
            setError("Error al cargar los alumnos");
        } finally {
            setLoading(false);
        }
    };

    const handleEditar = (id) => {
        console.log('Editar alumno:', id);
        // Aquí iría la lógica para editar
    };

    const handleEliminar = async (id) => {
        try {
            console.log('Eliminar alumno:', id);
            // Aquí iría la lógica para eliminar
            // await api.delete(`/alumnos/eliminar-alumno/${id}`);
            // Recargar la lista después de eliminar
            // cargarAlumnos();
        } catch (error) {
            console.error('Error al eliminar alumno:', error);
        }
    };

    // Cargar alumnos al montar el componente
    useEffect(() => {
        cargarAlumnos();
    }, []);

    return {
        alumnos,
        loading,
        error,
        cargarAlumnos,
        handleEditar,
        handleEliminar
    };
};
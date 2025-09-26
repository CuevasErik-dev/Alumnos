import api from './api';

export const alumnoService = {
    // Crear nuevo alumno
    crearAlumno: async (alumnoData) => {
        try {
            await api.post('/alumnos/crear-alumno',alumnoData);
        } catch (error) {
            throw new Error(`Error al crear alumno: ${error.response?.data?.message || error.message}`);
        }
    },

    // Obtener todos los alumnos
    obtenerAlumnos: async () => {
        try {
            const response = await api.get('/alumnos/traer-alumnos');
            return response.alumnoData;
        } catch (error) {
            throw new Error(`Error al obtener alumnos: ${error.response?.data?.message || error.message}`);
        }
    },

    // Actualizar alumno
    actualizarAlumno: async (id, alumnoData) => {
        try {
            const response = await api.put(`/alumnos/${id}`, alumnoData);
            return response.data;
        } catch (error) {
            throw new Error(`Error al actualizar alumno: ${error.response?.data?.message || error.message}`);
        }
    },

    // Eliminar alumno
    eliminarAlumno: async (id) => {
        try {
            const response = await api.delete(`/alumnos/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error al eliminar alumno: ${error.response?.data?.message || error.message}`);
        }
    }
};
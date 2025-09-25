import { useState, useEffect } from 'react';
import api from '../services/api';

export const useAlumnos = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [alumnoEditar, setAlumnoEditar] = useState(null);

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

    const handleEditar = (alumno) => {
        console.log('Editando alumno:', alumno);
        setAlumnoEditar(alumno);
        setModalVisible(true);
    };

    const handleGuardarCambios = async (alumnoActualizado) => {
        try {
            setLoading(true);
            console.log(' Datos a enviar:', {
                id: alumnoEditar.id, 
                ...alumnoActualizado
            });

            const response = await api.put("/alumnos/editar-alumno", {
                id: alumnoEditar.id, 
                ...alumnoActualizado
            });

            console.log(' Respuesta del backend:', response.data);

            // Actualizar la lista local
            setAlumnos(prevAlumnos => prevAlumnos.map(alumno =>
                alumno.id === alumnoEditar.id ? { ...alumno, ...alumnoActualizado } : alumno
            ));

            cerrarModal();

        } catch (error) {
            console.error('Error al guardar cambios:', error);
        } finally {
            setLoading(false);
        }
    };

    const cerrarModal = () => {
        console.log('Cerrando modal');
        setModalVisible(false);
        setAlumnoEditar(null);
    }

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

    useEffect(() => {
        cargarAlumnos();
    }, []);

    return {
        alumnos,
        loading,
        error,
        modalVisible,
        cerrarModal,
        alumnoEditar,
        handleGuardarCambios,
        cargarAlumnos,
        handleEditar,
        handleEliminar
    };
};
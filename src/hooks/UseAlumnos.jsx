import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
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
        Alert.alert(
            "Eliminar alumno",
            "¿Estás seguro de eliminar este alumno?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar",
                    onPress: async () => {
                        try {
                            setLoading(true);
                            await api.delete("/alumnos/eliminar-alumno", { data: { id } });
                            Alert.alert("Éxito", "Alumno eliminado");
                            await cargarAlumnos();
                        } catch (error) {
                            Alert.alert("Error", error.response?.data?.error || "Error al eliminar");
                        } finally {
                            setLoading(false);
                        }
                    }
                }
            ]
        );
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
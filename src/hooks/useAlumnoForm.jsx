// hooks/useAlumnoForm.js
import { useState } from 'react';
import { alumnoService } from '../services/alumnoServices';

export const useAlumnoForm = () => {
    const [formData, setFormData] = useState({
        nombre: '', apellido: '', carrera: '', gmail: '',
        numero_control: '', telefono: '', imagenurl: ''
    });

    const [loading, setLoading] = useState(false);
    const [alumnoRegistrado, setAlumnoRegistrado] = useState(null);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleRegistrar = async () => {
        setLoading(true);
        try {
            const resultado = await alumnoService.crearAlumno(formData);
            setAlumnoRegistrado({
                id: resultado.id,
                ...formData
            });

            // Limpiar formulario
            setFormData({
                nombre: '', apellido: '', carrera: '', gmail: '',
                numero_control: '', telefono: '', imagenurl: ''
            });

            return { success: true, data: resultado };
        } catch (error) {
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        loading,
        alumnoRegistrado,
        handleInputChange,
        handleRegistrar,
        setAlumnoRegistrado
    };
};
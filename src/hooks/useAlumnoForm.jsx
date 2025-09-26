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

    const validarFormulario = (data) => {
        const camposObligatorios = ['nombre', 'apellido', 'carrera', 'gmail', 'numero_control'];
        const camposVacios = camposObligatorios.filter(campo => !data[campo]?.trim());
        
        if (camposVacios.length > 0) {
            return `Complete los campos obligatorios: ${camposVacios.join(', ')}`;
        }

        // Validar formato de email
        if (data.gmail && !/\S+@\S+\.\S+/.test(data.gmail)) {
            return 'Formato de email inválido';
        }

        return null;
    };
    const handleLimpiar = async () =>{
        setFormData({
            nombre: '', apellido: '', carrera: '', gmail: '',
                numero_control: '', telefono: '', imagenurl: ''
        });
    };

    const handleRegistrar = async () => {
        setLoading(true);

        try {
            const errorValidacion = validarFormulario(formData);
            if (errorValidacion) {
                return { success: false, error: errorValidacion };
            }
            
            const resultado = await alumnoService.crearAlumno(formData);
            setAlumnoRegistrado({
                id: formData.id,
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
        setAlumnoRegistrado,
        handleLimpiar
    };
};
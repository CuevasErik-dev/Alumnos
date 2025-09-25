import { PaperProvider, List, Card, Text, Button, TextInput, } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from 'react';
import { alumnoService } from "../services/alumnoServices";

const Registro = () => {

    const [formData, setFormData] = React.useState({
        nombre: '',
        apellido: '',
        carrera: '',
        gmail: '',
        numero_control: '',
        telefono: '',
        imagenurl: '',
    });

    const [loading, setLoading] = useState(false);
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const mostrarSnackbar = (message) => {
        setSnackbarMessage(message);
        setSnackbarVisible(true);
    };
    const validarFormulario = () => {
        const camposRequeridos = ['nombre', 'apellido', 'carrera', 'gmail', 'numero_control'];

        for (let campo of camposRequeridos) {
            if (!formData[campo].trim()) {
                mostrarSnackbar(`El campo ${campo} es requerido`);
                return false;
            }
        }

        // Validar email básico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.gmail)) {
            mostrarSnackbar('Por favor ingresa un email válido');
            return false;
        }

        return true;
    };

    const handleRegistrar = async () => {
// sourcery skip: use-braces
        if (!validarFormulario()) return;

        setLoading(true);
        try {
            await alumnoService.crearAlumno(formData);
            mostrarSnackbar('Alumno registrado exitosamente');

            // Limpiar formulario
            setFormData({
                nombre: '',
                apellido: '',
                carrera: '',
                gmail: '',
                numero_control: '',
                telefono: '',
                imagenurl: ''
            });

        } catch (error) {
            console.error('Error al registrar:', error);
            mostrarSnackbar(error.message || 'Error al registrar alumno');
        } finally {
            setLoading(false);
        }
    };

    const handleEditar = () => {

        mostrarSnackbar('Función de edición - Selecciona un alumno primero');
    };

    const handleLimpiar = () => {
        setFormData({
            nombre: '',
            apellido: '',
            carrera: '',
            gmail: '',
            numero_control: '',
            telefono: '',
            imagenurl: ''
        });
        mostrarSnackbar('Formulario limpiado');
    };

    return (
        <SafeAreaView style={[style.Content]} edges={['top', 'left', 'right']} >
            <ScrollView contentContainerStyle={[{ paddingBottom: 10 },]}>
                <Card style={[style.card,]}>
                    <Card.Title
                        title="¿Que desea hacer?" titleVariant="titleLarge" />
                    <Card.Content style={{ gap: 15 }}>
                        <TextInput
                            label="Nombre:"
                            value={formData.nombre}
                            onChangeText={(text) => handleInputChange('nombre', text)}
                        />
                        <TextInput
                            label="Apellido:"
                            value={formData.apellido}
                            onChangeText={(text) => handleInputChange('apellido', text)}
                        />
                        <TextInput
                            label="Carrera:"
                            value={formData.carrera}
                            onChangeText={(text) => handleInputChange('carrera', text)}
                        />
                        <TextInput
                            label="Gmail:"
                            keyboardType="email-address"
                            value={formData.gmail}
                            onChangeText={(text) => handleInputChange('gmail', text)}
                        />
                        <TextInput
                            label="Numero de control:"
                            keyboardType="numeric"
                            value={formData.numero_control}
                            onChangeText={(text) => handleInputChange('numero_control', text)}
                        />
                        <TextInput
                            label="Telefono:"
                            keyboardType="phone-pad"
                            value={formData.telefono}
                            onChangeText={(text) => handleInputChange('telefono', text)}
                        />
                        <TextInput
                            label="Imagen:"
                            value={formData.imagenurl}
                            onChangeText={(text) => handleInputChange('imagenurl', text)}
                        />
                        <Button icon="account-plus" mode="contained" onPress={handleRegistrar}
                            buttonColor="green" loading={loading} disabled={loading}>
                            Registrar
                        </Button>
                        <Button icon="account-edit" mode="contained" onPress={handleEditar}
                            buttonColor="blue">
                            Editar
                        </Button>
                    </Card.Content>
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Registro;

const style = StyleSheet.create({
    Content: {
        flex: 1
    },
    card: {
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 20,
        elevation: 2,
    },
});



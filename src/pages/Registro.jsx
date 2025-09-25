import { PaperProvider, List, Card, Text, Button, TextInput, Modal, Portal, Snackbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from 'react';
import { alumnoService } from "../services/alumnoServices";

const Registro = () => {
    const [formData, setFormData] = useState({
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
    const [modalVisible, setModalVisible] = useState(false);
    const [alumnoRegistrado, setAlumnoRegistrado] = useState(null);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const mostrarSnackbar = (message) => {
        setSnackbarMessage(message);
        setSnackbarVisible(true);
    };

    const handleCerrarModal = () => {
        setModalVisible(false);
        setAlumnoRegistrado(null);
    };

    const validarFormulario = () => {
        const camposRequeridos = ['nombre', 'apellido', 'carrera', 'gmail', 'numero_control'];

        for (let campo of camposRequeridos) {
            if (!formData[campo].trim()) {
                mostrarSnackbar(`El campo ${campo} es requerido`);
                return false;
            }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.gmail)) {
            mostrarSnackbar('Por favor ingresa un email válido');
            return false;
        }

        return true;
    };

    const handleRegistrar = async () => {
        if (!validarFormulario()) {
            return;
        }

        setLoading(true);
        try {
            const resultado = await alumnoService.crearAlumno(formData);

            setAlumnoRegistrado({
                id: resultado.id || resultado.insertId || 'N/A',
                nombre: formData.nombre,
                apellido: formData.apellido,
                carrera: formData.carrera,
                numero_control: formData.numero_control
            });
            setModalVisible(true);

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
        <SafeAreaView style={style.Content} edges={['top', 'left', 'right']}>
            <ScrollView contentContainerStyle={style.scrollContent}>
                <Card style={style.card}>
                    <Card.Title
                        title="Registro de Alumnos"
                        titleVariant="titleLarge"
                    />
                    <Card.Content style={style.cardContent}>
                        <TextInput
                            label="Nombre:"
                            value={formData.nombre}
                            onChangeText={(text) => handleInputChange('nombre', text)}
                            mode="outlined"
                            disabled={loading}
                        />
                        <TextInput
                            label="Apellido:"
                            value={formData.apellido}
                            onChangeText={(text) => handleInputChange('apellido', text)}
                            mode="outlined"
                            disabled={loading}
                        />
                        <TextInput
                            label="Carrera:"
                            value={formData.carrera}
                            onChangeText={(text) => handleInputChange('carrera', text)}
                            mode="outlined"
                            disabled={loading}
                        />
                        <TextInput
                            label="Gmail:"
                            keyboardType="email-address"
                            value={formData.gmail}
                            onChangeText={(text) => handleInputChange('gmail', text)}
                            mode="outlined"
                            disabled={loading}
                            autoCapitalize="none"
                        />
                        <TextInput
                            label="Numero de control:"
                            keyboardType="numeric"
                            value={formData.numero_control}
                            onChangeText={(text) => handleInputChange('numero_control', text)}
                            mode="outlined"
                            disabled={loading}
                        />
                        <TextInput
                            label="Telefono:"
                            keyboardType="phone-pad"
                            value={formData.telefono}
                            onChangeText={(text) => handleInputChange('telefono', text)}
                            mode="outlined"
                            disabled={loading}
                        />
                        <TextInput
                            label="Imagen:"
                            value={formData.imagenurl}
                            onChangeText={(text) => handleInputChange('imagenurl', text)}
                            mode="outlined"
                            disabled={loading}
                            placeholder="https://ejemplo.com/imagen.jpg"
                        />

                        <Button
                            icon="account-plus"
                            mode="contained"
                            onPress={handleRegistrar}
                            buttonColor="green"
                            loading={loading}
                            disabled={loading}
                            style={style.button}
                        >
                            Registrar
                        </Button>

                        <Button
                            icon="account-edit"
                            mode="contained"
                            onPress={handleEditar}
                            buttonColor="blue"
                            disabled={loading}
                            style={style.button}
                        >
                            Editar
                        </Button>

                        <Button
                            icon="broom"
                            mode="outlined"
                            onPress={handleLimpiar}
                            disabled={loading}
                            style={style.button}
                        >
                            Limpiar Formulario
                        </Button>
                    </Card.Content>
                </Card>
            </ScrollView>

            <Portal>
                <Modal
                    visible={modalVisible}
                    onDismiss={handleCerrarModal}
                    contentContainerStyle={style.modalContainer}
                >
                    <Card>
                        <Card.Title
                            title=" Registro Exitoso"
                            titleStyle={style.modalTitle}
                        />
                        <Card.Content>
                            <Text variant="titleMedium" style={style.modalText}>
                                El alumno ha sido registrado correctamente
                            </Text>

                            {alumnoRegistrado && (
                                <View style={style.detallesContainer}>
                                    <Text style={style.detalleText}>
                                        <Text style={style.detalleLabel}>Nombre: </Text>
                                        {alumnoRegistrado.nombre} {alumnoRegistrado.apellido}
                                    </Text>
                                    <Text style={style.detalleText}>
                                        <Text style={style.detalleLabel}>Carrera: </Text>
                                        {alumnoRegistrado.carrera}
                                    </Text>
                                    <Text style={style.detalleText}>
                                        <Text style={style.detalleLabel}>N° Control: </Text>
                                        {alumnoRegistrado.numero_control}
                                    </Text>
                                    {alumnoRegistrado.id && alumnoRegistrado.id !== 'N/A' && (
                                        <Text style={style.detalleText}>
                                            <Text style={style.detalleLabel}>ID: </Text>
                                            {alumnoRegistrado.id}
                                        </Text>
                                    )}
                                </View>
                            )}

                            <Button
                                mode="contained"
                                onPress={handleCerrarModal}
                                style={style.modalButton}
                                icon="check"
                            >
                                Aceptar
                            </Button>
                        </Card.Content>
                    </Card>
                </Modal>
            </Portal>

            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={3000}
                action={{
                    label: 'OK',
                    onPress: () => setSnackbarVisible(false),
                }}
            >
                {snackbarMessage}
            </Snackbar>
        </SafeAreaView>
    );
};

export default Registro;

const style = StyleSheet.create({
    Content: {
        flex: 1
    },
    scrollContent: {
        paddingBottom: 10,
    },
    card: {
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 20,
        elevation: 2,
    },
    cardContent: {
        gap: 15,
    },
    button: {
        marginTop: 5,
    },
    modalContainer: {
        margin: 20,
    },
    modalTitle: {
        textAlign: 'center',
        color: 'green',
    },
    modalText: {
        textAlign: 'center',
        marginBottom: 15,
    },
    detallesContainer: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    detalleText: {
        marginVertical: 3,
    },
    detalleLabel: {
        fontWeight: 'bold',
    },
    modalButton: {
        marginTop: 10,
        backgroundColor: 'green',
    }
});
import { PaperProvider, List, Card, Text, Button, TextInput, Modal, Portal, Snackbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from 'react';
import { useAlumnoForm } from "../hooks/useAlumnoForm";
import AlumnoForm from "../formulario/AlumnoForm";
import SuccesModal from "../components/SuccesModal";
import SnackbarAlert from "../components/SnackbarAlert";


const Registro = () => {
    const {
        formData,
        loading,
        alumnoRegistrado,
        handleInputChange,
        handleRegistrar,
        setAlumnoRegistrado
    } = useAlumnoForm();

    const [modalVisible, setModalVisible] = React.useState(false);
    const [snackbar, setSnackbar] = React.useState({ visible: false, message: '' });
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    
    const mostrarSnackbar = (message, type = 'default') => {
        setSnackbar({ visible: true, message, type });
    };

    const handleRegistrarConFeedback = async () => {
        const result = await handleRegistrar();
        if (result.success) {
            setModalVisible(true);
        } else {
            setSnackbar({ visible: true, message: result.error });
        }
    };

    const handleLimpiar = () => {
        // Lógica para limpiar
        setSnackbar({ visible: true, message: 'Formulario limpiado' });
    };


    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <AlumnoForm
                    formData={formData}
                    loading={loading}
                    onInputChange={handleInputChange}
                    onRegistrar={handleRegistrarConFeedback}
                    onLimpiar={handleLimpiar}
                />
            </ScrollView>

            <SuccesModal
                visible={modalVisible}
                alumno={alumnoRegistrado}
                onClose={() => setModalVisible(false)}
            />

            <SnackbarAlert
                visible={snackbar.visible}
                message={snackbar.message}
                onDismiss={() => setSnackbar({ ...snackbar, visible: false })}
            />

        </SafeAreaView>
    );
};

export default Registro;

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        margin: 16
    },
    cardContent: {
        padding: 16
    }
});
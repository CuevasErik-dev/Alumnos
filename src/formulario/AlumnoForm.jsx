// components/AlumnoForm/AlumnoForm.js
import React from 'react';
import { Card, TextInput, Button } from "react-native-paper";
import { View } from "react-native";
import { StyleSheet } from 'react-native';

const AlumnoForm = ({ formData, loading, onInputChange, onRegistrar, onLimpiar }) => {
    return (
        <Card style={styles.card}>
            <Card.Title title="Registro de Alumnos" titleVariant="titleLarge" />
            <Card.Content style={styles.cardContent}>
                <TextInput label="Nombre" value={formData.nombre}
                    onChangeText={(text) => onInputChange('nombre', text)} />

                <TextInput label="Apellido" value={formData.apellido}
                    onChangeText={(text) => onInputChange('apellido', text)} />

                <TextInput label="Carrera" value={formData.carrera}
                    onChangeText={(text) => onInputChange('carrera', text)} />

                <TextInput label="Gmail" value={formData.gmail} keyboardType='email-address'
                    onChangeText={(text) => onInputChange('gmail', text)} />

                <TextInput label="Número de Control" keyboardType='numeric' value={formData.numero_control}
                    onChangeText={(text) => onInputChange('numero_control', text)} />

                <TextInput label="Teléfono" keyboardType='phone-pad' value={formData.telefono}
                    onChangeText={(text) => onInputChange('telefono', text)} />

                <TextInput label="URL de Imagen" value={formData.imagenurl}
                    onChangeText={(text) => onInputChange('imagenurl', text)} />

                <Button mode="contained" onPress={onRegistrar} loading={loading}>
                    Registrar
                </Button>

                <Button mode="outlined" onPress={onLimpiar}>
                    Limpiar
                </Button>
            </Card.Content>
        </Card>

        
    );
};

export default AlumnoForm;

const styles = StyleSheet.create({
    card: {
        margin: 16,
    },
    cardContent: {
        padding: 16,
        marginBottom: 16,
        gap: 12,
        borderRadius: 10,
    },
});


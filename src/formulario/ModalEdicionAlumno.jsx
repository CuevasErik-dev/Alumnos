import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-paper';

const ModalEdicionAlumno = ({ visible, alumno, onGuardar, onCancelar }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        gmail: '',
        telefono: '',
        carrera: '',
        numero_control: '',
        imagenurl: '',
        apellido: '',
    });

    // Actualizar el formulario cuando cambie el alumno
    useEffect(() => {
        if (alumno) {
            setFormData({
                nombre: alumno.nombre || '',
                gmail: alumno.gmail || '',
                telefono: alumno.telefono || '',
                carrera: alumno.carrera || '',
                numero_control: alumno.numero_control || '',
                imagenurl: alumno.imagenurl || '',
                apellido: alumno.apellido || '',
            });
        }
    }, [alumno]);

    const handleChange = (campo, valor) => {
        setFormData(prev => ({
            ...prev,
            [campo]: valor
        }));
    };

    const handleGuardar = () => {
        onGuardar(formData);
    };

    return (
        <Modal
            visible={visible && !!alumno}
            animationType="slide"
            transparent={true}
            onRequestClose={onCancelar}
        >
            <View style={styles.modalContainer}>
                <Card style={styles.modalCard}>
                    <Card.Content>
                        <Text style={styles.modalTitle}>Editar Alumno</Text>
                        <ScrollView>
                            <TextInput
                                style={styles.input}
                                placeholder="Nombre"
                                value={formData.nombre}
                                onChangeText={(text) => handleChange('nombre', text)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Apellido"
                                value={formData.apellido}
                                onChangeText={(text) => handleChange('apellido', text)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Carrera"
                                value={formData.carrera}
                                onChangeText={(text) => handleChange('carrera', text)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Gmail"
                                value={formData.gmail}
                                keyboardType='email-address'
                                onChangeText={(text) => handleChange('gmail', text)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Número de Control"
                                keyboardType='numeric'
                                value={formData.numero_control}
                                onChangeText={(text) => handleChange('numero_control', text)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Teléfono"
                                keyboardType='phone-pad'
                                value={formData.telefono}
                                onChangeText={(text) => handleChange('telefono', text)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="URL de Imagen"
                                value={formData.imagenurl}
                                onChangeText={(text) => handleChange('imagenurl', text)}
                            />
                        </ScrollView>
                        <View style={styles.buttonContainer}>
                            <Button
                                mode="outlined"
                                onPress={onCancelar}
                                style={styles.button}
                            >
                                Cancelar
                            </Button>
                            <Button
                                mode="contained"
                                onPress={handleGuardar}
                                style={styles.button}
                            >
                                Guardar
                            </Button>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
    },
    modalCard: { //de aqui se mueve el modal
        width: '90%',
        maxHeight: '730',
        backgroundColor: '#f7e7e7ff',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    scrollView: {
        maxHeight: 400,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
    },
});
export default ModalEdicionAlumno;
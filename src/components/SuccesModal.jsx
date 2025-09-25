// components/SuccessModal/SuccessModal.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal, Card, Text, Button} from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
const SuccessModal = ({ visible, alumno, onClose }) => {
    if (!visible) {
        return null;
    }

    return (
        <Portal>
            <Modal visible={visible} onDismiss={onClose}>
                <Card style={styles.modalCard}>
                    <Ionicons name="checkmark-circle" size={54} color="green" style={styles.icon} />
                    <Card.Content>
                        <Text style={styles.text}>Alumno Registrado</Text>
                        <Button mode="contained" onPress={onClose} style={styles.button}>Aceptar</Button>
                    </Card.Content>
                </Card>
            </Modal>
        </Portal>
    );
};

export default SuccessModal;
const styles = StyleSheet.create({
    modalCard: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
        padding: 20,
        borderColor: '#030303ff',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#f1e8e8ff',
    },
    icon: {
        marginBottom: 10,
        alignSelf: "center",
    },
    content: {
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
        color: "#333",
        textAlign: "center",
        marginBottom: 8,
    },
    button: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#e9042aff',
    },
});

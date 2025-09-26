import React from "react";
import {  TouchableOpacity, View, Image } from "react-native";
import { List } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';

const AlumnoItem = ({ alumno, onEditar, onEliminar }) => {
    return (
        <List.Item
            title={`${alumno.nombre} ${alumno.apellido}`}
            description={`Carrera: ${alumno.carrera} - Tel: ${alumno.telefono}`}
            left={(props) => (
                <List.Icon
                    {...props}
                    icon={() => (
                        <Image
                            source={{ uri: alumno.imagenurl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpnmY-O9iz09Jka-vGvK2Lv-U-pL3H18CfA&s" }}
                            style={styles.avatar}
                        />
                    )}
                />
            )}
            right={(props) => (
                <View style={styles.actionsContainer}>
                    <TouchableOpacity
                        onPress={() => onEditar(alumno)}
                        style={styles.editButton}
                    >
                        <Ionicons name="pencil-outline" size={25} color="blue" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => onEliminar(alumno.id)}
                        style={styles.deleteButton}
                    >
                        <Ionicons name="trash" size={25} color="red" />
                    </TouchableOpacity>
                </View>
            )}
        />
    );
};

const styles = {
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editButton: {
        marginRight: 10,
        padding: 5,
        borderRadius: 5,
    },
    deleteButton: {
        padding: 5,
        borderRadius: 5,
    },
};

export default AlumnoItem;
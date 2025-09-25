import { PaperProvider, List, Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image, View} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useEffect, useState } from "react";

const ListaAlumnos = () => {

    const [alumnos, setAlumnos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cargarAlumnos = async () => {
            try {
                setLoading(true);
                const response = await api.get("/alumnos/traer-alumnos");
                setAlumnos(response.data);
            } catch (error) {
                console.error("Error al cargar los alumnos:", error);
            } finally {
                setLoading(false);
            }
        };

        cargarAlumnos();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={style.container}>
                <Text>Cargando alumnos...</Text>
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>

            <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
                <Card style={style.card}>
                    <Card.Content style={style.cardContent}>
                        <View style={style.listContainer}>
                            {alumnos.length === 0 ? (
                                <Text>No hay alumnos registrados</Text>
                            ) : (
                                alumnos.map((alumno, index) => (
                                    <List.Item
                                        key={alumno.id || index}
                                        title={`${alumno.nombre} ${alumno.apellido}`}
                                        description={`Carrera: ${alumno.carrera} - Tel: ${alumno.telefono}`}
                                        left={(props) => (
                                            <List.Icon
                                                {...props}
                                                icon={() => (
                                                    <Image
                                                        source={{ uri: alumno.imagenurl }}
                                                        style={style.avatar}
                                                    />
                                                )}
                                            />
                                        )}
                                        right={(props) => (
                                            <TouchableOpacity
                                                onPress={() => console.log('Menu pressed', alumno.id)}
                                                style={style.menuButton}
                                            >
                                                <Ionicons name="menu" size={24} color="gray" />
                                            </TouchableOpacity>
                                        )}
                                    />
                                ))
                            )}
                        </View>
                    </Card.Content>
                </Card>

            </ScrollView>
        </SafeAreaView>
    );
};

export default ListaAlumnos;
const style = StyleSheet.create({
    card: {
        margin: 10,
    },
                    card: {
                    margin: 10,
    },
                cardContent: {
                    // Quitamos flexDirection: 'row' para que los elementos se apilen verticalmente
                    backgroundColor: '#f7ebebff',
                padding: 0, // Eliminar padding adicional si es necesario
    },
                listContainer: {
                    width: '100%',
    },
                avatar: {
                    width: 40,
                height: 40,
                borderRadius: 20
    },
                menuButton: {
                    justifyContent: 'center',
                alignItems: 'center',
                padding: 8,
                marginRight: -8
    }
});
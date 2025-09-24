import { PaperProvider, List, Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import { ScrollView, StyleSheet,Text } from "react-native";
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
            {/* <CardBusqueda /> */}
            <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
                <Card style={style.card}>
                    <Card.Content>
                        {alumnos.length === 0 ? (
                            <Text>No hay alumnos registrados</Text>
                        ) : (
                            alumnos.map((alumno, index) => (
                                <List.Item
                                    key={alumno.id || index}
                                    title={`${alumno.nombre} ${alumno.apellido}`}
                                    description={`Carrera: ${alumno.carrera} - Tel: ${alumno.telefono}`}
                                    left={(props) => <List.Icon {...props} icon="account" />}
                                />
                            ))
                        )}
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
});
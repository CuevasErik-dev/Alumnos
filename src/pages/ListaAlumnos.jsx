import React from "react";
import { PaperProvider, Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AlumnoItem from "../components/Botones/AlumnoItem";
import { useAlumnos } from "../hooks/UseAlumnos";

const ListaAlumnos = () => {
    const { alumnos, loading, error, handleEditar, handleEliminar } = useAlumnos();

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Cargando alumnos...</Text>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>{error}</Text>
            </SafeAreaView>
        );
    }

    return (
        <PaperProvider>
            <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
                <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
                    <Card style={styles.card}>
                        <Card.Content style={styles.cardContent}>
                            <View style={styles.listContainer}>
                                {alumnos.length === 0 ? (
                                    <Text>No hay alumnos registrados</Text>
                                ) : (
                                    alumnos.map((alumno, index) => (
                                        <AlumnoItem
                                            key={alumno.id || index}
                                            alumno={alumno}
                                            onEditar={handleEditar}
                                            onEliminar={handleEliminar}
                                        />
                                    ))
                                )}
                            </View>
                        </Card.Content>
                    </Card>
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        margin: 10,
    },
    cardContent: {
        backgroundColor: '#f7ebebff',
        padding: 0,
    },
    listContainer: {
        width: '100%',
    },
});

export default ListaAlumnos;
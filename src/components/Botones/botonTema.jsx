import { TouchableOpacity, Text, StyleSheet } from "react-native";

const BotonTema = ({ tema, onClick }) => {
    return (
        <TouchableOpacity style={styles.boton} onPress={onClick}>
            <Text style={styles.texto}>{tema}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boton: {
            position: 'absolute',
            top: 40,
            right: 20,
            zIndex: 10, // para que quede encima de todo
            backgroundColor: '#00000050',
            borderRadius: 50,
            padding: 8,
        },
        texto: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
        },
    });

export default BotonTema;

import { PaperProvider, List, Card, Text, Button, TextInput, } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CardBusqueda from "../components/Card/CardBusqueda";
import { ScrollView, StyleSheet } from "react-native";
import BotonRegistrar from "../components/Botones/btnRegistro";
import BotonEditar from "../components/Botones/btnEditar";
const Registro = () => {

    return (
        <SafeAreaView style={[style.Content]} edges={['top', 'left', 'right']} >
            <ScrollView contentContainerStyle={[{ paddingBottom: 10 },]}>
                <BotonRegistrar/>
                <BotonEditar/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Registro;

const style = StyleSheet.create({
    Content: {
        flex: 1
    },
    card: {
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 20,
        elevation: 2,
    },
});



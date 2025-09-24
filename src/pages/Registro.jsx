import { PaperProvider, List, Card, Text, Button, TextInput, } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CardBusqueda from "../components/Card/CardBusqueda";
import { ScrollView, StyleSheet } from "react-native";

const Registro = () => {

    return(    
        <SafeAreaView style={[ style.Content]} edges={['top', 'left', 'right']} >
            {/* <CardBusqueda /> */}
            <ScrollView contentContainerStyle={[{ paddingBottom: 10 },]}>
                <Card style={[style.card,]}>
                    <Card.Title
                        title="¿Que desea hacer?" titleVariant="titleLarge"  />
                    <Card.Content style={{ gap: 15 }}>
                        <TextInput
                            label="Nombre:"

                        />
                        <TextInput
                            label="Apellido:"

                        />
                        <TextInput
                            label="Carrera:"

                        />
                        <TextInput
                            label="Email:"
                            keyboardType="email-address"
                        />
                        <TextInput
                            label="Numero de control:"
                            keyboardType="numeric"
                        />
                        <TextInput
                            label="Telefono:"
                            keyboardType="phone-pad"
                        />
                        <TextInput
                            label="Imagen:"

                        />
                        <Button icon="account-plus" mode="contained" onPress={() => console.log('Pressed')}
                            buttonColor="green">
                            Registrar
                        </Button>
                        <Button icon="account-edit" mode="contained" onPress={() => console.log('Pressed')}
                            buttonColor="blue">
                            Editar
                        </Button>
                    </Card.Content>
                </Card>
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



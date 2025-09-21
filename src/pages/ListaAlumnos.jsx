import { PaperProvider, List, Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CardBusqueda from "../components/Card/CardBusqueda";
import { ScrollView, StyleSheet } from "react-native";

const ListaAlumnos = () => (
    <PaperProvider>
        <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
            <CardBusqueda />
            <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
                <Card style={style.card}>
                    <Card.Content>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
                            <List.Item
                                key={index}
                                title="First Item"
                                description="Item description"
                                left={props => <List.Icon {...props} icon="account" />}
                            />
                        ))}
                    </Card.Content>
                </Card>
            </ScrollView>
        </SafeAreaView>
    </PaperProvider>
);

export default ListaAlumnos;

const style = StyleSheet.create({
    Content: {

    },
    card: {
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 20,
        elevation: 2,
    },
});



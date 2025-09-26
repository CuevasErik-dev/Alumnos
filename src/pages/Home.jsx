import * as React from 'react';
import { Card, Text, Avatar, useTheme, Icon, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, } from 'react-native';
import { useEffect, useState } from 'react';

const Home = () => {

    const [count, setCount] = React.useState(0);
    const [countDown, setCountDown] = React.useState(0);

    return (
        <SafeAreaView style={[style.container,]}>
            <Card.Content style={style.Content}>
                <Avatar.Image size={150}
                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtAxzaDGQX0sDbfJyCwSI9vA-lMfkw6NSyQ&s" }} />
            </Card.Content>

            <Text style={style.title}>Bienvenido al CRUD de usuarios, en React expo</Text>
            <Text style={style.texto2}>Aplicacion hecha por Israel Cuevas para un proyecto academico de Desarrollo
                de Aplicaiones Moviles, esta hecha con React Expo, tiene integracion con
                una base de datos en Node.js y MySql.
            </Text>

            <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center', paddingTop:10}}> ¿Te gusta esta aplicacion?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <Button icon="thumb-up" mode='contained-tonal' onPress={() => { setCount(count + 1) }}>
                    {count}
                </Button>
                <Button icon="thumb-down" mode='contained-tonal' onPress={() => { setCountDown(countDown + 1) }}>
                    {countDown}
                </Button>
            </View>

        </SafeAreaView>
    );

};

export default Home;

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    Content: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    texto: {
        paddingBottom: 10
    },
    texto2: {
        paddingTop:70,
        textAlign: 'justify',
        padding: 25,
        fontSize: 15,
        justifyContent: 'justify',
    }
});
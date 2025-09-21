import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const CardTitle = () => (
    <Card style={style.estilocard}>
        <Card.Title title="Alumnos" titleStyle={style.styleTitle} /* left={LeftContent} */ />
    </Card>
);

export default CardTitle;

const style = StyleSheet.create({
    estilocard:{
        marginHorizontal:10,
        marginVertical:0,
        borderRadius:20,
    },
    styleTitle:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold'
    },
});

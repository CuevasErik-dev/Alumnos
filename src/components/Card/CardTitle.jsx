import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const RightContent = props => <Avatar.Icon {...props} icon="cog" size={35}  style={{marginRight:10}}/>

const CardTitle = () => (
    <Card style={style.estilocard}>
        <Card.Title title="Alumnos" titleStyle={style.styleTitle} right={RightContent} />
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
        justifyContent:'center',
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:50
    },
});

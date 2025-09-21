import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';

const CardBusqueda = () => (
    <Card.Title
        left={(props) => <Avatar.Icon {...props} icon="account-search" onPress={() =>{ }}/>}
        right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
    />
);

export default CardBusqueda;
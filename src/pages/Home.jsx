
import { Card, Text, Avatar, useTheme, Icon } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

/* importacion de componentes */
import CardTitle from '../components/Card/CardTitle';


const Home = () => {

    return (
    <SafeAreaView style={[style.container, ]}>
        {/* <CardTitle /> */}
        <Card.Content style={style.Content}>
            <Text variant='headlineLarge' style={[style.texto,]}> Bienvenido </Text>
            <Avatar.Image size={200}
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpnmY-O9iz09Jka-vGvK2Lv-U-pL3H18CfA&s" }} />
        </Card.Content>
    </SafeAreaView>
    );
};

export default Home;

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    Content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        paddingBottom: 10
    }
});
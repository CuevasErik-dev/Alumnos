import * as React from 'react';
import { BottomNavigation, Text,  } from 'react-native-paper';
import Home from '../../pages/Home';
import Registro from '../../pages/Registro';
import ListaAlumnos from '../../pages/ListaAlumnos';

const HomeRoute = () => {
    return <Home  />
}

const RegistroRoute = () => {
    return <Registro />;
}
const VerRoute = () => <ListaAlumnos />;



const NavegationPrincipal = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Inicio', focusedIcon: 'home', unfocusedIcon: 'home' },
        { key: 'registro', title: 'Registrar', focusedIcon: 'account-plus' },
        { key: 'ver', title: 'Alumnos', focusedIcon: 'account-group' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        registro: RegistroRoute,
        ver: VerRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default NavegationPrincipal;
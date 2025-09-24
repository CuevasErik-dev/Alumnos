import React from "react";
import { Button, Icon} from "react-native-paper";

const BotonRegistrar = () => (
 <Button
        icon={({ color }) => (
            <Icon
                source="account-plus"
                size={60}
                color={color}
            />
        )}
        mode="contained"
        onPress={() => console.log('Pressed')}
        buttonColor="#84bce9ff"
        style={{
            marginTop: 70,
            height: 200,
            width: '70%',
            alignSelf: 'center',
            marginBottom: 20,
            borderRadius: 15,
        }}
        contentStyle={{
            height: '100%',
            flexDirection: 'row',
            gap: 15,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        labelStyle={{
            fontSize: 22,
            fontWeight: 'bold',
        }}
    >
        Registrar Alumno
    </Button>
);



export default BotonRegistrar;
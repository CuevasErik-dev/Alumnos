import React, { useState } from "react";
import { MD3LightTheme } from "react-native-paper";


const Tema = () => {
    const [bgColor, setBgColor] = useState("#ecc9c9ff");

    const cambiarFondo = () => {
        setBgColor(bgColor === "#ecc9c9ff" ? "#9fb5c9ff" : "#ecc9c9ff");
    };

    const theme = {
        ...MD3LightTheme,
        colors: {
            ...MD3LightTheme.colors,
            primary: "#ee15dcff",
            secondary: "#03dac6",
            background: bgColor,
        },
    };

    return { theme, cambiarFondo };
};

export default Tema;

import React, { useState } from "react";
import { MD3LightTheme } from "react-native-paper";


const Tema = () => {
    const [bgColor, setBgColor] = useState("#bbbeef");

    const cambiarFondo = () => {
        setBgColor(bgColor === "#bbbeef" ? "#a7bcf7" : "#bbbeef");
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

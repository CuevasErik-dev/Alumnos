import { StyleSheet, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar"
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import NavegationPrincipal from "./src/components/Navigation/NavegationPrincipal";

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#ee15dcff",      // color principal de botones y textos destacados
    secondary: "#03dac6",    // color secundario
    background: "#6b6a6aff",   // fondo general de la app
    surface: "#ffffff",       // fondo de tarjetas y paneles
    accent: "#03dac6",
    error: "#B00020",
  },
};
export default function App() {

  return (
    <PaperProvider theme={theme}>
      <NavegationPrincipal />
      <StatusBar style="light" backgroundColor={theme.colors.background} />
    </PaperProvider>

  );
}

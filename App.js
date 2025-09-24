import { StyleSheet, Text, View, Platform } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { StatusBar } from "expo-status-bar"
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import NavegationPrincipal from "./src/components/Navigation/NavegationPrincipal";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import BotonTema from "./src/components/Botones/botonTema";
import Tema from "./src/components/tema";

export default function App() {

const { theme, cambiarFondo } = Tema();
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>

        <BotonTema tema="Cambiar Tema" onClick={cambiarFondo} />

        {/* Navegación */}
        <NavegationPrincipal cambiarFondo={cambiarFondo} />

        <StatusBar style="light" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10, // para que quede encima de todo
    backgroundColor: '#00000050',
    borderRadius: 50,
    padding: 8,
  },
});
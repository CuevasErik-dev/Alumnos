import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Platform, } from "react-native";
import { StatusBar } from "expo-status-bar"
import { PaperProvider, Appbar } from "react-native-paper";
import NavegationPrincipal from "./src/components/Navigation/NavegationPrincipal";
import BotonTema from "./src/components/Botones/botonTema";
import Tema from "./src/components/tema";

export default function App() {


  const { theme, cambiarFondo } = Tema();
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Alumnos" />
          <Appbar.Action icon="invert-colors" onPress={() => {cambiarFondo()}} />
        </Appbar.Header>

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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
  },
});
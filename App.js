import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

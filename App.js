import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import NavegationPrincipal from "./src/components/Navigation/NavegationPrincipal";

export default function App() {
  return (
    <PaperProvider>
      <NavegationPrincipal/>
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

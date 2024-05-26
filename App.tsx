import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Atv3 from "./atividades/atv3/Atv3";
import Atv5 from "./atividades/atv5";
import Atv6 from "./atividades/atv6";
import Atv7 from "./atividades/atv7";
import React from "react";
import Atv1 from "./atividades/atv1/App";
import AtividadeStack from "./atividades/atvStack/AtvStack.routes";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Atv1/>
      <Atv3/>
      <Atv5/>
      <Atv6/>
      <Atv7 /> */}
      <AtividadeStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

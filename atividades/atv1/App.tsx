import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
function Atv1() {
  const [name, setName] = useState(" ");
  const [time, setTime] = useState(" ");

  return (
    <View style={styles.app}>
      <View style={{ ...styles.main }}>
        <Text style={{ ...styles.txt, color: "#1f1f1f" }}>Nome: {name}</Text>
        <Text style={{ ...styles.txt, color: "#1f1f1f" }}>Time: {time}</Text>
      </View>
      <View style={styles.btnSpace}>
        {name != "CARLOS" && (
          <Pressable
            onPress={() => {
              setName("CARLOS");
            }}
            style={{ ...styles.btn, backgroundColor: "green" }}
          >
            <Text style={styles.txt}>Carlos</Text>
          </Pressable>
        )}
        {name != "PAULO" && (
          <Pressable
            onPress={() => {
              setName("PAULO");
            }}
            style={{ ...styles.btn, backgroundColor: "blue" }}
          >
            <Text style={styles.txt}>Paulo</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.btnSpace}>
        {time != "FLAMENGO" && (
          <Pressable
            style={{ ...styles.btn, backgroundColor: "red" }}
            onPress={() => {
              setTime("FLAMENGO");
            }}
          >
            <Text style={styles.txt}>Flamengo</Text>
          </Pressable>
        )}

        {time != "VASCO" && (
          <Pressable
            onPress={() => {
              setTime("VASCO");
            }}
            style={styles.btn}
          >
            <Text style={styles.txt}>Vasco</Text>
          </Pressable>
        )}
      </View>
      <Pressable
        style={{ ...styles.btn, backgroundColor: "green" }}
        onPress={() => {
          setTime("");
          setName("");
        }}
      >
        <Text style={styles.txt}>Limpar</Text>
      </Pressable>
    </View>
  );
}
export default Atv1;

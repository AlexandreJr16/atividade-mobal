import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const Atv7 = () => {
  const [num, setNum] = useState("0");
  const handleNum = (car: string) => {
    setNum(num + car);
  };
  const deleteFunc = () => {
    if (num.length > 0) {
      const newNum = num.slice(0, -1);
      setNum(newNum);
    }
  };
  const solutionEquation = () => {
    try {
      const resultado = eval(num);
      setNum(`${resultado}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.title}>{num}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            handleNum("1");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleNum("2");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleNum("3");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteFunc} style={styles.button}>
          <Ionicons name="backspace" color={"#fff"} size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            handleNum("4");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleNum("5");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleNum("6");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleNum("+");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            handleNum("7");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleNum("8");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleNum("9");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleNum("-");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            handleNum("0");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleNum(".");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleNum("/");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleNum("*");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={solutionEquation} style={styles.button}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Atv7;

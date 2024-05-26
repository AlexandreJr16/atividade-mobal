import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Atv6 = () => {
    const [num, setNumber] = useState(0)

    const handlePlus = ()=>{
        setNumber(num+1)
    }
    const handleMinus = ()=>{
        if(num==0)return 
        setNumber(num-1)
    }

    return (
    <View style={styles.container}>

        <Text style={styles.mainText}>{num}</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonMenos} onPress={handleMinus}><Text style={styles.text}>Menos</Text></TouchableOpacity>
            <TouchableOpacity  style={styles.buttonMais} onPress={handlePlus}><Text style={styles.text}>Mais</Text></TouchableOpacity>
        </View>
    </View>)
}
export default Atv6
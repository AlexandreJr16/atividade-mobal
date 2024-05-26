import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

import { dataProdutos } from "./data";
import { TouchableOpacity } from "react-native-gesture-handler";
const MainScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.menuText}>Menu</Text>
      {dataProdutos.map((item) => (
        <ProdutoComponent
          details={item.details}
          imgUrl={item.img}
          title={item.title}
          key={item.id}
          id={item.id}
          navigation={navigation}
        />
      ))}
    </View>
  );
};

export default MainScreen;
const ProdutoComponent = (dto: {
  imgUrl: any;
  title: string;
  details: string;
  id: number;
  navigation: any;
}) => {
  const { details, imgUrl, title, id, navigation } = dto;

  const handlePage = () => {
    navigation.navigate("details", { id });
  };

  return (
    <TouchableOpacity style={styles.produtoContainer} onPress={handlePage}>
      <Image style={styles.img} width={100} height={100} source={imgUrl} />
      <View style={styles.produtoTextContainer}>
        <Text>{title} </Text>
        <Text>{details}</Text>
      </View>
    </TouchableOpacity>
  );
};

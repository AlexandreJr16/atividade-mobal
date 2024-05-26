import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { dataProdutos, ProdutoDto } from "./data";
import styles from "./styles";
const DetailsScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [produto, setProduto] = useState<ProdutoDto>();
  const [num, setNum] = useState(0);

  const id = route.params.id;
  const findProduto = (id: number) => {
    const data: ProdutoDto = dataProdutos[id];
    setProduto(data);
  };
  useEffect(() => {
    setNum(id);
    findProduto(id);
  }, [id]);
  return (
    <View style={styles.containerDetails}>
      <Text style={styles.titleDetails}>{produto?.title}</Text>
      <Image
        resizeMode="cover"
        source={produto?.img}
        width={100}
        height={100}
        style={styles.imgDetails}
      />
      <Text style={styles.subTitleDetails}>Ingredientes:</Text>
      <View style={styles.ingredientes}>
        {produto?.ingredientes.map((item, i) => (
          <Text style={styles.ingredienteText} key={i}>
            {"- " + item}
          </Text>
        ))}
      </View>
      <Text style={styles.subTitleDetails}>Modo de Preparo:</Text>
      <View style={styles.ingredientes}>
        {<Text style={styles.ingredienteText}>{produto?.modoPreparo}</Text>}
      </View>
      <View style={styles.bottomDiv}>
        <Pressable style={styles.btn}>
          <Text
            style={styles.textBtn}
            onPress={() => {
              if (num == 0) {
                setNum(dataProdutos.length - 1);
                findProduto(dataProdutos.length - 1);
              } else {
                findProduto(num - 1);
                setNum(num - 1);
              }
            }}
          >
            {"<"}
          </Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text
            style={styles.textBtn}
            onPress={() => {
              navigation.goBack();
            }}
          >
            Voltar
          </Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text
            style={styles.textBtn}
            onPress={() => {
              setNum((num + 1) % dataProdutos.length);
              findProduto((num + 1) % dataProdutos.length);
            }}
          >
            {">"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default DetailsScreen;

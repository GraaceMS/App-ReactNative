import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./types";

type DetalhesProdutoRouteProp = RouteProp<RootStackParamList, "DetalhesProduto">;
type NavigationProps = NavigationProp<RootStackParamList, "DetalhesProduto">;

const DetalhesProdutoScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<DetalhesProdutoRouteProp>();
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.voltar}>&lt; Voltar</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: produto.image || "https://via.placeholder.com/150", // Imagem padrão caso 'image' esteja vazia
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{produto.title}</Text>
      <Text style={styles.price}>R$ {produto.price}</Text>
      {produto.discount && (
        <Text style={styles.discountPrice}>
          R$ {(
            produto.price -
            (produto.price * produto.discount) / 100
          ).toFixed(2)}
        </Text>
      )}
      <Text style={styles.description}>{produto.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() =>
            navigation.navigate(
              "EditarProduto",
              { produto } as never
            )
          }
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => {
            console.log("Produto excluído:", produto.title);
            navigation.goBack(); // Retorna à página anterior após exclusão
          }}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  voltar: {
    fontSize: 16,
    color: "#007bff",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: "#007bff",
    marginBottom: 4,
  },
  discountPrice: {
    fontSize: 16,
    color: "red",
    textDecorationLine: "line-through",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 8,
  },
  editButton: {
    backgroundColor: "#007bff",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DetalhesProdutoScreen;

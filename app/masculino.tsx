import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./types";

type NavigationProp = StackNavigationProp<RootStackParamList, "DetalhesProduto">;

const MasculinoScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/mens-shirts")
      .then((response) => {
        const produtosCorrigidos = response.data.products.map((produto: any) => ({
          id: produto.id,
          title: produto.title,
          description: produto.description,
          price: parseFloat(produto.price),
          discount: produto.discountPercentage || 0,
          image: produto.thumbnail || produto.images[0],
        }));
        setProdutos(produtosCorrigidos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos masculinos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.produto}
          onPress={() =>
            navigation.navigate("DetalhesProduto", {
              produto: item, // Passa o objeto completo para a tela de detalhes
            })
          }
        >
          <Text style={styles.produtoTitulo}>{item.title}</Text>
          <Text style={styles.produtoPreco}>R$ {item.price.toFixed(2)}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  listContent: { padding: 16 },
  produto: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  produtoTitulo: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  produtoPreco: { fontSize: 14, color: "#007bff" },
});

export default MasculinoScreen;

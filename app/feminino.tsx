import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { RootStackParamList } from "./types";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<RootStackParamList, "DetalhesProduto">;

const FemininoScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categorias = [
      "womens-dresses",
      "womens-shoes",
      "womens-bags",
      "womens-jewellery",
      "womens-watches",
    ];

    const fetchProdutos = async () => {
      try {
        const resultados = await Promise.all(
          categorias.map((categoria) =>
            axios.get(`https://dummyjson.com/products/category/${categoria}`)
          )
        );

        const produtosCorrigidos = resultados.flatMap((response) =>
          response.data.products.map((produto: any) => ({
            id: produto.id,
            title: produto.title,
            description: produto.description,
            price: parseFloat(produto.price),
            discount: produto.discountPercentage || 0,
            image: produto.thumbnail || produto.images[0],
          }))
        );

        setProdutos(produtosCorrigidos);
      } catch (error) {
        console.error("Erro ao buscar produtos femininos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
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
          style={styles.card}
          onPress={() =>
            navigation.navigate("DetalhesProduto", {
              produto: item,
            })
          }
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: { padding: 16, borderWidth: 1, margin: 8, borderRadius: 8 },
  title: { fontWeight: "bold" },
  price: { color: "#007bff" },
});

export default FemininoScreen;

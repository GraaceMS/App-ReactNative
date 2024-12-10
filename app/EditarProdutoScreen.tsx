import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./types";

type EditarProdutoRouteProp = RouteProp<RootStackParamList, "EditarProduto">;
type NavigationProp = StackNavigationProp<RootStackParamList, "EditarProduto">;

const EditarProdutoScreen = () => {
  const route = useRoute<EditarProdutoRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { produto } = route.params;

  const [formData, setFormData] = useState({
    title: produto.title,
    description: produto.description,
    price: produto.price.toString(),
    discount: produto.discount ? produto.discount.toString() : "",
    image: produto.image,
  });

  const handleSave = () => {
    if (!formData.title || !formData.price) {
      Alert.alert("Erro", "Nome e preço são obrigatórios.");
      return;
    }

    Alert.alert(
      "Confirmar edição",
      "Deseja realmente salvar as alterações no produto?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Salvar",
          onPress: () => {
            const updatedProduto = {
              ...produto,
              title: formData.title,
              description: formData.description,
              price: parseFloat(formData.price),
              discount: formData.discount
                ? parseFloat(formData.discount)
                : undefined,
              image: formData.image,
            };

            console.log("Produto atualizado:", updatedProduto);

            // Navega de volta com os dados atualizados
            navigation.navigate("DetalhesProduto", {
              produto: updatedProduto,
            } as never);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>&lt; Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Editar Produto</Text>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={formData.title}
        onChangeText={(text) => setFormData({ ...formData, title: text })}
        placeholder="Nome do produto"
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={formData.description}
        onChangeText={(text) =>
          setFormData({ ...formData, description: text })
        }
        placeholder="Descrição do produto"
        multiline
      />
      <Text style={styles.label}>Preço (R$)</Text>
      <TextInput
        style={styles.input}
        value={formData.price}
        onChangeText={(text) => setFormData({ ...formData, price: text })}
        placeholder="Preço"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Desconto (%)</Text>
      <TextInput
        style={styles.input}
        value={formData.discount}
        onChangeText={(text) => setFormData({ ...formData, discount: text })}
        placeholder="Desconto"
        keyboardType="numeric"
      />
      <Text style={styles.label}>URL da Imagem</Text>
      <TextInput
        style={styles.input}
        value={formData.image}
        onChangeText={(text) => setFormData({ ...formData, image: text })}
        placeholder="URL da imagem do produto"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  backButton: {
    fontSize: 16,
    color: "#007bff",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default EditarProdutoScreen;

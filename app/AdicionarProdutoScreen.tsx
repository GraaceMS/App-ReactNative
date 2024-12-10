import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const AdicionarProdutoScreen = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discount: "",
    image: "",
  });

  const handleSave = async () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.price ||
      !formData.discount ||
      !formData.image
    ) {
      Alert.alert("Erro", "Todos os campos são obrigatórios!");
      return;
    }

    try {
      const response = await axios.post(
        "https://dummyjson.com/products/add",
        {
          title: formData.title,
          description: formData.description,
          price: parseFloat(formData.price),
          discount: parseFloat(formData.discount),
          image: formData.image,
        }
      );

      Alert.alert(
        "Produto Adicionado",
        JSON.stringify(response.data, null, 2),
        [{ text: "OK", onPress: () => navigation.goBack() }]
      );
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      Alert.alert("Erro", "Não foi possível adicionar o produto.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>&lt; Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Adicionar Produto</Text>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={formData.title}
        onChangeText={(text) => setFormData({ ...formData, title: text })}
        placeholder="Nome"
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={formData.description}
        onChangeText={(text) =>
          setFormData({ ...formData, description: text })
        }
        placeholder="Descrição"
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
      <Text style={styles.label}>URL da imagem</Text>
      <TextInput
        style={styles.input}
        value={formData.image}
        onChangeText={(text) => setFormData({ ...formData, image: text })}
        placeholder="URL da Imagem"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
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
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AdicionarProdutoScreen;

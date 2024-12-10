import React, { useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

const ConfiguracoesScreen = () => {
  const router = useRouter();

  const handleLogout = useCallback(() => {
    Alert.alert(
      "Sair da conta",
      "Você tem certeza que deseja sair da conta?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sair",
          style: "destructive",
          onPress: () => {
            // Redireciona para a tela de login
            router.replace("/");
          },
        },
      ]
    );
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Emily</Text>
        <Text style={styles.subtitle}>emilys@gmail.com</Text>
      </View>
      <TouchableOpacity style={styles.option} onPress={() => Alert.alert("Meus dados")}>
        <Text style={styles.optionText}>Meus dados</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => Alert.alert("Notificações")}>
        <Text style={styles.optionText}>Notificações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => Alert.alert("Termos de uso")}>
        <Text style={styles.optionText}>Termos de uso</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  logoutButton: {
    marginTop: 32,
    backgroundColor: "#ff4d4d",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ConfiguracoesScreen;

import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";
import axios from "axios";
import useAuthStore from "./authStore"; 

type FormData = {
  username: string;
  password: string;
};

const LoginScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: data.username,
        password: data.password,
      });
      setUser({ ...response.data }); 
      Alert.alert("Login bem-sucedido!", `Bem-vindo, ${response.data.firstName}!`);
      router.push("/home");
    } catch (error) {
      Alert.alert("Erro de Login", "Username ou senha inválidos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo de volta!</Text>
      <Controller
        name="username"
        control={control}
        rules={{ required: "Campo obrigatório" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.username && styles.error]}
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

      <Controller
        name="password"
        control={control}
        rules={{ required: "Campo obrigatório" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.password && styles.error]}
            placeholder="Senha"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  input: { width: "100%", padding: 10, marginVertical: 8, borderWidth: 1, borderRadius: 4 },
  error: { borderColor: "red" },
  errorText: { color: "red", fontSize: 12 },
});

export default LoginScreen;

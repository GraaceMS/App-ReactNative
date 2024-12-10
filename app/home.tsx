import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import MasculinoScreen from "./masculino";
import FemininoScreen from "./feminino";
import ConfiguracoesScreen from "./configuracoesScreen";
import DetalhesProduto from "./DetalhesProdutoScreen";
import EditarProdutoScreen from "./EditarProdutoScreen"; // Certifique-se de importar corretamente
import AdicionarProdutoScreen from "./AdicionarProdutoScreen";

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FloatingButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => navigation.navigate("AdicionarProduto" as never)}
    >
      <Text style={styles.floatingButtonText}>+</Text>
    </TouchableOpacity>
  );
};

const ProductTabs = () => {
  return (
    <View style={{ flex: 1 }}>
      <TopTab.Navigator
        id={undefined}
        screenOptions={{
          tabBarActiveTintColor: "#007bff",
          tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
          tabBarIndicatorStyle: { backgroundColor: "#007bff", height: 4 },
          tabBarStyle: { backgroundColor: "#ffffff" },
        }}
      >
        <TopTab.Screen name="Masculino" component={MasculinoScreen} />
        <TopTab.Screen name="Feminino" component={FemininoScreen} />
      </TopTab.Navigator>
      <FloatingButton />
    </View>
  );
};

const ProductStack = () => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProductTabs" component={ProductTabs} />
      <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} />
      
      <Stack.Screen name="EditarProduto" component={EditarProdutoScreen} />

      <Stack.Screen name="AdicionarProduto" component={AdicionarProdutoScreen} />

    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <BottomTab.Navigator
      id={undefined} 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Início") {
            iconName = "home-outline";
          } else if (route.name === "Configurações") {
            iconName = "settings-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <BottomTab.Screen name="Início" component={ProductStack} />
      <BottomTab.Screen name="Configurações" component={ConfiguracoesScreen} />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default HomeScreen;

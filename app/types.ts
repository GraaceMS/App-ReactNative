export type RootStackParamList = {
    DetalhesProduto: {
      produto: {
        id: number;
        title: string;
        description: string;
        price: number; // Certifique-se de que é um número
        discount: number; // Certifique-se de que é um número
        image: string;
      };
    };
    EditarProduto: {
      produto: {
        id: number;
        title: string;
        description: string;
        price: number; // Certifique-se de que é um número
        discount: number; // Certifique-se de que é um número
        image: string;
      };
    };
  };
  
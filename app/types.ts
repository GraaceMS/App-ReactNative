export type RootStackParamList = {
    DetalhesProduto: {
      produto: {
        id: number;
        title: string;
        description: string;
        price: number; 
        discount: number; 
        image: string;
      };
    };
    EditarProduto: {
      produto: {
        id: number;
        title: string;
        description: string;
        price: number;
        discount: number; 
        image: string;
      };
    };
  };
  

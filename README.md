# App-ReactNative


O aplicativo é uma plataforma de gerenciamento de produtos com navegação otimizada, funcionalidades completas e integração com a API https://dummyjson.com. Ele permite a listagem, visualização, adição, edição e exclusão de produtos em categorias masculinas e femininas, além de oferecer uma interface intuitiva com suporte a autenticação básica.

Funcionalidades Implementadas
Tela de Login:

Autenticação com validação de campos e uso do endpoint https://dummyjson.com/auth/login.
Armazenamento do token e informações do usuário utilizando Zustand.
Listagem de Produtos com Tabs:

Separação de categorias masculinas e femininas.
Produtos Masculinos: mens-shirts, mens-shoes, mens-watches.
Produtos Femininos: womens-dresses, womens-shoes, womens-bags, womens-jewellery, womens-watches.
Carregamento otimizado com Promise.all e estado de carregamento.
Detalhes do Produto:

Exibição detalhada (título, descrição, preço, desconto).
Navegação para edição ou exclusão do produto.
Adicionar Produto:

Formulário para adicionar produtos, com validação e envio ao endpoint POST https://dummyjson.com/products/add.
Editar Produto:

Atualização de produtos utilizando o endpoint PUT https://dummyjson.com/products/{id}.
Excluir Produto:

Exclusão simulada com o endpoint DELETE https://dummyjson.com/products/{id} e confirmação via modal.
Logout:

Redirecionamento para a tela de login e limpeza do estado global.

Requisitos Técnicos Atendidos
Expo: Configuração e execução do aplicativo.
Expo Router: Navegação com suporte a tabs e stack.
React Query e Axios: Integração eficiente com a API.
Zustand: Gerenciamento do estado global.
React Hook Form: Validação de formulários.
Gluestack UI: Configuração de tema global.

Para rodar o aplicativo, execute: npx expo start --android 

- ![image](https://github.com/user-attachments/assets/be674f59-4ff4-4998-a138-e944e1057a72)
- ![image](https://github.com/user-attachments/assets/8f8a11d2-b3f9-445b-ade2-1a4325513a3f)
- ![image](https://github.com/user-attachments/assets/3dc1edc8-9728-4571-8fb4-07a12ae2ef77)
- ![image](https://github.com/user-attachments/assets/ba2f92e9-f434-43ad-8829-5a47a3b54662)
- ![image](https://github.com/user-attachments/assets/e0bdf57d-e996-4c49-95aa-898b66b0165f)
- ![image](https://github.com/user-attachments/assets/18f8c6cc-f951-40f9-bae7-10aaf8b8dc0c)
- ![image](https://github.com/user-attachments/assets/e82db749-6d8d-4333-a838-679a2d3a826f)
-  ![image](https://github.com/user-attachments/assets/dc5f9001-e279-4176-8e7a-80802a613e6c)
- ![image](https://github.com/user-attachments/assets/f3b4a10d-7742-4bb1-a8b6-3b010c14f3b9)
- ![image](https://github.com/user-attachments/assets/4c69265a-b75a-4166-8efd-101c7e3aa2ee)
- ![image](https://github.com/user-attachments/assets/1b47179e-d6cf-4eca-a17d-f78ef0c55ed6)
- ![image](https://github.com/user-attachments/assets/ce61d712-0ff8-450e-b867-efe635cfeb91)







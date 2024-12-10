# App-ReactNative

Resumo do Aplicativo
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



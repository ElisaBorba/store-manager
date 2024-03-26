# Store Manager
Bem-vindo ao Store Manager, uma aplicação para gerenciar produtos e vendas de forma eficiente! Aqui você pode adicionar, visualizar, atualizar e excluir produtos, bem como registrar e consultar vendas. Esta aplicação foi desenvolvida em `JavaScript` e é ideal para gerenciar inventários e transações de vendas em um ambiente de varejo.

## 💻 Tecnologias Utilizadas
* Node.js
* Express.js
* JavaScript
* MySQL
* Chai
* Sinon

### Estrutura do projeto
```
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── index.js
│   │   │   ├── products.controller.js
│   │   │   └── sales.controller.js
│   │   ├── middlewares/
│   │   │   ├── validateProductField.js
│   │   │   └── validateSalesField.js
│   │   ├── models/
│   │   │   ├── connection.js
│   │   │   ├── index.js
│   │   │   ├── products.model.js
│   │   │   └── sales.model.js
│   │   ├── routes/
│   │   │   ├── index.js
│   │   │   ├── products.route.js
│   │   │   └── sales.route.js
│   │   ├── services/
│   │   │   ├── index.js
│   │   │   ├── productsService.service.js
│   │   │   └── salesService.service.js
│   │   ├── utils/
│   │   │   └── mapStatusHTTP.js
│   │   ├── app.js
│   │   └── server.js
│   └── tests/
└── README.md
```

### Endpoints Disponíveis
#### Produtos
* GET /products: Listar todos os produtos.
* GET /products/:id: Obter informações de um produto específico.
* POST /products: Adicionar um novo produto.
* PUT /products/:id: Atualizar informações de um produto.
* DELETE /products/:id: Excluir um produto.
#### Vendas
* GET /sales: Listar todas as vendas.
* GET /sales/:id: Obter informações de uma venda específica.
* POST /sales: Registrar uma nova venda.

# Backend do Marketplace

Este é o projeto backend para um aplicativo de marketplace, construído utilizando o framework Adonis.js em Node.js. É necessário utilizar a versão Node.js v16.20.2 para evitar conflitos de dependência.

## Arquitetura
O backend segue uma arquitetura modular com o uso de DTOs (Data Transfer Objects) e interfaces. Essa abordagem promove a organização, manutenção e extensibilidade do código.

## Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/seu-usuario/marketplace-backend.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd marketplace-backend
   ```

3. Instale as dependências usando a versão 16.20.2 do Node.js:

   ```
   nvm use 16.20.2
   npm install
   ```

4. Configure o ambiente:

   - Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente (por exemplo, conexão com o banco de dados, segredos de autenticação, etc.).

5. Execute as migrações do banco de dados:

   ```
   node ace migration:run
   ```

6. Popule o banco de dados com os dados iniciais:

   ```
   node ace db:seed
   ```

7. Inicie o servidor de desenvolvimento:

   ```
   node ace serve
   ```

   A aplicação estará disponível em `http://localhost:3333`.

## Rotas Disponíveis

As rotas disponíveis incluem autenticação, carrinho, produtos e usuário.

## Exemplos de Requisições JSON

Você pode usar os exemplos fornecidos para testar os endpoints da API.

### Registrar Usuário
```json
{
  "email": "usuario@exemplo.com",
  "password": "senha123",
  "name": "João da Silva"
}
```

### Realizar Login
```json
{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
```

### Adicionar Item ao Carrinho
```json
{
  "productId": 1,
  "quantity": 2
}
```

### Remover Item do Carrinho
```json
{
  "id": 5
}
```

### Visualizar Carrinho
```json
{
  "token": "seu_token_de_autenticacao"
}
```

### Criar Produto
```json
{
  "title": "Produto A",
  "price": 19.99,
  "type": "Eletrônicos",
  "stock": 50,
  "img": "https://exemplo.com/produto-a.jpg",
  "color": "Preto"
}
```

### Atualizar Estoque do Produto
```json
{
  "quantity": 75
}
```
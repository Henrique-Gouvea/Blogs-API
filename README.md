<h1 align="center">
   Blogs-API
</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
</p>


## 💻 Sobre o projeto

Nesse projeto o objetivo foi desenvolver um CRUD (Create, Read, Update e Delete) para montar uma API e um banco de dados para a produção de conteúdo para um blog. 🚀

## 🚀 Como executar o projeto

Clonar o repositório

Executar o comando npm install

Criar um arquivo .env na raiz do projeto(passar as variaveis de ambiente especificadas em .env.example)

Executar o comando npm run dev

A aplicação será aberta na porta:3000 - acesse http://localhost:3000


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-   **[Express](https://github.com/expressjs/express)**
-   **[MySQL](https://github.com/mysql)**
-   **[Sequelize](https://github.com/sequelize/sequelize)**
-   **[JSON-WebToken](https://github.com/auth0/node-jsonwebtoken)**
-   **[Nodemon](https://github.com/remy/nodemon)**


## Endpoint para o cadastro de produtos

- O endpoint acessível através do caminho POST(`/products`);

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```
---

## Endpoint para a listagem de produtos

- O endpoint acessível através do caminho GET(`/products`);

Retorna todos os produtos cadastrados

---

## Endpoint para o cadastro de pessoas usuárias

- O endpoint acessível através do caminho POST(`/user`);

- O endpoint deve receber a seguinte estrutura:
```json
{
  "displayName": "string",
  "email": "string",
  "password": "string",
  "image": "string"
}
```
---
## Endpoint para listar todos os pedidos

- O endpoint acessível através do caminho GET(`/orders`).
- Essa rota retorna todos os pedidos e os `id`s dos produtos associados a estes.
---
## Endpoint para o login de pessoas usuárias

- O endpoint acessível através do caminho POST(`/login`).

- A rota deve receber os campos `username` e `password`.

- O endpoint recebe a seguinte estrutura:
```json
  {
    "username": "string",
    "password": "string"
  }
```
---
## Endpoint para o cadastro de um pedido

- O endpoint deve ser acessível através do caminho POST(`/orders`);

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "productsIds": [1, 2]
  }


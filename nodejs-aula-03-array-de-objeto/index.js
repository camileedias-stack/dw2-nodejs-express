const express = require("express");
const app = express();

app.set("view engine", "ejs");

// rota principal
app.get("/", function (req, res) {
  res.render("index");
});

// rota perfil
app.get("/perfil", function (req, res) {
  res.render("perfil");
});

// rota clientes (lista)
app.get("/clientes", function (req, res) {
  const listaClientes = ["Maria", "João", "Camile"];
  const clientes = ""
  res.render("clientes", {
    clientes: clientes,
    listaClientes: listaClientes
  });
});

// rota cliente (detalhe)
app.get("/clientes/:clientes", function (req, res) {
  const clientes = req.params.clientes;

  res.render("detalhesClientes", {
    clientes: clientes
  });
});

// rota serviços
app.get("/servicos", function (req, res) {


// Array de objetos 
const servicos = [ 
{servico: "Desenvolvimento de WebSites", descricao: "Criação de sites com Node.js e integração a banco de dados", preco:3500},
{ servico: "Auditoria de UX/UI", descricao: "Avaliação da usabilidade de sistemas com sugestões e melhoria", preco:1800},
{ servico: "Infraestrutura em nuvem", descricao: "Configuração de servidores e hospedagem de aplicações", preco:2750 }
]

res.render ("servicos", {
  servicos:servicos
});
});

// rota produtos (lista)
app.get("/produtos", function (req, res) {
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];

  res.render("produtos", {
    listaProdutos: listaProdutos
  });
});

// rota produto (detalhe)
app.get("/produtos/:produto", function (req, res) {
  const produto = req.params.produto;

  res.render("detalhesProduto", { //  SEM "S"
    produto: produto
  });
});

// servidor
app.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080");
});
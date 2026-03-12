// O arquivo index.js é o arquivo principal do projeto

// importando o módulo do Express
const express = require("express");

// criando uma instancia do Express
const app = express();

// configurando o EJS
app.set("view engine", "ejs");

// rota principal
app.get("/", function (req, res) {
  res.render("index");
});

// rota perfil
app.get("/perfil", function (req, res) {
  res.render("perfil");
});

// rota principal
app.get("/", function (req, res) {
  res.render("index");
});

// rota clientes
app.get("/clientes", function (req, res) {
  res.render("clientes");
});

// rota serviços
app.get("/servicos", function (req, res) {
  res.render("servicos");
});

// rota produtos
app.get("/produtos", function (req, res) {
  res.render("produtos");
});

// iniciando o servidor
const port = 8080;
app.listen(port, function (error) {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!");
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});

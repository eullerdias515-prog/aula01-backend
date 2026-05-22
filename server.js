const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;

  console.log('Email recebido:', email);
  console.log('Senha recebida:', senha);

  res.send(`
    <h1>Dados recebidos pelo servidor</h1>
    <p>Email: ${email}</p>
    <p>Senha: ${senha}</p>
    <a href="/login">Voltar</a>
  `);
});

app.post('/cadastro', (req, res) => {
  console.log('Dados do Cadastro:', req.body);
  res.send('Cadastro recebido! Checa o terminal do VS Code.');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
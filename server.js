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
  console.log('Dados do Login:', req.body); 
  res.send('Login recebido! Checa o terminal do VS Code.');
});

app.post('/cadastro', (req, res) => {
  console.log('Dados do Cadastro:', req.body);
  res.send('Cadastro recebido! Checa o terminal do VS Code.');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
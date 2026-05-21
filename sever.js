const http = require('http');

const servidor = http.createServer((req, res) => {
  
  if (req.url === '/') {
    res.end('Pagina Inicial');
  }
  
  else if (req.url === '/sobre') {
    res.end('Pagina sobre');
  }
  
  else if (req.url === '/contato') {
    res.end('Pagina de contato');
  }
  
  else {
    res.end('Pagina nao encontrada');
  }
  
});

servidor.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
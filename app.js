const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Adiciona suporte a JSON no corpo da requisição
app.use(express.json());

// Serve arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Roteador
app.use('/', indexRouter);

// Rota 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

const express = require('express');
const app = express();
app.use(express.json());

let mensagemAtual = "";

app.post('/mensagem', (req, res) => {
  mensagemAtual = req.body.mensagem;
  res.json({ status: 'Mensagem atualizada com sucesso!' });
});

app.get('/mensagem', (req, res) => {
  res.json({ mensagem: mensagemAtual });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

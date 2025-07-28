const express = require('express');
const router = express.Router();

let mensagemAtual = "Aguardando novas mensagens...";

router.post('/mensagem', (req, res) => {
  mensagemAtual = req.body.mensagem;
  res.json({ status: 'Mensagem atualizada com sucesso!' });
});

router.get('/mensagem', (req, res) => {
  res.json({ mensagem: mensagemAtual });
});

router.get('/setMensagem/:mensagem', (req, res) => {
  const { mensagem } = req.params;
  mensagemAtual = mensagem;
  res.json({ status: 'Mensagem atualizada com sucesso!' });
});

module.exports = router;

const express = require('express');
const router = express.Router();

let mensagemAtual = "";

router.post('/mensagem', (req, res) => {
  mensagemAtual = req.body.mensagem;
  res.json({ status: 'Mensagem atualizada com sucesso!' });
});

router.get('/mensagem', (req, res) => {
  res.json({ mensagem: mensagemAtual });
});

module.exports = router;

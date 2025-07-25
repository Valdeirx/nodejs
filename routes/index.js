// routes/index.js
const express = require('express');
const router = express.Router();

let mensagem = ''; // Variável global simples

router.post('/mensagem', (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      if (!data.mensagem) {
        return res.status(400).json({ erro: 'mensagem é obrigatória' });
      }
      mensagem = data.mensagem;
      res.json({ sucesso: true });
    } catch (err) {
      res.status(400).json({ erro: 'JSON inválido' });
    }
  });
});

router.get('/mensagem', (req, res) => {
  res.json({ mensagem });
});

module.exports = router;

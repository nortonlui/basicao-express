const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home stories');
});

// Query params
router.get('/queryparams', (req, res) => {
  const { nome, curso } = req.query;
  console.log(req.query);
  res.send(
    `Nome: ${nome ? nome : ' vazio'} e curso: ${curso ? curso : ' vazio'}`,
  );
});

// Parametro nao obrigatorio
router.get('/location/:nome?', (req, res) => {
  const nome = req.params.nome;
  res.send(`Location: ${nome ? nome : ' Sem nome '}`);
});

// Parametros obrigatorios
router.get('/:id/:nome', (req, res) => {
  const { id, nome } = req.params;
  res.send(`<h2>ID: ${id}</h2><h2>Nome: ${nome}</h2>`);
});

router.get('/about', (req, res) => {
  res.send('About');
});

router.get('/devices', (req, res) => {
  res.send('Devices');
});

module.exports = router;

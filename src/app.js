const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));


app.get('/api/test', (req, res) => {
  res.json({ mensagem: 'API funcionando 🚀' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Servidor rodando...');
});
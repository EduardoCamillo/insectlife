const express = require('express');
const path = require('path');
const pool = require('./db'); 
const app = express();

app.use(express.static(path.join(__dirname, '../public')));


app.get('/api/test', (req, res) => {
  res.json({ mensagem: 'API funcionando 🚀' });
});
app.get('/produtos',async (req,res)=>{
  try{
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  }catch(err){
      console.error(err);
      res.status(500).json({erro: 'Erro ao buscar os produtos'});
  }
  
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Servidor rodando...');
});
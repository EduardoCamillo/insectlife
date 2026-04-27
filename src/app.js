const express = require('express');
const path = require('path');
const pool = require('./db'); 
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));


app.get('/',(req,res) =>{
  res.json({mensagem: 'Ta on!'})
})

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
app.post('/login',async function(req,res){
  const {email,senha} = req.body;
  try {
    const result = await pool.query('SELECT * from users where email = $1',[email]);
    const user = result.rows[0];
    
    if(!user){
      return res.status(400).json({erro: 'Não há usuários com esse email'});
    }

    if(user.senha !== senha){
      return res.status(400).json({erro: 'Senha inválida'});
    }
    res.json({
      mensagem: 'Login realizado com sucesso',
      user: {
        id: user.id,
        nome: user.nome,
        role: user.role
      }
    });


    
  } catch (error) {
     console.error(error);
    res.status(500).json({ erro: 'Erro no login' });
  }
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Servidor rodando...');
});

window.onload = () => {
  getProducts();
};
let cart = [];
console.error('ue vida')
function addCarrinho(prod){
  cart.push(prod);
  console.log(cart);
}
async function getProducts() {
  try {
    const response = await fetch('/produtos');
    const data = await response.json();

    const container = document.getElementById('products');
    container.innerHTML = '';

    data.forEach(element => {
        const item = document.createElement('div');

        item.innerHTML = `
        <div class="card">
                <img src="">
                <div class="card-body">
                    <h3>${element.nome}</h3>
                    <p>${element.descricao}</p>
                    <div class="price">R$ ${element.precounit}</div>
                    <button onclick="addCarrinho(${element.id})">Adicionar ao carrinho</button>
                </div>
            </div>
        `
        container.appendChild(item);
    });

  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    
  }
}

async function fazerLogin(){
   const email = document.getElementById('email').value;
   const senha = document.getElementById('senha').value;

   try {
    const response = await fetch('/login',{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    })
     const data = await response.json();
     if(response.ok){
        alert('rolou du');
        window.location.href = '/';
     }else{
        alert(data.erro);
     }
   } catch (error) {
    
   }
    
}
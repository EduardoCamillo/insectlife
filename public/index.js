
window.onload = () => {
  getProducts();
};
console.error('salve galerinhaaaa');
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
                    <p>Perfeito para lagartos e aves.</p>
                    <div class="price">R$ ${element.precounit}</div>
                    <button>Adicionar ao carrinho</button>
                </div>
            </div>
        `
        container.appendChild(item);
    });

  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    
  }
}
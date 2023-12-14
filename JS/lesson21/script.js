
let products = []

async function getProducts(){
    const data = await fetch('https://dummyjson.com/product')
    let prog = await data.json()
    products = prod.products 
}




async function fetchProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const products = await response.json();
    return products;
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const img = document.createElement('img');
    img.className = 'product-image';
    img.src = product.image;
    img.alt = product.name;

    const name = document.createElement('h2');
    name.textContent = product.name;

    const description = document.createElement('p');
    description.textContent = product.description;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(description);

    return card;
}

async function loadProducts() {
    const products = await fetchProducts();
    const container = document.getElementById('products-container');

    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

loadProducts();
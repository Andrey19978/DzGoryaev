// Реализовать страницу с карточками продуктов.
// Продукты получаем: https://dummyjson.com/products
// Используем браузерные create и append
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products Page</title>
    <style>
        .product-card {
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 15px;
            margin: 10px;
            display: inline-block;
            width: 200px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .product-card img {
            width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <div id="products"></div>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
        const apiUrl = 'https://dummyjson.com/products';

        async function fetchProducts() {
            try {
                const response = await axios.get(apiUrl);
                displayProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        function displayProducts(products) {
            const productsElement = document.getElementById('products');
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                const productImg = document.createElement('img');
                productImg.src = product.image;
                productImg.alt = product.name;
                productCard.appendChild(productImg);

                const productName = document.createElement('h2');
                productName.textContent = product.name;
                productCard.appendChild(productName);

                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;
                productCard.appendChild(productDescription);

                productsElement.appendChild(productCard);
            });
        }

        fetchProducts();
    </script>
</body>
</html>
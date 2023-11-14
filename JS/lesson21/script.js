
let products = []

async function getProducts(){
    const data = await fetch('https://dummyjson.com/product')
    let prog = await data.json()
    products = prod.products 
}





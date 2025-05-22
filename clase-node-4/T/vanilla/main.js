const container = document.querySelector('.container')
const containerProduct = document.querySelector('.container-product')
const form = document.querySelector('form')

function getProducts() {
    fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            let products = ''
            data.payload.forEach(product => {
                products += `
                    <div data-id="${product.id}" class="card">
                        <h2>${product.nombre}</h2>
                        <h3>nombre: ${product.nombre}</h3>
                        <h3>descripcion: ${product.descripcion}</h3>
                        <h3>precio: $${product.precio}</h3>
                    </div>
                `
            })
            container.innerHTML = products
        })
}

function getProduct(id) {
    fetch(`http://localhost:3000/api/products/${id}`)
        .then(response => response.json())
        .then(data => {
            containerProduct.innerHTML = `
                    <div data-id="${data.payload.id}" class="card card-red">
                        <h2>${data.payload.nombre}</h2>
                        <h3>nombre: ${data.payload.nombre}</h3>
                        <h3>descripcion: ${data.payload.descripcion}</h3>
                        <h3>precio: $${data.payload.precio}</h3>
                    </div>
                `
        })
}

function handleProduct () {
    form.addEventListener('submit', function(event){
        event.preventDefault() 
        const data = Object.fromEntries(new FormData(event.target))

        getProduct(data.id)
    })
}

function main() {
    getProducts()
    handleProduct()
}

main()
const ProductManager = require ('./progBackend')

const manager = new ProductManager('products.json')

( async () => {
    await manager.addProduct({
        title: 'Teclado',
        description: 'El tecla farias',
        price: 1200,
        thumbnail:'src = lasteclitasdelabuelo',
        stock: 2
    })

    console.log(await manager.getProducts());
})()
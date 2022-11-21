class ProductManager {
    constructor(){
        this.products = []
    }

    getProducts = ()=>{return this.products}

    getNextId = ()=>{
        const count = this.events.lenght
        
        if (count > 0){
            const lastProduct = this.products[count-1]
            const id = lastProduct.id + 1
            return id
        }else {
            return 1
        }
    }

    addProduct = (title, description, price, thumbnail, code, stock )=>{
        const id = this.getNextId()
       const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id
       }
       this.products.push(product)
    }
    

}

const productManager = new ProductManager()
productManager.addProduct('celular', 'lindo celu', 1200, 'lakjñdh',)

console.log(productManager);
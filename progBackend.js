class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts = () => {
        return this.products
    }

    getNextId = () => {
        const count = this.products.lenght

        if (count > 0) {
            const lastProduct = this.products[count - 1]
            const id = lastProduct.id + 1
            return id
        } else {
            return 1
        }
    }


    getNextCode = () => {
        const count = this.products.lenght

        if (count > 0) {
            const lastProduct = this.products[count - 1]
            const code = lastProduct.code + 1
            return code
        } else {
            return 1
        }
    }


    addProduct = (title, description, price, thumbnail, stock) => {
        const id = this.getNextId()
        const code = this.getNextCode()
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        /* if (Object.values(product.title) === '') {
            console.log('Todos los campos son obligarios, por favor llenarlos todos')
        }else this.products.push(product) */
        
        if(title === '')console.log('Todos los campos son obligarios, por favor llenarlos todos');
        else if (description === '') console.log('Todos los campos son obligarios, por favor llenarlos todos');
        else if (price === 0) console.log('Todos los campos son obligarios, por favor llenarlos todos');
        else if (thumbnail === '') console.log('Todos los campos son obligarios, por favor llenarlos todos');
        else if (description === '') console.log('Todos los campos son obligarios, por favor llenarlos todos');
        else if (stock === 0) console.log('Todos los campos son obligarios, por favor llenarlos todos');
        else this.products.push(product)

        
    }
    

    getProductById = (id) =>{
      this.products.find(prod => prod.id === id) 
      if (prod.id != id) console.log('Not found');
    };
    
    


}

const productManager = new ProductManager()
productManager.addProduct("mouse", "raton paranoico", 1200, scr = 'slsll', 22, 2)

productManager.addProduct("teclado","las teclitas", 3000, src = 'lasteclitasdelabuelo', 33, 3)

productManager.addProduct("monitor","el moni moni", 4300, src = 'elmonidelabuelo', 3)

console.log(productManager);


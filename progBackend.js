class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts = () => {
        return this.products
    }

    getNextId = () => {
        const count = this.products.length

        if (count > 0) {
            const lastProduct = this.products[count - 1]
            const id = lastProduct.id + 1
            return id
        } else {
            return 1
        }
    }


    getNextCode = () => {
        const count = this.products.length

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

        if(title === undefined){
            return console.log('Todos los campos son obligarios, por favor llenarlos todos');
         }else if (description === undefined) {
             return console.log('Todos los campos son obligarios, por favor llenarlos todos');
         }else if (price === undefined) {
             return console.log('Todos los campos son obligarios, por favor llenarlos todos');
         }else if (thumbnail === undefined) {
             return console.log('Todos los campos son obligarios, por favor llenarlos todos');
         }else if (stock === undefined) {
             return console.log('Todos los campos son obligarios, por favor llenarlos todos');
         }else {
            return this.products.push(product)
         }
        
        

        /* if (Object.values(product.title) === '') {
            console.log('Todos los campos son obligarios, por favor llenarlos todos')
        }else this.products.push(product) */
        
        

        /* if (!title && !description && !price && !thumbnail && !stock ){
            return console.log('Todos los campos son obligarios, por favor llenarlos todos');
        } else {
           return this.products.push(product)
        } */

        
    }
    

    getProductById = (id) =>{
      let prodVerification = this.products.find(prod => prod.id === id) 
      if (prodVerification === undefined) {
      return console.log('Not found');
    }else {
        return prodVerification
    }
    };
    
    


}

const productManager = new ProductManager()
productManager.addProduct("raton paranoico", 1200, scr = 'slsll', 22)

productManager.addProduct("teclado","las teclitas", 3000, src = 'lasteclitasdelabuelo', 3)

productManager.addProduct("monitor","el moni moni", 4300, src = 'elmonidelabuelo', 3)


console.log('============================================');
console.log(productManager.getProductById(2)); 
console.log('============================================');
console.log(productManager.getProducts());
console.log('============================================');

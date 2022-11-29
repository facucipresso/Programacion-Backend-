const fs = require('fs')


class ProductManager {
    constructor() {
        this.path = fs.writeFileSync('./productManager.json', '[]')
    }

    getProducts = () => {
        let mostrarProductos = JSON.parse (fs.readFileSync('this.path', 'utf-8'))
        console.log( fs.readFileSync(mostrarProductos));

    }

    getNextId = () => {
        const count = JSON.parse(this.path.length)
        const countP = JSON.parse(this.path)

        if (count > 0) {
            const lastProduct = countP[count - 1]
            const id = lastProduct.id + 1
            return id
        } else {
            return 1
        }
    }


    getNextCode = () => {
        const count = JSON.parse(this.path.length)
        const countParse = JSON.parse(this.path)

        if (count > 0) {
            const lastProduct = countParse[count - 1]
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
            return JSON.stringify (fs.writeFileSync('this.path',product))
            
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

    upDateProduct = (id, productActualise)=>{
        let prodVerification = JSON.parse (this.paht.find(prod => prod.id === id))
        
        if (prodVerification === undefined){
            return console.log('Product not found');
        }else {
            return fs.writeFileSync(this.path, productActualise )
        }
    }


    deleteProduct = (id) => {
        let prodVerification = JSON.parse (this.paht.find(prod => prod.id === id))
        if ( prodVerification===undefined){
            return console.log('Can not delete');
        }else {
            return fs.unlinkSync(prodVerification)
        }
    }
    

    getProductById = (id) =>{
      let prodVerification = JSON.parse (this.paht.find(prod => prod.id === id)) 
      if (prodVerification === undefined) {
      return console.log('Not found');
    }else {
        return fs.readFileSync(prodVerification, 'utf-8') 
    }
    };
    
    


}

const productManager = new ProductManager()
productManager.addProduct("mouse", "raton paranoico", 1200, scr = 'slsll', 22)

/* productManager.addProduct("teclado","las teclitas", 3000, src = 'lasteclitasdelabuelo', 3)

productManager.addProduct("monitor","el moni moni", 4300, src = 'elmonidelabuelo', 3) */


/* console.log('============================================');
console.log(productManager.getProductById(2)); 
console.log('============================================'); */
console.log(productManager.getProducts());
//console.log('============================================');
console.log(productManager.upDateProduct(1, addProduct("mouse", "ratones paranoico", 1200, scr = 'slsll', 22)));

const fs = require('fs')


class ProductManager {
    constructor(path) {
        this.path = path 
    }

    read = ()=>{
        if(fs.existsSync(this.path)){
          return fs.promises.readFile(this.path, 'utf-8') 
          .then (r=>JSON.parse(r)) 
        } 
        return []
    }

    write = list=>{
        return  fs.promises.writeFile(this.path,JSON.stringify(list))
    }

    getProducts = () => {
        let mostrarProductos = this.read()
        return mostrarProductos
    }

    getNextID = list =>{
        const count = list.length 
        return (count > 0 ) ? list[count-1].id + 1 : 1

    }

    /* getNextId = () => {
        const count = JSON.parse(this.path.length)
        const countP = JSON.parse(this.path)

        if (count > 0) {
            const lastProduct = countP[count - 1]
            const id = lastProduct.id + 1
            return id
        } else {
            return 1
        }
    } */


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

    addProduct = async (obj) => {
        const list = await this.read()
        const nextID = this.nextID(list)
        obj.id = nextID 

        list.push(obj)
        await this.write(list)
    }


    /* addProduct = async(title, description, price, thumbnail, stock) => {
        const list = await this.read()
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
            list.push(title, description, price, thumbnail, stock)
            await this.write(list)
            
         }
        
    } */    

        /* if (Object.values(product.title) === '') {
            console.log('Todos los campos son obligarios, por favor llenarlos todos')
        }else this.products.push(product) */
        
        

        /* if (!title && !description && !price && !thumbnail && !stock ){
            return console.log('Todos los campos son obligarios, por favor llenarlos todos');
        } else {
           return this.products.push(product)
        } */

        
    

    upDateProduct = async (id, obj)=>{
        obj.id = id 
        const list = await this.read()

        for (let i = 0; i < array.length; i++) {
            if (list[i].id = id){
                list[i] = obj
                break 
            }
        }
        await this.write(list)
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

/* const productManager = new ProductManager()
productManager.addProduct("mouse", "raton paranoico", 1200, scr = 'slsll', 22) */

/* productManager.addProduct("teclado","las teclitas", 3000, src = 'lasteclitasdelabuelo', 3)

productManager.addProduct("monitor","el moni moni", 4300, src = 'elmonidelabuelo', 3) */


/* console.log('============================================');
console.log(productManager.getProductById(2)); 
console.log('============================================'); */
//console.log(productManager.getProducts());
//console.log('============================================');
//console.log(productManager.upDateProduct(1, addProduct("mouse", "ratones paranoico", 1200, scr = 'slsll', 22)));

module.exports = ProductManager
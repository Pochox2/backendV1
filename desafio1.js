class ProductManager {
    constructor() {
        this.products = []
        this.index = 0
    }

    getProducts = () => {
        return this.products
    }

    getProductsbyId(id) {
        const product=this.products.find((a) => a.id===id);
        if(product) {
            return product}
        else {
            console.log("El id no coincide con ningun producto");
            return null;
        }
    }

    addProduct = (tittle, description, price, thumbnail, code, stock) => {
        this.index++
        const id = this.index
        const newProduct = {id, tittle, description, price, thumbnail, code, stock}
        if (!tittle || !description || !price || !thumbnail || !code || !stock) {
            return console.error("Faltan datos")
            } 
        
        const ProductRep = this.products.some((product) => product.code === code)
            if (ProductRep) {
                return console.error("El codigo del producto ya existe")
            }  else {
                this.products.push(newProduct)
            }    
    }

}

const product = new ProductManager()
product.addProduct("Coca Cola", "Botella de Coca cola de 500ml", 200, "img/coca", "0a", 10)
product.addProduct("Coca Cola zero", "Botella de Coca cola de 500ml", 200, "img/coca", "0b", 10)
product.addProduct("Coca Cola", "Botella de Coca cola de 500ml", 200, "img/coca", "0a", 10)
// console.log(product.getProducts())
console.log(product.getProductsbyId(5))


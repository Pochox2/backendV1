const express = require("express")

const app = express()


app.get("/", (req, res) => {
    const ProductManager = require("./desafio2.js")
    const ProdManager= new ProductManager()
    ProdManager.addProduct("Coca Cola", "Botella de Coca cola de 500ml", 200, "img/coca", "0a", 10)
    ProdManager.addProduct("Coca Cola zero", "Botella de Coca cola de 500ml", 200, "img/coca0", "0b", 10)
    ProdManager.addProduct("Sprite", "Botella de Coca cola de 500ml", 200, "img/sprite", "1a", 10)
    ProdManager.addProduct("Sprite Zero", "Botella de Coca cola de 500ml", 200, "img/sprite0", "1b", 10)
    ProdManager.addProduct("Monster", "Lata de monster de 500ml", 200, "img/monster", "2a", 10)
    ProdManager.addProduct("Monster blanca", "Lata de Monster blanca de 500ml", 200, "img/monster1", "2b", 10)
    ProdManager.addProduct("Monster mango", "Lata de Monster celeste de 500ml", 200, "img/monster2", "2c", 10)
    ProdManager.addProduct("Monster strawberry", "Lata de Monster roja de 500ml", 200, "img/monster3", "2d", 10)
    ProdManager.addProduct("Fanta", "Lata de Fanta de 500ml", 200, "img/fanta", "3a", 10)
    ProdManager.addProduct("Fanta Zero", "Lata de Fanta zero de 500ml", 200, "img/fanta0", "3b", 10)
    res.send("Producto subido")
})

app.get("/productos", (req, res) => {
    const query = req.query;
    const products = require("./desafio2.json")
    let filtrop = products
    if(query.limit) {
        const limit = parseInt(query.limit) 
        filtrop = filtrop.slice(0, limit)
    }
    res.send(filtrop)
})

app.get("/productos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)) {
        res.status(400).send("El id dado no es un número")
        return
    }
    
    const products = require("./desafio2.json")


    let result = products.filter(product => product.id === id)
    if (result.length === 0) {
        res.status(400).send("El id no coincide con el de ningun producto")
        return
    }
    res.send(result)
})

app.listen(8080, () => {console.log("Server on")})
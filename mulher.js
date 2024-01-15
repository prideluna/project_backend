const express = require("express")

const router = express.Router()

const app = express()
const porta = 3333;

function mostraMulher(request, response){
    response.json({
        nome : "Priscila",
        imagem : "https://blog-static.petlove.com.br/wp-content/uploads/2022/05/gato-preto-deitado-Petlove.jpg",
        minibio : "desenvolvedora"
    })
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
const express = require("express")

const router = express.Router()
const { v4:uuidv4 } = require('uuid')

const app = express()
app.use(express.json())
const porta = 3333;

const mulheres = [
    {
        id: '1',
        nome: "Priscila",
        imagem : "https://blog-static.petlove.com.br/wp-content/uploads/2022/05/gato-preto-deitado-Petlove.jpg",
        minibio : "desenvolvedora"
    },
    {
        id: '2',
        nome: "iana shan",
        imagem: "https://www.patasdacasa.com.br/sites/default/files/styles/webp/public/noticias/2023/03/gato-malhado-tudo-sobre-a-cor-de-gato-mais-popular-do-mundo-galeria-com-50-fotos.jpg.webp?itok=7_3khLCl",
        minibio: "Desenvolvedora e miinistradora"
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function criaMulher(request, response){
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio

    }
    mulheres.push(novaMulher)
    response.json(mulheres)
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.use(router.post('/mulheres', criaMulher))
app.listen(porta, mostraPorta)
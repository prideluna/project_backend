const express = require("express")

const router = express.Router()

const app = express()
const porta = 3333;

const mulheres = [
    {
        nome: "Priscila",
        imagem : "https://blog-static.petlove.com.br/wp-content/uploads/2022/05/gato-preto-deitado-Petlove.jpg",
        minibio : "desenvolvedora"
    },
    {
        nome: "iana shan",
        imagem: "https://www.patasdacasa.com.br/sites/default/files/styles/webp/public/noticias/2023/03/gato-malhado-tudo-sobre-a-cor-de-gato-mais-popular-do-mundo-galeria-com-50-fotos.jpg.webp?itok=7_3khLCl",
        minibio: "Desenvolvedora e miinistradora"
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
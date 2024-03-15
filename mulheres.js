const express = require("express")
const router = express.Router()
const cors =  require('cors')
const conectaBancoDeDados = require('./bancoDeDados')

conectaBancoDeDados()

const Mulher = require('./mulherModel')
const app = express()
app.use(express.json())
app.use(cors())
const porta = 3333;

// const mulheres = [
//     {
//         id: '1',
//         nome: "Priscila",
//         imagem : "https://blog-static.petlove.com.br/wp-content/uploads/2022/05/gato-preto-deitado-Petlove.jpg",
//         minibio : "desenvolvedora"
//     },
//     {
//         id: '2',
//         nome: "iana shan",
//         imagem: "https://www.patasdacasa.com.br/sites/default/files/styles/webp/public/noticias/2023/03/gato-malhado-tudo-sobre-a-cor-de-gato-mais-popular-do-mundo-galeria-com-50-fotos.jpg.webp?itok=7_3khLCl",
//         minibio: "Desenvolvedora e miinistradora"
//     }
// ]

//GET
async function mostraMulheres(request, response){
    try{
        const mulheresVindasDoBancoDeDados = await Mulher.find()
        response.json(mulheresVindasDoBancoDeDados)

    }catch(err){
        console.log(err)
    }
}

//POST
async function criaMulher(request, response){
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio

    })
    try{
        const mulherCriada = await novaMulher.save();
        response.status(201).json(mulherCriada)
    }catch(err){
        console.log(err)
    }
}

//PATCH
async function corrigeMulher(request, response){
   
    try{
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if(request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }
    
        if(request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }
    
        if(request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem
        }
        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)

    }catch(err){
        console.log(err)
    }

}

//DELETE
async function deletaMulher(request, response){
    try{
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ mensagem: 'Mulher deletada com sucesso! '})

    }catch(err){
        console.log(err)
    }
}

app.use(router.get('/mulheres', mostraMulheres))
app.use(router.post('/mulheres', criaMulher))
app.use(router.patch('/mulheres/:id', corrigeMulher))// configurei rota patch
app.use(router.delete('/mulheres/:id', deletaMulher))

//PORTA

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}


app.listen(porta, mostraPorta)
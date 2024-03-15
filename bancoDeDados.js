const mongoose = require('mongoose')

async function conectaBancoDeDados(){
   try{
    console.log("Conexao  iniciou")
    
    await mongoose.connect("mongodb+srv://prideluna:VUZPfPT58JXxyNqn@clustermulheres.pelny5y.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMulheres")
    console.log("Conexao com DB feita com sucesso")

   } catch(erro){
    console.log(erro)

   }

}
module.exports = conectaBancoDeDados

const express = require('express')
require('dotenv').config() //Carrega as 'variáveis de ambiente'
const InicializaMongoServer = require('./config/Db')

//Inicializando o servidor MongoDB
InicializaMongoServer()
//Definindo as rotas da aplicação

const rotasCategoria = require('./routes/Categoria')

const app = express()
//Porta DEFAULT

const PORT = process.env.PORT //Busca configuração presente no arquivo .env

//Parse conteúdo JSON
app.use(express.json()) //verifica se o arquivo recebido é JSON

app.get('/', (req, res) => { //app.get irá fazer uma busca na raiz do banco de dados. Caso já tenha uma tabela, por exemplo produtos, ficará /produtos

//req e res (request e response) -> É referente a requisição e resposta.
    
    res.json({mensagem: "API iComida 100% funcional! 👏",
    versao: '1.0.0'
    })
})
/*Rotas das Categorias*/

app.use('/categorias', rotasCategoria)

app.listen(PORT, (req, res) => {
    console.log(`Servidor Web iniciado na porta ${PORT}`)
})
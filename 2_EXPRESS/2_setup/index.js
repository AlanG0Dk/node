
const express = require('express')

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('SOU O MELHOR DO MUNDO DO VAVA')
})

app.listen(3000, () => {
    console.log('App rodando na porta 3000')
})
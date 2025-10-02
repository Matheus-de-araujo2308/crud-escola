const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const alunos = require('./routes/alunos')
const professores = require ('./routes/Professores')

app.use('/alunos', alunos);
app.use('/professores', professores)

app.listen(3000, () => {
console.log('Server is running on http://localhost:3000')
})
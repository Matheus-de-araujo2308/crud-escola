const express = require('express')
const router = express.Router()

let alunos = [
  { id: 1, nome: "João", email:"joao20@gmail.com", cpf:"12312312332", telefone:"61981678342", dataNascimento: "2005-10-12" },
  { id: 2, nome: "Maria", email:"maria22@gmail.com", cpf:"12412412434", telefone: "11978162922", dataNascimento: "2002-01-01" }
]


router.get('/', (req, res) => {
  res.json(alunos)
})

// Buscar por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const aluno = alunos.find(a => a.id === id)
  if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' })
  res.json(aluno)
})

// Criar novo
router.post('/', (req, res) => {
  const { nome, email, cpf, telefone, dataNascimento } = req.body
  if (!nome || !email || !cpf || !telefone || !dataNascimento) {
    return res.status(400).json({ erro: 'Campos obrigatórios' })
  }

  const novoAluno = {
    id: alunos.length + 1,
    nome, email, cpf, telefone, dataNascimento
  }
  alunos.push(novoAluno)
  res.status(201).json(novoAluno)
})

// Atualizar
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const aluno = alunos.find(a => a.id === id)
  if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' })

  Object.assign(aluno, req.body)
  res.json(aluno)
})

// Deletar
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = alunos.findIndex(a => a.id === id)
  if (index === -1) return res.status(404).json({ erro: 'Aluno não encontrado' })

  alunos.splice(index, 1)
  res.json({ mensagem: 'Aluno deletado com sucesso' })
})

module.exports = router

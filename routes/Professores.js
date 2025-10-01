const express = require('express')
const router = express.Router()

let professores = [
  { id: 1, nome: "Gustavo", cpf:"12312312451", email:"gustavao@gmail.com", curso:"ADS", disciplina:"Back-end" },
  { id: 2, nome: "Marlene", cpf:"12412412523", email:"marlene13@gmail.com", curso:"Fundamentos de Lógica", disciplina:"Front-end" }
]

// Listar todos
router.get('/', (req, res) => {
  res.json(professores)
})

// Buscar por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const professor = professores.find(p => p.id === id)
  if (!professor) return res.status(404).json({ erro: 'Professor não encontrado' })
  res.json(professor)
})

// Criar novo
router.post('/', (req, res) => {
  const { nome, cpf, email, curso, disciplina } = req.body
  if (!nome || !cpf || !email || !curso || !disciplina) {
    return res.status(400).json({ erro: 'Campos obrigatórios' })
  }

  const novoProfessor = { id: professores.length + 1, nome, cpf, email, curso, disciplina }
  professores.push(novoProfessor)
  res.status(201).json(novoProfessor)
})

// Atualizar
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const professor = professores.find(p => p.id === id)
  if (!professor) return res.status(404).json({ erro: 'Professor não encontrado' })

  Object.assign(professor, req.body)
  res.json(professor)
})

// Deletar
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = professores.findIndex(p => p.id === id)
  if (index === -1) return res.status(404).json({ erro: 'Professor não encontrado' })

  professores.splice(index, 1)
  res.json({ mensagem: 'Professor deletado com sucesso' })
})

module.exports = router

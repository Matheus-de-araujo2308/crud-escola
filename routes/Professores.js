let professores = [
    { id: 1, nome: "Gustavo", cpf:"12312312451", email:"Gustovao@gmail.com", curso:"ADS" ,disciplina:"Back-end" },
    { id: 2, nome: "Marlene", cpf:"12412412523", email:"marlene13@gmail.com", curso: "Fundamentos de logica", disciplina: "front-end" }
];


const express = require('express');
const router = express.Router();


// Lista tudo
router.get('/', (req, res) => {
    res.json(professores);
});


// Busca pelo ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const professor = professores.find(a => a.id === id);
    if (!professor) return res.status(404).json({ erro: 'professor não encontrado' });
    res.json(professor);
});


// Cria novo professor
router.post('/', (req, res) => {
    const { nome, idade } = req.body;
    if (!nome || !idade) return res.status(400).json({ erro: 'Campos obrigatórios' });
    
    const duplicado = professores.find(a => a.nome === nome);
    if (duplicado) return res.status(400).json({ erro: 'professor já existe' });

    const novoprofessor = { id: professores.length + 1, nome, idade };
    professores.push(novoprofessor);
    res.status(201).json(novoprofessor);
});


// Atualiza professor
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, idade } = req.body;

    const professor = professores.find(a => a.id === id);
    if (!professor) return res.status(404).json({ erro: 'professor não encontrado' });

    if (nome) professor.nome = nome;
    if (idade) professor.idade = idade;

    res.json(professor);
});


// Deleta professor
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = professores.findIndex(a => a.id === id);
    if (index === -1) return res.status(404).json({ erro: 'professor não encontrado' });

    professores.splice(index, 1);
    res.json({ mensagem: 'professor deletado com sucesso' });
});

module.exports = router;
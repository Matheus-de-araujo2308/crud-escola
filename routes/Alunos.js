let alunos = [
    { id: 1, nome: "João", idade: 20, cpf:"12312312332", email:"jao20@gmail.com", tefelone:"61981678342", dataNascimento: "12-10-2005" },
    { id: 2, nome: "Maria", idade: 22, cpf:"12412412434", email:"marea22@gmail.com", tefelone: "11978162922", dataNascimento: "01-01-2002"}
];


const express = require('express');
const router = express.Router();


// Lista tudo 
router.get('/', (req, res) => {
    res.json(alunos);
});

//Busca pelo ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const aluno = alunos.find(a => a.id === id);
    if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });
    res.json(aluno);
});


// Cria novo aluno
router.post('/', (req, res) => {
    const { nome, idade } = req.body;
    if (!nome || !idade) return res.status(400).json({ erro: 'Campos obrigatórios' });
    
    const duplicado = alunos.find(a => a.nome === nome);
    if (duplicado) return res.status(400).json({ erro: 'Aluno já existe' });

    const novoAluno = { id: alunos.length + 1, nome, idade };
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
});

// Atualiza aluno
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, idade } = req.body;

    const aluno = alunos.find(a => a.id === id);
    if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });

    if (nome) aluno.nome = nome;
    if (idade) aluno.idade = idade;

    res.json(aluno);
});


// Deletar aluno
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = alunos.findIndex(a => a.id === id);
    if (index === -1) return res.status(404).json({ erro: 'Aluno não encontrado' });

    alunos.splice(index, 1);
    res.json({ mensagem: 'Aluno deletado com sucesso' });
});

module.exports = router;
#  CRUD Escola

Projeto desenvolvido para fins acadêmicos, com o objetivo de praticar o uso de **Node.js** e **Express** para criação de uma API RESTful com CRUD de **Alunos** e **Professores**.

---

##  Tecnologias utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [Nodemon](https://www.npmjs.com/package/nodemon) (ambiente de desenvolvimento)
- [Postman](https://www.postman.com/) para testes

---

##  Funcionalidades

### Alunos
- Listar todos os alunos
- Buscar aluno por **ID**
- Criar novo aluno
- Atualizar aluno existente
- Deletar aluno

### Professores
- Listar todos os professores
- Buscar professor por **ID**
- Criar novo professor
- Atualizar professor existente
- Deletar professor

---

##  Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_REPO_AQUI.git
Acesse a pasta do projeto:

bash
Copiar código
cd crud-escola
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor:

bash
Copiar código
npm run dev
O servidor estará rodando em:

arduino
Copiar código
http://localhost:3000
 Rotas da API
Alunos
GET /alunos → Lista todos os alunos

GET /alunos/:id → Busca um aluno por ID

POST /alunos → Cria novo aluno

PUT /alunos/:id → Atualiza aluno

DELETE /alunos/:id → Deleta aluno

Professores
GET /professores → Lista todos os professores

GET /professores/:id → Busca um professor por ID

POST /professores → Cria novo professor

PUT /professores/:id → Atualiza professor

DELETE /professores/:id → Deleta professor

Autores
Natanael T Rodrigues

Matheus de Araújo
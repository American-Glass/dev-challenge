
---

# Boas vindas ao repositório MultiSearch<a name="boas-vindas-ao-repositório-multiSearch"></a>

---

# Sumário

- [Boas vindas ao repositório MultiSearch](#boas-vindas-ao-repositório-multiSearch)
- [Para testar o projeto com Deploy](#deploy)
- [Back-End](#back-end)
  - [O que foi desenvolvido](#o-que-foi-desenvolvido-back)
  - [Conexão com o Banco](#conexao-db)
  - [Para testar o projeto](#testar-o-projeto-back)
  - [Testes desenvolvidos](#tdd-back)
    - [Testes](#tdd-1-back)
  - [Endpoint's](#endpoint)
    - [Para buscar Produto POST](#task-post)
- [Front-End](#front-end)
  - [O que foi desenvolvido](#o-que-foi-desenvolvido-front)
  - [Para testar o projeto](#testar-o-projeto-front)
    - [Conexão local](#conexao-local-front)
  - [Testes desenvolvidos](#tdd-front)
    - [Testes](#tdd-1-front)

---

## Para testar o projeto com Deploy: <a name="deploy"></a>

Para testar:

Acessar o link: [deploy-heroku](https://frontend-todo-list-2022.herokuapp.com/)

---

# Back-End <a name="back-end"></a>

## O que foi desenvolvido: <a name="o-que-foi-desenvolvido-back"></a>

  Foi desenvolvido um back-end para um sistema de registro de tarefas para a empresa Ebytr (Fictícia)

  As tarefas são inseridas em um banco de dados **Mysql** sendo possível modelar os dados através do **prisma ORM**

  É possível:
   - Inserir Tarefas
   - Remover Tarefas
   - Atualizar Tarefas
   - Ordenar Tarefas por: Ordem alfabetica, data de criação e status

---

### Conexão com o Banco: <a name="conexao-db"></a>

O banco de dados foi desenvolvido de forma simulada, não tendo necessidade de nenhumas instalação prévia.

---

## Para testar o projeto Localmente: <a name="testar-o-projeto-back"></a>

1. Clone o repositório
  * `https://github.com/Thiago-FR/dev-challenge.git`.
  * Entre na pasta do repositório que você acabou de clonar

2. Acesse a branch
  * `git checkout thiago-ferreira-rise`

3. Rode a API local
  * Entre na pasta */backend*

4. Instale as dependências
  * `npm install`

5. Inicie a API.
  * `npm run dev`

---

## Testes desenvolvidos: <a name="tdd-back"></a>

### Testes <a name="tdd-1--back"></a>

1. Após instalar as dependências rode o comando:
  * `npm test`

---

## Endpoint's <a name="endpoint"></a>

### Para buscar Produtos POST <a name="task-post"></a>

* Endpoint: `/api/multiSearch`

```json
  [
    {
      "text": "teste"
    },
    ...
  ]
```
---

# Front-End <a name="front-end"></a>

## O que foi desenvolvido: <a name="o-que-foi-desenvolvido-front"></a>

  Foi desenvolvido um sistema de registro de tarefas para a empresa Ebytr (Fictícia)

  As tarefas são inseridas, atualizadas e removidas de forma modelada pelo back-end.

  É possível:
   - Inserir Tarefas
   - Remover Tarefas
   - Atualizar Tarefas
   - Ordenar Tarefas por: Ordem alfabetica, data de criação e status

---

## Para testar o projeto: <a name="testar-o-projeto-front"></a>

---

#### Conexão local <a name="conexao-local-front"></a>

**⚠️ IMPORTANTE! ⚠️**

Essa aplicação as seguintes variáveis de ambiente para conexão com o back-end:

```sh
REACT_APP_HOST="http://localhost:3001"
```

---

1. Clone o repositório
  * `https://github.com/Thiago-FR/dev-challenge.git`.
  * Entre na pasta do repositório que você acabou de clonar

2. Acesse a branch
  * `git checkout thiago-ferreira-rose`

3. Rode localmente
  * Entre na pasta */frontend*

4. Instale as dependências
  * `npm install`

5. Inicie o projeto.
  * `npm start`

Obs: Para um melhor aproveitamento é recomendado subir o back-end para ter a experiência completa!

---

## Testes desenvolvidos: <a name="tdd-front"></a>

### Testes <a name="tdd-1-front"></a>

1. Após instalar as dependências rode o comando:
  * `npm test`

---

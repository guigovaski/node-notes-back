# Notes App Back

## Sumário
- **[Sobre](#sobre)**
- **[Documentação](#documentação)**
- **[Instruções](#instruções)**
- **[Pré-requisitos](#pré-requisitos)**
- **[Instalação](#instalação)**
- **[Tecnologias](#tecnologias)**

## Front-end/Projeto Funcionando
**[Notes](https://github.com/guigovaski/react-notes-front)**

## Sobre

Projeto de uma API feita com NodeJS. Construi uma API que faz um CRUD de dados de notas adesivas, onde as informações são: título da nota, conteúdo da nota e data de criação/atualização da nota. Usei o banco de dados PostgreSQL e o ORM Sequelize e também fiz o uso de migrations para segurança e segurança do banco de dados e também de seeders, para testes rápidos em cima do banco.  
**OBS: Para testar o projeto completo, recomendo fazer o clone e rodar o servidor deste respositório: https://github.com/guigovaski/react-notes-front.git**

## Documentação
**Todas as rotas possuem um prefixo /api**

### **Rotas:**
**/GET: /api/notes**  
Action: Retorna todas as notas disponíveis no Banco de dados

**POST: /api/notes**  
Parameters:
- title | required | título da nota
- body | required | texto da nota

**/GET: /api/notes/:id**  
Action: Retorna uma nota em específico

**/PATCH: /api/notes/:id**  
Parameters:
- title | optional | título da nota
- body | optional | texto da nota

Action: Altera uma nota

**/DELETE: /api/notes/:id**  
Action: Deleta uma nota

## Instruções
Você precisa renomear a váriavel de ambiente **.env.local** para **.env** apenas, e preencher de acordo com os seus dados de conexão

## Pré-requisitos
Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node](https://nodejs.org/). Além disso, é interessante que tenha instalado um editor de código como o [VSCode](htts://code.visualstudio.com/).

## Instalação

### Clone este repositório
`$ git clone https://github.com/guigovaski/node-notes-back.git`

### Instale as dependências
`$ npm install`

### Execute o servidor
`$ npm run dev`

## Tecnologias
As seguintes tecnologias foram utilizadas para desenvolver este projeto:
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Typescript](https://www.typescriptlang.org/)

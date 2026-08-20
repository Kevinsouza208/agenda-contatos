# Agenda de Contatos

Aplicação web desenvolvida como projeto integrador das disciplinas de **Desenvolvimento de Aplicativos** e **Desenvolvimento de Backend**.

O projeto tem como objetivo desenvolver uma aplicação para cadastro, organização e gerenciamento de contatos, utilizando tecnologias de desenvolvimento web, uma API e um banco de dados SQL.

O desenvolvimento será realizado de forma incremental, permitindo a construção e a integração progressiva das diferentes partes da aplicação.

---

## Sobre o projeto

A **Agenda de Contatos** permitirá ao usuário cadastrar e consultar contatos, armazenando informações como nome, telefone, e-mail e endereço.

A aplicação será composta por duas partes principais:

- **Frontend:** interface utilizada pelo usuário;
- **Backend:** servidor responsável pela lógica da aplicação e pela comunicação com o banco de dados.

Os dados da aplicação serão armazenados em um banco de dados SQL.

O projeto será desenvolvido inicialmente em ambiente local e, posteriormente, preparado para publicação na internet.

---

## Tecnologias utilizadas

O projeto utiliza ou utilizará as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- Node.js
- Express
- MySQL/MariaDB
- Git
- GitHub

Durante o desenvolvimento, outras ferramentas poderão ser utilizadas conforme a necessidade do projeto.

---

## Arquitetura do projeto

A aplicação está organizada em uma arquitetura que separa as responsabilidades do frontend e do backend.

```text
agenda-contatos/
│
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
│
├── backend/
│   ├── routes/
│   │   └── contatosRoutes.js
│   ├── controllers/
│   │   └── contatosController.js
│   ├── models/
│   │   └── contatosModel.js
│   ├── database/
│   │   └── connection.js
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
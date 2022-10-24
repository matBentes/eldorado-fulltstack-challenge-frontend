# Eldorado FullStack Challenge - Frontend

![list of books](https://github.com/matBentes/eldorado-fulltstack-challenge-frontend/blob/main/images/list-book.png)

<table>
<tr>
<td>
CRUD de um sistema de biblioteca feito em Angular com os campos de ISBN, Name, Author, Copies, Pages. As funcionalidades incluídas nessa aplicação são de Listar, Criar, Editar, Deletar.
</td>
</tr>
</table>

## Demonstração
O app está rodando em: https://library-system-angular.web.app/book


## Backend 
Este projeto está usando um serviço real com deploy no heroku, que você pode ver [aqui](https://eldorado-challenge-fullstack.herokuapp.com/book). O servidor está usando Prisma, Postgres (apenas em produção, localmente, o banco é MySQL).

Para conferir o repositório do backend, acesse [aqui](https://github.com/matBentes/eldorado-fulltstack-challenge/tree/main/backend).

## O que está incluído 
- [x] SCSS utilizado para etilizar os components. 
- [x] Guards para diminuir o boilerplat.
- [x] Validações simples de campos   
- [x] Seguindo as [melhores práticas](https://angular.io/guide/styleguide)
## Setup

Clone o projeto e, na pasta dele, execute os comandos para subir a aplicação.

```bash
npm i
npm run start
```
## Funcionalidades 

### Criar 
![add book](https://github.com/matBentes/eldorado-fulltstack-challenge-frontend/blob/main/images/add-book.png)

### Editar
![edit book](https://github.com/matBentes/eldorado-fulltstack-challenge-frontend/blob/main/images/edit-book.png)

### Deletar 
![delete book](https://github.com/matBentes/eldorado-fulltstack-challenge-frontend/blob/main/images/delete-book.png)

## TODO 
- Adicionar casos de testes 
- Transformar em componentes códigos parecidos para reduzir o boilerplat
- Implementar CI/CD 

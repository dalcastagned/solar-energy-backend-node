<h1 align="center">Bem-Vindo(a) ao projeto DevInHouse Solar Energy 👋</h1>

## Descrição do Projeto

<p align="left">API para CRUD de plantas solares e gerações. Criada para reforçar o aprendizado com a estrutura NodeJs e o frontend pode ser encontrado nesse link: <a href="https://github.com/dalcastagned/solar-energy-frontend">https://github.com/dalcastagned/solar-energy-frontend</a> 
</p>

## Instalação e Inicialização

```sh
docker-compose up --build
```

## Endpoints Plant

```sh
POST: localhost:7140/api/plant
```

```sh
GET: localhost:7140/api/plant
```

```sh
GET: localhost:7140/api/plant/id
```

```sh
GET: localhost:7140/api/plant/counts
```

```sh
DELETE: localhost:7140/api/plant/id
```

```sh
PUT: localhost:7140/api/plant/id
```

## Endpoints Generations

```sh
POST: localhost:7140/api/plant/plantId/generation
```

```sh
GET: localhost:7140/api/plant/plantId/generation
```

```sh
GET: localhost:7140/api/plant/plantId/generation/generationId
```

```sh
GET: localhost:7140/api/plant/generations-last-12-months
```

```sh
DELETE: localhost:7140/api/plant/plantId/generation
```

```sh
PUT: localhost:7140/api/plant/plantId/generation
```

## Endpoints User

```sh
POST: localhost:7140/api/user/signup
```

```sh
POST: localhost:7140/api/user/login
```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Mongoose](https://mongoosejs.com/)
- [mongoose-paginate-v2](https://github.com/aravindnc/mongoose-paginate-v2)

## Autor

<a href="https://github.com/dalcastagned">
 <img src="https://avatars.githubusercontent.com/u/65626347?v=4" width="100px;"/>
 <br />
 <sub><b>Daniel Dalcastagne</b></sub></a> <a href="https://github.com/dalcastagned">🚀</a>

Feito com ❤️ por Daniel Dalcastagne 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-LINKEDIN-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/daniel-dalcastagne-4baa00179/)](https://www.linkedin.com/in/daniel-dalcastagne-4baa00179/)
[![Gmail Badge](https://img.shields.io/badge/-EMAIL-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:contato@danieldalcastagne.com)](mailto:contato@danieldalcastagne.com)

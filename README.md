# ProjetoBackEnd

Projeto Playlist

## Descrição

Playlist personalizável com opção de adição, alteração e exclusão de música do banco de dados, construída usando Node.js, Express e MongoDB Atlas. 

O Express é uma framework do Node.js, personalizável e de fácil utilização, podendo ser usado como linguagem unica para front e backend. Por ser de fácil acesso à base de dados, como Mongo DB Atlas, foi escolhido para desenvolvimento deste projeto. 

Maiores informações e documentação:

* Node.js - https://nodejs.org/en/
* Express - https://expressjs.com/
* MongoDB Atlas - https://www.mongodb.com/pt-br/cloud/atlas/efficiency



## Instalação e execução

* Instale Node.js em sua máquina [Node](https://nodejs.org/en/),

* Clonar o projeto do GitHub [Projeto Playlist](https://github.com/BiaIkari/Playlist.git),

* Baixar as dependências indicadas no package.json (Express, Mongoose, Nodemon, Ejs, Dotenv),

* npm install,

* O arquivo .env foi colocado no git.ignore, por conter login e senha para conexão com o banco de dados. Segue o conteúdo:

DB_URI = mongodb://BiaIkarii:191091Bf2@ac-2u27pou-shard-00-00.n3lohlx.mongodb.net:27017,ac-2u27pou-shard-00-01.n3lohlx.mongodb.net:27017,ac-2u27pou-shard-00-02.n3lohlx.mongodb.net:27017/?ssl=true&replicaSet=atlas-gq5ir8-shard-0&authSource=admin&retryWrites=true&w=majority

* Configurar a base de dados online:
[MongoDB Atlas](https://cloud.mongodb.com/v2/6334ab05fc6f5e0039d91d58#clusters) 

* npm start,

* npm run dev,

* Abrir servidor em localhost:3000


### Dependencias
* Node.js: "v16.13.2",
* dotenv : "^16.0.2",
* ejs : "^3.1.8",
* express: "^4.18.1",
* mongoose : "^6.6.2",
* nodemon": "^2.0.20"


## Autores

Bianca Ikari Machado
@BiaIkari [https://github.com/BiaIkari]

## Version History

* 0.1
    * Initial Release

## Licenças

This project is licensed under the [Mozilla Public License Version 2.0] License

## Agradecimentos

* Flag [Escola de Formação](https://flag.pt/)
* Pedro Ventura [Flag's Teacher](https://github.com/venturap)
* Rodrigo Rapozo [Head of Infrastructure at Refactor That](https://refactor-that.webnode.pt/)
* Henrique Feitosa [Web development consultant](https://github.com/FakeCast)
* Leonardo Fernandes [Student Web Developer](https://github.com/LeonardoCostaFernandes)
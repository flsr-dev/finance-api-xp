# Finance API - Desafio Técnico XP Inc.

Aplicação desenvolvida com Node.js 16, Javascript, Express, Sequelize, Docker, Mocha, Chai, Sinon, ESlint, Dotenv, PostgreSQL, SonarCloud, GitHub Actions (CI/CD).

<br>

## Deploy

<br>

<details><summary>Acesso à aplicação</summary>

<br>

Aplicação hospedada na rota base https://finance-api-xp.herokuapp.com/

Para ter acesso à documentação, contendo todos os endpoint e métodos disponíveis, acesse: https://finance-api-xp.herokuapp.com/api-docs/

OBS: A primeira requisição à aplicação pode demorar um pouco mais, pois o heroku pode colocá-la em estado ocioso.
OBS 2: A implementação de autenticação pelo swagger ainda não foi implementada, portanto para teste é necessário utilizar Postman ou Insomnia.

<br>

## Autenticação

A rota de login ainda não está implementada, portanto foram autenticados dois usuários para a realização dos testes:

OBS: Insira o token no header authorization das requisições

OBS 2: ⚠️ Os tokens gerados no ambiente docker não conseguem autenticar usuários na aplicação do deploy e vice-versa ⚠️

### Usuário 1

```javascript
codCliente = 1

token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RDbGllbnRlIjoxLCJlbWFpbCI6ImZsc3IuZGV2QGVtYWlsLmNvbSIsIm5hbWUiOiJGZXJuYW5kbyIsImlhdCI6MTY1ODYyMjIxN30.reDSLh53f231hWfkBpRDgNNPn0Gr4PDBea8tGarRsPw
```

<br>

### Usuário 2

```javascript
codCliente = 2

token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RDbGllbnRlIjoyLCJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIiwibmFtZSI6IkpvaG4iLCJpYXQiOjE2NTg2MjIzNjd9.7PsiLxc7Ny_51Zs-qP9a0O_MdV575VZGAD8T62FemY8
```
<br>

</details>

<br>

## Instruções de setup local

<br>

<details> <summary>Executando localmente com Docker</summary>

<br>

### Requitos:
- [Node.js 16 LTS](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/#install-compose)
- [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/)

### Realizando migrations e seeds no banco de dados do container:

Clone esse repositório:

    git clone git@github.com:flsr-dev/finance-api-xp.git    

Execute o comando abaixo na raiz do projeto para acessar o terminal do container:

    docker-compose run finance-api sh

Após a finalização do build e abertura do terminal do container:
  
  Executar as migrations:

    npm run migrate

  Executar o seed das tabelas:

    npm run seed

  Após a finalização, saia do terminal do container:

    exit
    

### Rodando a aplicação:

    docker-compose up 

Ou:

    docker-compose up -d

A partir disso a aplicação já estará disponível localmente na porta 3000.

Acesse http://localhost:3000/api-docs/ para ter acesso à documentação dos outros endpoints e métodos disponíveis.

OBS: A implementação de autenticação pelo swagger ainda não foi implementada, portanto para teste é necessário utilizar Postman ou Insomnia.

## Autenticação

A rota de login ainda não está implementada, portanto foram autenticados dois usuários para a realização dos testes:

OBS: Insira o token no header authorization das requisições

OBS 2: ⚠️ Os tokens gerados no ambiente docker não conseguem autenticar usuários na aplicação do deploy e vice-versa ⚠️

### Usuário 1

```javascript
codCliente = 1

token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RDbGllbnRlIjoxLCJlbWFpbCI6ImZsc3IuZGV2QGVtYWlsLmNvbSIsIm5hbWUiOiJGZXJuYW5kbyIsImlhdCI6MTY1ODYyMjg4Mn0.gMcACHOTQtgjznTCBcFSSWNeSO1Mmi7m6Xbnw2tGd3M
```


<br>

### Usuário 2

```javascript
codCliente = 2

token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RDbGllbnRlIjoyLCJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIiwibmFtZSI6IkpvaG4iLCJpYXQiOjE2NTg2MjI3ODh9.Xm_nbZZ_C9BaTebutgu9MGzz5FCurpXkaLdrq5SE8UM
```


</details>

<br>

## Abordagem de desenvolvimento do case

<br>

O case foi desenvolvido com o objetivo de entregar uma API RESTful, baseando-se em regras de negócio do mercado financeiro e da XP Inc e de acordo com as definições dos contratos de serviços

<br>

<details><summary>Planejamento</summary> 

<br>

O desenvolvimento da aplicação foi dividido nas seguintes etapas:

- Estudo do case e de regras de negócio;
- Elaboração do diagrama de entidades e relacionamentos do banco de dados;
- Setup do ambiente de testes e CI/CD;
- Ciclo de desenvolvimento, elaboração de testes unitários e refatoração;
- Documentação.

<br>

</details>

<details><summary>Arquitetura</summary> 

<br>

A arquitetura da aplicação foi baseada no modelo MSC para organizar o código pensando em manutenção e escalabilidade.

Camadas:

 - Controller ⇒ tratamento de requisições à API e respostas;
 - Services ⇒ responsável pela regra de negócio;
 - Models ⇒ integração com o banco gerenciada pelo Sequelize;

 Middlewares:

 
 - Autenticação ⇒ por meio de verificação do token JWT;
 - Autorização ⇒ garante que a pessoa cliente tem permissões de transação;
 - Validação ⇒ assegura conformidade das requisições com o contrato de serviços;
 - Erros ⇒ realiza captura e tratamento de erros. 

<br>

</details>

<details><summary>Continuous integration e continuous deploy</summary> 

<br>

Ao início do desenvolvimento, foi criada um esteira para realizar o deploy contínuo da aplicação ao passar nos testes de ESlint e unitários.

O pipeline tem o objetivo de garantir:

- Integração de novas implementações de código;
- Padronização de código realizada pelo ESlint no padrão Airbnb;
- Manter a integridade da aplicação por meio dos testes unitários;
- Disponibilizar de forma ágil as novas implementações através de deploy automatizado via [Heroku](https://www.heroku.com/).


<img src='https://i.imgur.com/yc5WIDb.png' alt='Imagem contendo pipeline de deploy utilizado na aplicação'/>

<br>

</details>

<details><summary>Análise de qualidade de código</summary> 

<br>

A qualidade do código é monitorada de forma automatizada pelo [Sonarcloud](https://sonarcloud.io/). O serviço de qualidade de código analisa cada Pull Request e também a aplicação de forma geral, apontando possíveis problemas de:

- Manutenibilidade; 
- Confiabilidade;
- Segurança

<img src='https://i.imgur.com/UbmYnBV.png' alt='Relatório de qualidade de código geral da aplicação' />

<br>

</details>


<details><summary>Modelagem do banco de dados</summary> 

<br>

O banco de dados foi modelado, tendo como foco garantir o respeito às formas normais e gerar históricos das transações e operações realizadas pelos clientes.

Com o intuito de simplificar as funções da camada de model, auxiliar na manutenção e diminuir a suscetibilidade a erros, a integração do banco foi realizado pela ORM [Sequelize](https://sequelize.org/)

<img src='https://i.imgur.com/JJ5iXm0.png' alt='Diagrama ER da aplicação' />

<br>

</details>

<details><summary>Testes</summary> 

<br>

Foram desenvolvidos testes unitários tendo como base a stack Mocha, Chai, Sinon e com auxílio de outras bibliotecas de mock para o Sequelize.

Os testes foram essenciais para garantir a integridade e escalabilidade da aplicação durante o desenvolvimento e para futuras implementações.

<br>

</details>

<br>

Desenvolvido por Fernando Lucas de Souza Ribeiro.

Contato: flsr.dev@gmail.com

<a href="https://www.linkedin.com/in/fernandolsr0/" target="_blank">
  <img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin"/>
</a>



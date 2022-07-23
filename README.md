# Finance API - Desafio Técnico XP Inc.

Aplicação desenvolvida com Node.js 16, Javascript, Express, Sequelize, Docker, Mocha, Chai, Sinon, ESlint, Dotenv, Postgres, SonarCloud, GitHub Actions (CI/CD).

# Instruções de setup

<details> <summary>Executando localmente com Docker</summary>

#### Requitos
- [Node.js 16 LTS](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/#install-compose)

#### Realizando migrations e seeds no banco de dados do container
Execute o comando abaixo na raiz do projeto para acessar o terminal do container:

    docker-compose run finance-api sh

Após a finalização do build e abertura do terminal do container:
  
  Executar as migrations:

    npm run migrate

  Executar o seed das tabelas:

    npm run seed

  Após a finalização, saia do terminal do container:

    exit
    



#### Rodando a aplicação

    docker-compose up 

Ou:

    docker-compose up -d

A partir disso a aplicação já estará disponível localmente na porta 3000.

Acesse http://localhost:3000/api-docs/ para ter acesso à documentação dos endpoints e métodos disponíveis.


</details>
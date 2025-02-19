<h1 align="center">
    Send4 Challenge
</h1>

<h4 align="center">
  Product and order management with microservices
</h4>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#black_square_button-architecture">Architecture</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Technologies

This project was developed for a test with the following technologies:

<h4>
  Server
</h4>

- [TypeScript](https://www.typescriptlang.org/)
- [Mongodb](https://www.mongodb.com/)
- [Lerna](https://lerna.js.org/)
- [Express](https://expressjs.com/pt-br/)
- [Docker-compose](https://docs.docker.com/compose/)
- [Docker](https://www.docker.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemailer](https://nodemailer.com/about/)
- [bull](https://optimalbits.github.io/bull/)
- [bull-board](https://github.com/vcapretz/bull-board)
- [cors](https://expressjs.com/pt-br/)
- [dotenv](https://expressjs.com/pt-br/)
- [cors](https://github.com/expressjs/cors)
- [express-brute](https://github.com/AdamPflug/express-brute)
- [express-brute-redis](https://github.com/AdamPflug/express-brute-redis)
- [express-http-proxy](https://github.com/villadora/express-http-proxy)
- [express-rate-limit](https://github.com/nfriedly/express-rate-limit)
- [helmet](https://helmetjs.github.io/)
- [jsonwebtoken](https://jwt.io/)
- [redis](https://redis.io/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/)
- [axios](https://github.com/axios/axios)

* [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

<h4>
  Client - This project was inspired by the rocketshoes project developed in the Rocketseat Bootcamp
</h4>

- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [React Router v4](https://github.com/ReactTraining/react-router)
- [Axios](https://github.com/axios/axios)
- [History](https://www.npmjs.com/package/history)
- [Immer](https://github.com/immerjs/immer)
- [Polished](https://polished.js.org/)
- [React-Toastify](https://fkhadra.github.io/react-toastify/)
- [styled-components](https://www.styled-components.com/)
- [React-Icons](https://react-icons.netlify.com/)
- [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)
- [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner)
- [json-server](https://github.com/typicode/json-server)
- [Reactotron](https://infinite.red/reactotron)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Send4%20api&uri=https%3A%2F%2Fgithub.com%2Fcharlesmarafao%2Fsend4-challenge%2Fblob%2Fmaster%2FInsomnia_2020-05-13.json%3Fraw%3Dtrue)

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16](https://nodejs.org/en/) or higher, [Yarn v1.13](https://yarnpkg.com/), [Lerna v3.20.2](https://lerna.js.org/) use (npm install --global lerna) + [Docker and Docker Compose](https://docs.docker.com/compose/install/) or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/charlesmarafao/send4-challenge.git

# Go into the repository
$ cd send4-challenge

# Create shared network
$ docker network create -d bridge send4-network

# Add SHOPIFY_BASE_URL sent by email to the product service env

# Install dependencies and run the app - alias to docker-compose
# There will be 11 containers, this can take a while
# You can see the status of the email queue through this link: http://localhost:3002/queues

$ lerna run dcc-up
```

## :black_square_button: Architecture

![Image of Architecture](https://github.com/charlesmarafao/send4-challenge/blob/master/architecture.png?raw=true)

<h4>
  Opinião "The twerlve-Factor App"
</h4>
 "The twerlve-Factor App" é uma metodologia ou conjunto de boas práticas que originalmente foi feito para criação de "software-as-a-service", porém, se aplica também ao desenvolvimento de softwares em geral. Ao longo do tempo foi percebido a importância do ativo "código" para uma empresa de tecnologia, e o seu impacto direto no sucesso do negócio. Posto isso a execução das práticas declaradas neste manifesto ajudam os times a entregarem softwares resilientes e manuteníveis, com menos empecilhos à evolução.

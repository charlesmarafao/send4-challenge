<h1 align="center">
    Send4 Challenge
</h1>

<h4 align="center">
  Product and order management with microservices
</h4>

<p align="center">
  <a href="#challenge-architecture">Architecture</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#challenge-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
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
  Client
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

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher, [Yarn v1.13][yarn], [Lerna v3.20.2][lerna] use (npm install --global lerna) + [Docker and Docker Compose](https://docs.docker.com/compose/install/) or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/charlesmarafao/send4-challenge.git

# Go into the repository
$ cd send4-challenge

# Create shared network
$ docker network create -d bridge send4-network

# Add SHOPIFY_BASE_URL sent by email to the product service env

# Install dependencies and run the app
$ lerna run dcc-up
```

## :black_square_button: Architecture

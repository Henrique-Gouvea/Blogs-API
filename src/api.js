const express = require('express');
const {
  loginRoute,
  userRoute,
  categoriesRoute,
  postRoute,
} = require('./routes');
const errorMiddleware = require('./middleware/errorMiddleware');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/user', userRoute);

app.use('/categories', categoriesRoute);

app.use('/post', postRoute);

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

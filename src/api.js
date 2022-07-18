const express = require('express');
const { loginRoute, userRoute } = require('./routes');
const errorHandler = require('./middleware/errorMiddleware');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/user', userRoute);

app.use(errorHandler);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

const express = require('express');

const app = express();

// app.use(express.json());

const productRouter = require('./routes/products.routes');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use('/products', productRouter);

module.exports = app;

const express = require('express');

const app = express();

app.use(express.json());

const { productsRoutes, salesRoutes } = require('./routes/index');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use('/products', productsRoutes);
app.use('/products/:id', productsRoutes);
app.use('/sales', salesRoutes);
app.use('/sales/:id', productsRoutes);

module.exports = app;

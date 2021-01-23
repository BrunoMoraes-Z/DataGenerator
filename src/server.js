const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(80, () => {
  console.log('Sistema online...')
  console.log('Escutando localhost:80')
});
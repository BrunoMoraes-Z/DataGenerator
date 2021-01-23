const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 1024;

app.listen(port, () => {
  console.log(`Server running on ${port}, http://localhost:${port}`)
});
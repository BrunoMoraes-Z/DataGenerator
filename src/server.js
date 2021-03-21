const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

const port = process.env.PORT || 1024;

app.listen(port, () => {
  console.log(`Server running on ${port}, http://localhost:${port}`)
});
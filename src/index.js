const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/test', (req, res) => {
  res.send({ 
    message: 'Endpoint modificado na branch feature/alteracao-teste',
    status: 'success',
    code: 200
  });
});

app.get('/api/test', (req, res) => {
  res.send({ message: 'Endpoint de teste na branch master com merge'});
});

app.get('/api/test-2', (req, res) => {
  res.send({ message: 'Branch master endpoint teste 2'});
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});

module.exports = app;

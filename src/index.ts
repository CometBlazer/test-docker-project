const app = require('express')();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

const port = process.env.PORT || 8080;

const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (_, res) => {
  res.status(200).send('ok');
});

app.listen(port, ()=> console.log('listening on port', port));

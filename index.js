
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/app');


const server = express();
const port =  3000;



server.use(bodyParser.json());






server.use('/', router)



server.listen(port, (err) => {
    if (err) {
      console.error('Failed to start server:', err);
      return;
    }
    console.log(`Server is listening on http://localhost:${port}`);
  });
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const port = parseInt(process.env.PORT, 10) || 3001;
const axios = require('axios');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const { OAUTH_URL, OAUTH_OPEN_SCOPE } = require('../utility/api');
app.prepare().then( () => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  let accessToken, tokenType;
  server.use('/dashboard', (req, res, next) => {
    axios.post(OAUTH_URL,OAUTH_OPEN_SCOPE)
      .then(response => {
        accessToken = response.data.access_token;
        tokenType = response.data.token_type;
        console.log(accessToken);
      }).catch(err => console.log(err));
    next();
  })
  server.get('/dashboard', (req, res) => {
    console.log(`real${accessToken}`);
    res.cookie('token', `${accessToken}`);
    return app.render(req, res, '/dashboard' , req.query);
  })
  server.get('*', (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});


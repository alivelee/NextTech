const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = parseInt(process.env.PORT, 10) || 3001;
const axios = require('axios');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { getToken } = require('./middlewares');
app.prepare().then( () => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(cookieParser());
  server.get('/', [getToken], (req, res) => {
    return res.redirect('/collections');
  });
  server.get('/collections', [getToken], (req, res) => app.render(req, res, '/collections', req.query));
  server.get('/posts', [getToken], (req, res) => app.render(req, res, '/posts', req.query));
  server.get('/topics', [getToken], (req, res) => app.render(req, res, '/topics', req.query));
  server.get('/comments', [getToken], (req, res) => app.render(req, res, '/comments', req.query));
  
  server.get('*', (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});


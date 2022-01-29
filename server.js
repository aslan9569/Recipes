// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  static: './build'
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

const users = router.db.get('users');

server.post('/authorization', (req, res) => {
  const { login, password } = req.body;
  users.toJSON().find((item) => {
    if (login === item.login && password === item.password) {
      res.json(item);
    } else {
      return false;
    }
  });
});

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3001, () => {
  console.log('JSON Server is running');
});

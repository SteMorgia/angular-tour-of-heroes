const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mock/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/mock', router);

const port = 3000;
server.listen(port, () => {
  console.log(`Mock server is running on port ${port}`);
});

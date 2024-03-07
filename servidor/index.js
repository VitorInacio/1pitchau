const path = require('path')

const jsonserver = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router(
  path.join(__dirname, 'db.json')
)

const middlewares = jsonServer.default()

server.use(middlewares)
server.use(router)

server.listen(3001, () => {
  console.log('JSON Server Iniciou com sucesso')
})

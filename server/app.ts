import server from './server'

const port = 4000
server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
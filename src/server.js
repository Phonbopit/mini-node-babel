import Hapi from 'hapi'

const server = Hapi.Server({ port: 9001 })

const init = async () => {
  server.route({
  	method: 'GET',
  	path: '/',
  	handler: (req, h) => ({ message: 'Hello Hapi.js' })
  })

  await server.start()
  console.log('Server is running')
}

init()
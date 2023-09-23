import { FastifyInstance } from 'fastify'
import { register } from './controllers/register.controller'
import { profile } from './controllers/profile.controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', register)

  // Authenticated rotes
  app.get('/me', profile)
}

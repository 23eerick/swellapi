import { Router } from 'express'
import { authenticateUser, createUser, getUser } from './controllers/UserController.js'

const routes = Router()

routes.get('/register', getUser)
routes.post('/register', createUser)
routes.post('/authenticate', authenticateUser)

export default routes
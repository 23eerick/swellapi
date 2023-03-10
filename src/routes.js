import { Router } from 'express'
import { loginUser, createUser, getUser } from './controllers/UserController.js'

const routes = Router()

routes.get('/register', getUser)
routes.post('/register', createUser)
routes.post('/login', loginUser)

export default routes
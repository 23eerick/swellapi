import { Router } from 'express'
import { loginUser, createUser, getUser } from './controllers/UserController.js'
import { createProducts, deleteProducts, updateProducts, getProducts } from './controllers/productController.js'

const routes = Router()

routes.get('/register', getUser)
routes.post('/register', createUser)
routes.post('/login', loginUser)

routes.get('/products', getProducts)
routes.post('/products', createProducts)
routes.put('/products/:id', updateProducts)
routes.delete('/products/:id', deleteProducts)

export default routes
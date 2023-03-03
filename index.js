import dot from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

import routes from './src/routes.js'

const app = express()
app.use(express.json())
app.use(routes)

dot.config().parsed

const Port = process.env.PORT
const uri = process.env.DATABASE

const initdatabase = async () => {
  await mongoose.connect(uri)
    .then(() => {
      console.log('database is connected')
    })
    .catch((error) => {
      console.log(`database is not connected ${error}`)
    })
}

app.listen(Port, () => {
  console.log(`API Rest for swell front started at ${Port} 🚀`)
})

const initApp = async () => {
  await initdatabase()
}

initApp()
import dot from 'dotenv'
import express from 'express'

const app = express()
app.use(express.json())

dot.config().parsed

const Port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Aplicação iniciada')
})

app.listen(Port, () => {
  console.log(`API Rest for swell front started at ${Port} 🚀`)
})
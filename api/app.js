import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando'})
})

const PORT =  3000

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`)
})
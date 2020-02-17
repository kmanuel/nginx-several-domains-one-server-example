const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Cats & Cookies'))

app.listen(port, '0.0.0.0', () =>
  console.log(`Cats & Cookies listening on port ${port}!`)
)

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Dogs & Cookies'))

app.listen(port, '0.0.0.0', () =>
  console.log(`Dogs & Cookies listening on port ${port}!`)
)

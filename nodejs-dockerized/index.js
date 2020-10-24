const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send([
  {
    name: 'Dylan',
    email: 'dylan@example.com'
  }
]))
app.listen(port, () => console.log(`Magic Happens on port ${port}`))
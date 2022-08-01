const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

// routes
app.get('/', (req, res) => {
  res.send('root route hit')
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log('server is running at PORT', PORT))

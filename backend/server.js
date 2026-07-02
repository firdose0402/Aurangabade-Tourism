const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// Simple health route
app.get('/', (req, res) => res.json({ ok: true, message: 'Backend running' }))

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' })
})

// TODO: connect to MongoDB, mount your routes, etc.
// e.g. const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGO_URI, { ... })

const PORT = process.env.PORT || 5000
app.listen(PORT, '0.0.0.0', () => console.log(`Server listening on ${PORT}`))

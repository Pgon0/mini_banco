const express = require('express')
const app = express()
const accountRoutes = require('./routes/accountRoutes')

app.use(express.json())
app.use(accountRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err)
    } else {
        console.log(`Server is running on http://localhost:${PORT}`)
    }
})
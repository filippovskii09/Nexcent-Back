const express = require('express')
const cors = require('cors')
 
const manage = require('./manage')
const caring = require('./caring')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	res.send('Welcome to my mini-back')
})

app.get('/manage', (req, res) => {
	res.send(manage)
})

app.get('/caring', (req, res) => {
	res.send(caring)
})

const port = 4200

app.listen(port, () => {
	console.log(`Hosting in ${port}`);
})

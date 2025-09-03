const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')
const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://bloguser:Abhi999@cluster0.wtrrpiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{ serverApi: { version: '1', strict: true, deprecationErrors: true }})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.create({ username, password });
  res.json(userDoc);  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}
)



// mongodb+srv://bloguser:Abhi@999@cluster0.wtrrpiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
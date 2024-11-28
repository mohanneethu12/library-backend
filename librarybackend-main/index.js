const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bookRoutes = require('./routes/bookRoutes')
const authorRoute = require('./routes/authorRoutes')
const userRoute = require('./routes/userRoutes')
require('dotenv').config();

const app = express()
const port = process.env.MONGO_PORT

app.use(cors({
  origin: process.env.REACT_URL // Allow only your frontend
}));

main().then(() => console.log('connected'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
}

app.use(express.json());

app.use('/books', bookRoutes);
app.use('/author', authorRoute);
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
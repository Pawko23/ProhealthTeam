const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser') // mainly used for form post
const router = require('./routes/router')
const mongoose = require('mongoose')

require('dotenv/config')

const app = express()

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use('/', router)



const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.DB_URI, dbOptions).then(() => 
    console.log('Connected to DataBase')
).catch(err => 
    console.log(err)
)

const port = process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser') // mainly used for form post
const router = require('./routes/router')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/', router)






const port = 5000
const server = app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})




// app.get('/api', (req,res) => {
//     res.json({ "users": ["userOne", "userTwo", "userThree"] })
// })

// app.listen(5000, ()=>{console.log("Server started on port 5000");})
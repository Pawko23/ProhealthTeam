const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String},
    email: {type: String},
    website: {type: String},
    entryDate: {type: Date, default:Date.now}
})

const Users = mongoose.model('Users', userSchema, 'users')
const mySchemas = {'Users':Users}


module.exports = mySchemas
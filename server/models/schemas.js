const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String},
    email: {type: String},
    website: {type: String},
    entryDate: {type: Date, default:Date.now}
})

const Users = mongoose.model('Users', userSchema, 'users')


const recipeSchema = new Schema({
    type: { type: String },
    name: {type: String},
    image: {type: String},
    difficulty: {type: String},
    ingredients: [ {type: String} ],
    kcal: { type: Number },
    protein: { type: Number },
    fats: { type: Number },
    carbs: { type: Number }
})

const Recipes = mongoose.model('Recipes', recipeSchema, 'recipes')


const mySchemas = {'Users':Users, "Recipes": Recipes}


module.exports = mySchemas
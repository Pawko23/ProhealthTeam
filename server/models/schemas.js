const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    weight: [ { type: Number }],
    goal: { type: Number }
})

const User = mongoose.model('User', userSchema, 'users')


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


const mySchemas = {'User': User, "Recipes": Recipes}


module.exports = mySchemas
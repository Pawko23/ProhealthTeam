const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    weight: [ { type: Number }],
    goal: { type: Number },
    date: [ { type: String }]
})

const User = mongoose.model('User', userSchema, 'users')

const jumpProgressSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    jumpGoal: {type: Number},
    jumpHeight: [ {type: Number} ],
    jumpDates: [ {type: String }]
})

const JumpProgres = mongoose.model('JumpProgress', jumpProgressSchema, 'jumpprogress')


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


const mySchemas = {'User': User, 'JumpProgress': JumpProgres, "Recipes": Recipes}


module.exports = mySchemas
const express = require('express')
const router = express.Router()
const { Recipes } = require('../models/schemas')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/schemas')

router.get('/recipes/:id', async (req, res) => {
  try {
    const recipeDetails = await Recipes.findById(req.params.id)
    if(!recipeDetails) {
      return res.status(404).json({ message: 'Recipe not found' })
    }
    res.json(recipeDetails)
  } catch (error) {
    console.log(error)
    res.status(500).send('Sth went wrong with picked recipe')
  }
})

router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipes.find({})
    res.json(recipes)
  } catch (error){
    console.log(error);
    res.status(500).send('Sth went wrong')
  }
})


// CREATE USER -- POST
// REGISTER

router.post('/register', async (req, res) => {
  try {
    const { email, username, password } = req.body
    if (!email || !username || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User( { email, username, password: hashedPassword} )
    await newUser.save()
    res.status(201).json( { message: "User created successfully" })
  } catch (error) {
    console.log(error)
    res.status(500).json( { error: "Error signing up" })
  }
})

router.get('/register', async (req, res) => {
  try {
    const users = await User.find()
    res.status(201).json(users)
  } catch (error) {
    res.status(500).json( { error: "Unable to get users"})
  }
})

//  LOGIN 

// router.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body
//   } catch(error) {

//   }
// })







module.exports = router
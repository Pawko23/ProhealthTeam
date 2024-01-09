const express = require('express')
const router = express.Router()
const { Recipes, User } = require('../models/schemas')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv/config')

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
    const newUser = new User( { email, username, password: hashedPassword, weight: []} )
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

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne( { username } )
    if(!user) {
      return res.status(401).json( { error: "Invalid credentials" })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid) {
      return res.status(401).json({ error: 'Ivalid credentials' })
    }
    const token = jwt.sign({ userId: user._id }, process.env.ACCESS_SECRET_KEY, { expiresIn: '1hr' })
    console.log("Token: ", token)
    res.json({ message: 'Login successful', token: token})
  } catch(error) {
    res.status(500).json({ error: 'Error logging in' })
  }
})



router.post('/userprogress', async (req,res) => {
  const { userId, weight, goal, currentDate } = req.body

  try {
    const user = await User.findById(userId)

    if(!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    user.weight.push(weight)
    user.goal = goal
    user.date.push(currentDate)
    await user.save()

    res.status(200).json({ message: 'Weight saved successfuly' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error ' })
  }
})

router.get('/userprogress', async (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')

  if(!token) {
    return res.status(401).json( { error: 'Unauthorized' })
  }
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_SECRET_KEY)
    const userId = decodedToken.userId
    const user = await User.findById(userId)
    if(!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json({ weights: user.weight, dates: user.date, goal: user.goal })
  } catch(error) {
    console.log(error)
  }
})



//  WEIGHT AND DATE DELETE

router.delete('/userprogress/weight/:userId/:index', async (req, res) => {
  try {
    console.log(req.params)
    const userId = req.params.userId
    const index = parseInt(req.params.index)

    const user = await User.findById(userId)

    user.weight.splice(index, 1)
    user.date.splice(index, 1)

    await user.save()
    res.status(200).json({ message: 'data deleted successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json( { error: 'Internal server error' } )
  }
})



module.exports = router
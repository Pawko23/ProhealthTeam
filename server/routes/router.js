const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { Recipes, User, JumpProgress, StaminaProgress, EvalProgress, UserCalcs } = require('../models/schemas')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv/config')

router.get('/recipes/:id', async (req, res) => {
  try {
    console.log(req.params)
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: 'Invalid recipe ID' });
    }
    const recipeDetails = await Recipes.findById(req.params.id)
    if(!recipeDetails) {
      return res.status(404).json({ message: 'Recipe not found' })
    }
    // console.log(recipeDetails.image)
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
    const newUser = new User( { email, username, password: hashedPassword, weight: [], date: []} )
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
    const token = jwt.sign({ userId: user._id }, process.env.ACCESS_SECRET_KEY, { expiresIn: '60s' })
    console.log("Token: ", token)
    res.json({ message: 'Login successful', token: token})
  } catch(error) {
    res.status(500).json({ error: 'Error logging in' })
  }
})

router.post('/userprogress', async (req,res) => {

  if(req.body.hasOwnProperty('tmr')) {
    const { userId, tmr } = req.body
    try {
      let userCalcs = await UserCalcs.findOne( {userId});
      
      if(!userCalcs) {
        userCalcs = new UserCalcs({ userId: userId, kcalIntake: tmr })
      } else {
        userCalcs.kcalIntake = tmr
      }
      
      await userCalcs.save()
  
      res.status(201).json({ message: 'Kcalories intake saved' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  } else {
    const { userId, weight, goal, currentDate } = req.body
    try {
      const user = await User.findById(userId)
  
      if(!user) {
        return res.status(404).json({ error: 'User not found' })
      }
  
      user.weight.push(weight)
      user.date.push(currentDate)
  
      if(goal !== '') {
        user.goal = goal
      } 
  
      await user.save()
  
      res.status(200).json({ message: 'Weight saved successfuly' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error ' })
    }
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

    const { indices } = req.body 


    const user = await User.findById(userId)

    indices.sort((a, b) => b - a)
    indices.forEach((index) => {
      user.weight.splice(index, 1)
      user.date.splice(index, 1)
    })

    await user.save()
    res.status(200).json({ message: 'data deleted successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json( { error: 'Internal server error' } )
  }
})




// JUMP PROGRESS

router.post('/jump-progress', async(req, res) => {
  console.log(req.body)

  const userId = req.body.userId

  try {
    let jumpProgress = await JumpProgress.findOne( {userId});
    
    if(!jumpProgress) {
      jumpProgress = new JumpProgress({ userId: userId})
    }

    if(req.body.jumpGoal !== '') {
      jumpProgress.jumpGoal = req.body.jumpGoal
    } 

    
    jumpProgress.jumpHeight.push(req.body.jumpHeight)
    jumpProgress.jumpDates.push(req.body.currentDate)

    await jumpProgress.save()

    res.status(201).json({ message: 'Jump progress saved successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/jump-progress', async (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')
  if(!token) {
    return res.status(401).json( { error: 'Unauthorized' })
  }
  try {

    const decodedToken = jwt.verify(token, process.env.ACCESS_SECRET_KEY)
    const userId = decodedToken.userId
    
    
    const userJumps = await JumpProgress.findOne({userId})
    if(!userJumps) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json({ jumps: userJumps.jumpHeight, dates: userJumps.jumpDates, goal: userJumps.jumpGoal })
  } catch(error) {
    console.log(error)
  }
})

router.delete('/jump-progress/:userId/:index', async (req, res) => {
  try {
    console.log(req.params)
    const userId = req.params.userId
    const index = parseInt(req.params.index)
    const { indices } = req.body 


    let jumpProgress = await JumpProgress.findOne( {userId});

    indices.sort((a, b) => b - a)
    indices.forEach((index) => {
      jumpProgress.jumpHeight.splice(index, 1)
      jumpProgress.jumpDates.splice(index, 1)
    })

    await jumpProgress.save()
    res.status(200).json({ message: 'User jump progress deleted successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json( { error: 'Internal server error' } )
  }
})

//  STAMINA

router.post('/stamina-progress', async(req, res) => {
  console.log(req.body)

  const userId = req.body.userId

  try {
    let staminaProgress = await StaminaProgress.findOne( {userId});
    
    if(!staminaProgress) {
      staminaProgress = new StaminaProgress({ userId: userId})
    }

    if(req.body.staminaGoal !== '') {
      staminaProgress.staminaGoal = req.body.staminaGoal
    } 

    
    staminaProgress.staminaTime.push(req.body.staminaTime)
    staminaProgress.staminaDates.push(req.body.currentDate)

    await staminaProgress.save()

    res.status(201).json({ message: 'Stamina progress saved successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/stamina-progress', async (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')
  if(!token) {
    return res.status(401).json( { error: 'Unauthorized' })
  }
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_SECRET_KEY)
    const userId = decodedToken.userId
    const userStamina = await StaminaProgress.findOne({userId})
    if(!userStamina) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json({ stamina: userStamina.staminaTime, dates: userStamina.staminaDates, goal: userStamina.staminaGoal })
  } catch(error) {
    console.log(error)
  }
})

router.delete('/stamina-progress/:userId/:index', async (req, res) => {
  try {
    console.log(req.params)
    const userId = req.params.userId
    const index = parseInt(req.params.index)
    const { indices } = req.body 


    let staminaProgress = await StaminaProgress.findOne( {userId});

    indices.sort((a, b) => b - a)
    indices.forEach((index) => {
      staminaProgress.staminaTime.splice(index, 1)
      staminaProgress.staminaDates.splice(index, 1)
    })

    await staminaProgress.save()
    res.status(200).json({ message: 'User stamina progress deleted successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json( { error: 'Internal server error' } )
  }
})

// EVAL

router.post('/eval-progress', async(req, res) => {
  console.log(req.body)

  const userId = req.body.userId

  try {
    let evalProgress = await EvalProgress.findOne( {userId});
    
    if(!evalProgress) {
      evalProgress = new EvalProgress({ userId: userId})
    }

    if(req.body.evalGoal !== '') {
      evalProgress.evalGoal = req.body.evalGoal
    } 

    
    evalProgress.eval.push(req.body.evalScore)
    evalProgress.evalDates.push(req.body.currentDate)

    await evalProgress.save()

    res.status(201).json({ message: 'Eval progress saved successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/eval-progress', async (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')
  if(!token) {
    return res.status(401).json( { error: 'Unauthorized' })
  }
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_SECRET_KEY)
    const userId = decodedToken.userId
    const userEval = await EvalProgress.findOne({userId})
    if(!userEval) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.status(200).json({ eval: userEval.eval, dates: userEval.evalDates, goal: userEval.evalGoal })
  } catch(error) {
    console.log(error)
  }
})

router.delete('/eval-progress/:userId/:index', async (req, res) => {
  try {
    console.log(req.params)
    const userId = req.params.userId
    const index = parseInt(req.params.index)
    const { indices } = req.body 


    let evalProgress = await EvalProgress.findOne( {userId});

    indices.sort((a, b) => b - a)
    indices.forEach((index) => {
      evalProgress.eval.splice(index, 1)
      evalProgress.evalDates.splice(index, 1)
    })

    await evalProgress.save()
    res.status(200).json({ message: 'User eval progress deleted successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json( { error: 'Internal server error' } )
  }
})



//  ACCOUNT ROUTES

router.get('/account', async (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')

  if(!token) {
    return res.status(401).json( { error: 'Unauthorized' })
  }
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_SECRET_KEY)
    const userId = decodedToken.userId
    const user = await User.findById(userId)
    const userIntake = await UserCalcs.findOne({userId})
    if(!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    let tmr = 0
    let bmiTemp = 0
    console.log(userIntake);
    if(userIntake && userIntake.kcalIntake != null) {
      tmr = userIntake.kcalIntake
    }
    if(userIntake && userIntake.bmi != null) {
      bmiTemp = userIntake.bmi
    }
    res.status(200).json({ username: user.username, email: user.email, bmi: bmiTemp, kcalIntake: tmr })
  } catch(error) {
    console.log(error)
  }
})

router.post('/bmicalculator', async (req,res) => {
  console.log(req.body)
  const { userId, bmi } = req.body
  try {
    let userCalcs = await UserCalcs.findOne({ userId: userId })
    if(!userCalcs) {
      userCalcs = new UserCalcs( { userId: userId, bmi: bmi })
    } else {
      userCalcs.bmi = bmi
    }
    await userCalcs.save()
    res.status(201).json( { message: 'Bmi saved successfully' } )
  } catch (error) {  
    console.log(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.delete('/account/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    const deletedUser = await User.findByIdAndDelete(userId)
    
    if(!deletedUser) {
      return res.status(404).json( { message: 'User not found' })
    }
  
    await JumpProgress.deleteMany( {userId} )
    await StaminaProgress.deleteMany( {userId} )
    await EvalProgress.deleteMany( {userId} )
    await UserCalcs.deleteMany( {userId} )
  
    res.status(201).json( { message: 'User and its related documents deleted successfully' } )
  } catch (error) {
    console.error('Error deleting user and documents', error)
    res.status(500).json({ message: 'Internal server error' })
  }

})



// const { Recipes, User, JumpProgress, StaminaProgress, EvalProgress, UserCalcs } = require('../models/schemas')

module.exports = router
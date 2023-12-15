const express = require('express')
const router = express.Router()
const { Recipes } = require('../models/schemas')
const { computeHeadingLevel } = require('@testing-library/react')

router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipes.find({})
    res.json(recipes)
  } catch (error){
    console.log(error);
    res.status(500).send('Sth went wrong')
  }
})

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


router.get('/users', (req, res) => {
    const userData = [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
      ]

      res.send(userData)
})

module.exports = router
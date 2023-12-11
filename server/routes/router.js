import { Recipes } from '../models/schemas'

const express = require('express')
const router = express.Router()

router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipes.find({})
    res.json(recipes)
  } catch (error){
    console.log(error);
    res.status(500).send('Sth went wrong')
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
const express = require('express')
const router = express.Router()
const { getCards, setCard, updateCard, deleteCard } = require('../controllers/cardControllers')

router.route('/').get(getCards).post(setCard)
router.route('/:id').delete(deleteCard).put(updateCard)

module.exports = router
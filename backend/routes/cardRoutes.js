const express = require('express')
const router = express.Router()
const { getCards, setCard, updateCard, deleteCard } = require('../controllers/cardControllers')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getCards).post(protect, setCard)
router.route('/:id').delete(protect, deleteCard).put(protect, updateCard)

module.exports = router
const asyncHandler = require('express-async-handler')

const Card = require('../models/cardModel')

// @desc get all cards associated with the user
// @route GET /api/cards
// @access Private
const getCards = asyncHandler(async (req, res) => {
    const cards = await Card.find()
    res.json(cards)
})

// @desc set card associated with the user
// @route POST /api/cards
// @access Private
const setCard = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Text field required')
    }

    const card = await Card.create({
        text: req.body.text,
    })
    res.json(card)
})

// @desc Update card associated with the user
// @route PUT /api/cards
// @access Private
const updateCard = asyncHandler(async (req, res) => {
    const card = await Card.findById(req.params.id)

    if (!card) {
        res.status(400)
        throw new Error('Card not found')
    }

    const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.json(updatedCard)
})

// @desc Delete card associated with the user
// @route DELETE /api/cards
// @access Private
const deleteCard = asyncHandler(async (req, res) => {
    const card = await Card.findById(req.params.id)

    if (!card) {
        res.status(400)
        throw new Error('Card not found')
    }

    await card.deleteOne()

    res.json({ id: req.params.id })
})

module.exports = {
    getCards, 
    setCard,
    updateCard,
    deleteCard
}
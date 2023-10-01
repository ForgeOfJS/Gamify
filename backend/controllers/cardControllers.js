const asyncHandler = require('express-async-handler')

// @desc get all cards associated with the user
// @route GET /api/cards
// @access Private
const getCards = asyncHandler(async (req, res) => {
    res.json({message: "All our cards!"})
})

// @desc set card associated with the user
// @route POST /api/cards
// @access Private
const setCard = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Text field required')
    }
    res.json({message: 'Set our cards!'})
})

// @desc Update card associated with the user
// @route PUT /api/cards
// @access Private
const updateCard = asyncHandler(async (req, res) => {
    res.json({message: `Update card ${req.params.id}!`})
})

// @desc Delete card associated with the user
// @route DELETE /api/cards
// @access Private
const deleteCard = asyncHandler(async (req, res) => {
    res.json({message: `Delete card ${req.params.id}!`})
})

module.exports = {
    getCards, 
    setCard,
    updateCard,
    deleteCard
}
const asyncHandler = require('express-async-handler')

const Card = require('../models/cardModel')
const User = require('../models/userModel')

// @desc get all cards associated with the user
// @route GET /api/cards
// @access Private
const getCards = asyncHandler(async (req, res) => {
    const cards = await Card.find({ user: req.user.id })
    res.json(cards)
})

// @desc set card associated with the user
// @route POST /api/cards
// @access Private
const setCard = asyncHandler(async (req, res) => {
    //if request does not contain required fields in body, then bad request.
    if (!req.body.text
        || !req.body.name
        || !req.body.attribute
        || !req.body.type
        || !req.body.level
        || !req.body.monsterType
        || !req.body.extraType
        || !req.body.isPend
        || !req.body.att
        || !req.body.def
        ) {
        res.status(400)
        throw new Error('One or more of the following fields are empty. (text, name, attribute, type, level, monsterType, extraType, isPend, att, def')
    }

    //json for a card from given fields
    const card = await Card.create({
        text: req.body.text,
        name: req.body.name,
        attribute: req.body.attribute,
        type: req.body.type,
        level: req.body.level,
        monsterType: req.body.monsterType,
        extraType: req.body.extraType,
        isPend: req.body.isPend,
        att: req.body.att,
        def: req.body.def,
        user: req.user.id,
    })
    //put in response this json object
    res.json(card)
})

// @desc Update card associated with the user
// @route PUT /api/cards
// @access Private
const updateCard = asyncHandler(async (req, res) => {
    //id is given in params section
    const card = await Card.findById(req.params.id)

    //no card id in cluster
    if (!card) {
        res.status(400)
        throw new Error('Card not found')
    }

    //find user from logged in user
    const user = await User.findById(req.user.id)

    //no user id in cluster
    if (!user)
    {
        res.status(401)
        throw new Error('User not found.')
    }

    //wrong user is requesting
    if (card.user.id.toString() !== user.id)
    {
        res.status(401)
        throw new Error('User does not match.')
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

    const user = await User.findById(req.user.id)

    if (!user)
    {
        res.status(401)
        throw new Error('User not found.')
    }

    if (global.user.toString() !== user.id)
    {
        res.status(401)
        throw new Error('User does not match.')
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
const mongoose = require('mongoose')

const cardSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        text: {
            type: String,
            required: [true, 'Please add a text value']
        },
        name: {
            type: String,
            required: [true, 'Please add a name value']
        },
        attribute: {
            type: String,
            required: [true, 'Please add an attribute']
        },
        level: {
            type: String,
            required: [true, 'Please add a level value']
        },
        monsterType: {
            type: String,
            required: [true, 'Please add a monsterType value']
        },
        extraType: {
            type: String,
            required: [true, 'Please add a extraType value']
        },
        isPend: {
            type: String,
            required: [true, 'Please verify if card is a pendulum card']
        },
        att: {
            type: String,
            required: [true, 'Please add an attack value']
        },
        def: {
            type: String,
            required: [true, 'Please add a defense value']
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Card', cardSchema)
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        //take  connection url from .env and connect to mongo cluster
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        //something went wrong, show it.
        console.log(error)
        process.exit(1)
    }
}

//export the function
module.exports = connectDB
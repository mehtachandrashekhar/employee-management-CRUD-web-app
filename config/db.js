const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"

const connectDb = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongo connected')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
}
module.exports = connectDb;
// const mongoose = require('mongoose')

// const url = 'mongodb://localhost:21017/docker-node-mongo';

// const connectDb = () => {
//     mongoose.connect(url, () => {
//         console.log('connect to MongoDB');
//     })
// }

// module.exports = connectDb;
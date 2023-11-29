const { default: mongoose } = require('mongoose');
const monsgoose = require('mongoose')

const url = 'mongodb://mongo:21017/docker-node-mongo';

const connectDb = () => {
    mongoose.connect(url,()=>{
        console.log('connect to MongoDB');
    });
};

module.exports = connectDb;

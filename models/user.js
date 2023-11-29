const monsgoose = require('mongoose');
const { Schema } = monsgoose;

const userSchema = new Schema(
    {
        name:{
            type: String,
            required:true,
        },
        password: {
            type:String,
            required:true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = monsgoose.model('User',userSchema);
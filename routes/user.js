const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/post',async(req,res)=>{
    try{
        const [name,password] = req.body;
        if(name === 'admin' && password === 'admin') {
            return res.status(200).json('Welcome to the admin page')
        }
    }
})
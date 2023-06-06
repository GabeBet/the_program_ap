const express = require('express');
const router = express.Router();
const SqFtDescription = require('../models/SqFtDescription');

//Get back all sqftDescription
router.get('/', async (req,res) => {
    try{
        const sqftDescription = await SqFtDescription.find();
        res.json(sqftDescription)
    }catch(err){
        res.json({message: err});
    }
});

//Submits sqftDescription
router.post('/', async (req,res) => {
    const sqftDescription = new SqFtDescription({
        description: req.body.description
    });

    try {
        const savedSqFtDescription = await sqftDescription.save();
        res.json(savedSqFtDescription)
    }catch(err){
        res.json({message: err});
    }
})

//Get back specific sqftDescription
router.get('/:sqftDId', async (req,res) => {
    try{
        const sqftDescription = await SqFtDescription.findById(req.params.sqftDId);
        res.json(sqftDescription);
    }catch(err){
        res.json({message: err});
    }
})

//Delete sqftDescription
router.delete('/:sqftDId', async (req,res) => {
    try{
        const removedSqFtDescription = await SqFtDescription.findByIdAndDelete({_id: req.params.sqftDId});
        res.json(removedSqFtDescription);
    }catch(err){
        res.json({message: err});
    }
})

//Update sqftDescription
router.put('/:sqftDId', async (req,res) => {
    try{
        const updatedSqFtDescription = await SqFtDescription.updateOne(
            {_id: req.params.sqftDId}, 
            { $set: { description: req.body.description 
            }}
        );
        res.json(updatedSqFtDescription);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;
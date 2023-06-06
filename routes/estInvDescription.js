const express = require('express');
const router = express.Router();
const EstInvDescription = require('../models/EstInvDescription');

//Get back all estInvDescription
router.get('/', async (req,res) => {
    try{
        const estInvDescription = await EstInvDescription.find();
        res.json(estInvDescription)
    }catch(err){
        res.json({message: err});
    }
});

//Submits estInvDescription
router.post('/', async (req,res) => {
    const estInvDescription = new EstInvDescription({
        description: req.body.description
    });

    try {
        const savedEstInvDescription = await estInvDescription.save();
        res.json(savedEstInvDescription)
    }catch(err){
        res.json({message: err});
    }
})

//Get back specific estInvDescription
router.get('/:estInvDId', async (req,res) => {
    try{
        const estInvDescription = await EstInvDescription.findById(req.params.estInvDId);
        res.json(estInvDescription);
    }catch(err){
        res.json({message: err});
    }
})

//Delete estInvDescription
router.delete('/:estInvDId', async (req,res) => {
    try{
        const removedEstInvDescription = await EstInvDescription.findByIdAndDelete({_id: req.params.estInvDId});
        res.json(removedEstInvDescription);
    }catch(err){
        res.json({message: err});
    }
})

//Update estInvDescription
router.put('/:estInvDId', async (req,res) => {
    try{
        const updatedEstInvDescription = await EstInvDescription.updateOne(
            {_id: req.params.estInvDId}, 
            { $set: { description: req.body.description 
            }}
        );
        res.json(updatedEstInvDescription);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;
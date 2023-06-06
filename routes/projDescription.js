const express = require('express');
const router = express.Router();
const ProjDescription = require('../models/ProjDescription');

//Get back all projDescription
router.get('/', async (req,res) => {
    try{
        const projDescription = await ProjDescription.find();
        res.json(projDescription)
    }catch(err){
        res.json({message: err});
    }
});

//Submits projDescription
router.post('/', async (req,res) => {
    const projDescription = new ProjDescription({
        description: req.body.description
    });

    try {
        const savedProjDescription = await projDescription.save();
        res.json(savedProjDescription)
    }catch(err){
        res.json({message: err});
    }
})

//Get back specific projDescription
router.get('/:projDId', async (req,res) => {
    try{
        const projDescription = await ProjDescription.findById(req.params.projDId);
        res.json(projDescription);
    }catch(err){
        res.json({message: err});
    }
})

//Delete projDescription
router.delete('/:projDId', async (req,res) => {
    try{
        const removedProjDescription = await ProjDescription.findByIdAndDelete({_id: req.params.projDId});
        res.json(removedProjDescription);
    }catch(err){
        res.json({message: err});
    }
})

//Update projDescription
router.put('/:projDId', async (req,res) => {
    try{
        const updatedProjDescription = await ProjDescription.updateOne(
            {_id: req.params.projDId}, 
            { $set: { description: req.body.description 
            }}
        );
        res.json(updatedProjDescription);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;
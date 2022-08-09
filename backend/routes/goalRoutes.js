const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).json({message:'getting'});
});

router.post('/', (req,res) => {
    res.status(200).json({message:'setting'});
});
router.put('/:id', (req,res) => {
    res.status(200).json({message:'updating '+req.params.id});
});

router.delete('/:id', (req,res) => {
    res.status(200).json({message:'deleting '+req.params.id});
});

module.exports = router;
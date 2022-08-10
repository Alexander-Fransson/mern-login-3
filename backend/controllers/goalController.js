const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message:'getting'});
});

const setGoals = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('please add a text field');
    }
});

const putGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message:'putting: '+req.params.id});
});

const deleteGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message:'deleting: '+req.params.id});
});

module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
};
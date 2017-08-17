//Declarations & Requires
const express = require('express');
const router = express.Router();
const Christmas = require('../models/christmas.js');

//Show all items
router.get('/', (req, res)=>{
    Christmas.find({}, (err, foundItems)=>{
        res.json(foundItems);
    });
});

//Post an item
router.post('/', (req, res)=>{
  console.log(req.body)
    Christmas.create(req.body, (err, createdItem)=>{
        res.json(createdItem);
    });
});

//Delete an item
router.delete('/:id', (req, res)=>{
    Christmas.findByIdAndRemove(req.params.id, (err, deletedItem)=>{
        res.json(deletedItem);
    });
});

//Update an item
router.put('/:id', (req, res)=>{
    Christmas.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo)=>{
        res.json(updatedItem);
    });
});

module.exports = router;

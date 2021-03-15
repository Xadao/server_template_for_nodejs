const express = require('express')
const router = express.Router()
const Model = require('../models/model')
const mongoose = require('mongoose')

const db ="mongodb://"+process.env.DB_CONNECTION

mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log('DB Connected!'))
.catch(err => {
  console.log(err.message);
});

router.get('/records',
    function (req, res) {
        Model.find(function (err, foundRecords) {

            if (!err)  res.send(foundRecords);
            else console.error(err);
        })
    }
)
router.post('/records',
    function (req, res) {
        
        const newModel = new Model({
            _id: req.body.id
            
        })
    
        newModel.save(function (err) {
            if (!err)  res.send("Succesfully added a new record");
            else res.send(err.message)
        });
    })

    router.get('/records/:id', function (req, res) {
        Model.findById({_id: req.params.id}, function (err, foundRecord) {
    
            if (err || !foundRecord) res.send("There is no record with this id")
            else res.send(foundRecord)
    
        })
    })
    router.delete('/records/:id', function (req, res) {
        Model.findOneAndDelete({_id : req.params.id}, function (err, record) {
    
            if (err || !record)  res.send("There is no record with this ID")
            else res.send("succesfully deleted")
      
        })
    })

    module.exports = router;
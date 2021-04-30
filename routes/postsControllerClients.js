const express = require('express')
const router = express.Router();
const { PostsModels } = require('../models/postsModels');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    PostsModels.find((err, docs) => {
        if(!err) res.send(docs)
    })
})


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('Id inconnu' + req.params.id)

    PostsModels.findById(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log('update erreur' + err)
        }
    )
})

router.post('/', (req, res) => {
    const newRecord = new PostsModels(
        {
            name: req.body.name,
            logo : req.body.logo,
            prestation : req.body.prestation,
            price : req.body.price,
            facture: req.body.facture,
            date : req.body.date,
            secteur : req.body.secteur,
            contact : req.body.contact,
            mail : req.body.mail,
            phone : req.body.phone,
            details : req.body.details,

        }
    );
    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('ERREUR ' + err);
    });
})

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('Id inconnu' + req.params.id)

    const updateRecord = {
            name: req.body.name,
            logo : req.body.logo,
            prestation : req.body.prestation,
            price : req.body.price,
            facture: req.body.facture,
            date : req.body.date,
            secteur : req.body.secteur,
            contact : req.body.contact,
            mail : req.body.mail,
            phone : req.body.phone,
            details : req.body.details,
    };

    PostsModels.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord},
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log('update erreur' + err)
        }
    )
})

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('Id inconnu' + req.params.id)

    PostsModels.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log('update erreur' + err)
        }
    )
})

module.exports = router;
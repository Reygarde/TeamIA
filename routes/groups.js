const express = require('express');
const router = express.Router();
const Group = require('../models/Group');

// Route pour créer un groupe
router.post('/create', async (req, res) => {
    try {
        const group = new Group(req.body);
        await group.save();
        res.status(201).send(group);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Route pour ajouter un membre à un groupe
router.post('/:groupId/addMember', async (req, res) => {
    try {
        const group = await Group.findById(req.params.groupId);
        group.members.push(req.body.memberId);
        await group.save();
        res.status(200).send(group);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;

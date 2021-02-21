const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are on posts');
});

router.post('/', (req, res) => {
    console.log('req.body', req.body);
    const post = new Post({
        title: 'req.body.title',
        description: 'req.body.description',
    })

    post.save().then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.json(err);
    })
    // res.json({ msg: 'failed' });
});

module.exports = router;

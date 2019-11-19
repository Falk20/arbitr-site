const express = require('express');
const router = express.Router();
const Record = require('../models/record');
const unique = require('../methods/uniqueNews');
const JusticeList = require('../models/justiceList');

router.get('/news', function (req, res, next) {
    console.log(req.query.req);

    let words = new RegExp(req.query.req, 'i');
    let newsForSend = [];

    Record.find({ title: words }).then((news) => {
        newsForSend.push(...news);

        Record.find({ body: words }).then((news) => {
            newsForSend.push(...news);

            Record.find({ source: words }).then((news) => {
                newsForSend.push(...news);
                newsForSend = unique(newsForSend);

                res.send(newsForSend);
            });
        });
    }).catch(next);
});

router.get('/news/:id', function (req, res, next) {
    Record.findById(req.params.id).then((news) => {
        res.send(news);
    }).catch(next);
});

router.post('/news', function (req, res, next) {
    Record.create(req.body).then(function (news) {
        res.send(news);
    }).catch(next);
});

router.get('/justice', function(req, res, next){
    console.log(req.query.title);
    JusticeList.findOne({title: req.query.title}).then((list)=>{
        res.send(list);
    }).catch(next);
});

router.post('/justice', function (req, res, next) {
    console.log(req);
    JusticeList.create(req.body).then(function (list) {
        res.send(list);
    }).catch(next);
});

module.exports = router;
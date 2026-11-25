var express = require('express');
var router = express.Router();

const data = require('../data/data.json');

router.get('/', function(req, res) {
    const num = Math.floor(Math.random() * data.quotes.length);
    const quote = data.quotes[num].quote;
    const author = data.quotes[num].author;
    console.log(quote);
    res.render('index', { quote: quote, author:author});
});

router.get('/random-quote', function(req, res) { 
    const num = Math.floor(Math.random() * data.quotes.length);
    const quote = data.quotes[num].quote;
    const author = data.quotes[num].author;

    res.json( { quote: quote, author:author});
});

module.exports = router;
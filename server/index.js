const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

const mainPage = express.static('../client/build');

const app = express();

mongoose.connect('mongodb+srv://falk:0gbf@cluster0-njrjf.mongodb.net/atrib?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

mongoose.connection.once('open', function () {
    console.log('connetion has been made, now make fireworks...');
}).on('error', function (error) {
    console.log('Connection error:', error);
});

app.use(mainPage);

app.use(bodyParser.json());

app.use('/search', mainPage);

app.use('/press-centr/', mainPage);

app.use('/sip/', mainPage);


app.use('/api', routes);

app.use(function (err, req, res, next) {
    //console.log(err);
    res.status(422).send({ error: err._message });
});

app.listen(process.env.port || 4000, function () {
    console.log('Now listening for requests');
});
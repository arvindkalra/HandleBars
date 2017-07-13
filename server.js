/**
 * Created by arvind on 13/7/17.
 */
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use('/', express.static('html'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'hbs'));

app.post('/all', function (req, res) {
    res.render('index',{
        fn:req.body.fn,
        sn:req.body.sn,
        DOB:req.body.DOB,
        MobNum:req.body.tel,
        email:req.body.email,
        Hno:req.body.hno,
        colony:req.body.colony,
        city:req.body.city,
        state:req.body.state,
        college:req.body.college
        })
});

app.listen(4000, function (err) {
    if(err) throw err;

    console.log("Server is Running... on 4000");
});
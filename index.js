var cors = require('cors');
const express = require('express');
var bodyParser = require('body-parser');
const router = require('./routes/routes');
;var path = require('path');
var mongoose = require( 'mongoose' );
var config = require('./config/config');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(express.static(__dirname+'/dist'));

app.get(config.app.clientRoutes, function (req, res) {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

mongoose.connect( config.db.uri);

app.use('/api', router);

app.listen(port,()=>{
    console.log("Connection has been published on port " +port);
})
const express= require('express');
const bodyParser = require('body-parser');
const inventory = require('./routes/inventory.route');
// mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://francis.bautista2018:fndWinter2019!@ds161021.mlab.com:61021/francistoysinventory';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//body parser
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// routing
app.use('/inventory', inventory);


// server 
let port = 5678;
app.listen(port, () => {
	console.log('server started on port : ' + port)
});
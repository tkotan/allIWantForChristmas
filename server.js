//Declarations & Requires
const express = require ('express');
const app = express();
const methodOverride = require ('method-override');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

//Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

//Controller
const wishlistController = require('./controllers/wishlist.js');
app.use('/wishlist', wishlistController);

//Port
const port = process.env.PORT || 3000;

//Mongoose
mongoose.connect('mongodb://localhost:27017/meancrud');
mongoose.connection.once('open', ()=>{
  console.log('Mongo connection SUCCESS')
});

//Listening
app.listen(port, function(){
  console.log('Listening...');
});

const express = require ('express');
const app = express();
const methodOverride = require ('method-override');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

app.use(bodyParser.json());
mongoose.connect


const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('listening...');
});

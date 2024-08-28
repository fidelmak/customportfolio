require('dotenv').config();
const express = require('express');

var expressLayouts = require('express-ejs-layouts');

const app = express();
exports.app = app;
const PORT = process.env.PORT || 5000;



app.use(express.static("public"));


/// Template Engine usage 
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', './layouts/main');

app.use('/', require('./server/routes/main'));



app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})

var express = require('express');
var exphbs = require('express-handlebars');


var app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// las rutas a configurar 








app.listen(3000); // al final de todo 

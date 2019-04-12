var express = require('express');
var exphbs = require('express-handlebars');


var app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// las rutas a configurar 

app.get('/', function(request, response){
    var contexto = {
        titulo : "pagina principal",
    };

    response.render('home', contexto);
});

app.post('/login', function(request, response){
    console.log('hola');

});


app.listen(3000); // al final de todo 

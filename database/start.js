var mongoose = require('mongoose');
mongoose.connect('mongodb://hostname/sneakyNinjaDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){

});

var sneakyArticleSchema = mongoose.schema({
    title: string,
    date: date,
    time: time,
    content: string,
    rating: int,
    publish: bool,
    comments:{
	author: string,
	date: date,
	time: time,
	text: string
    },
    tags:{
	value: array
    }
});

var sneakyNinjaSchema = mongoose.schema({
    name: string,
    username: string,
    email: string,
    authorization:  string
});

var sneakyArticle = mongoose.model('sneakyArticle', sneakyArticleSchema);
var sneakyNinja = mongoose.model('sneakyNinja', sneakyNinjaSchema);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Books');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    BookId : Number,
    BooktName : String,
    BookCode : String,
    releaseDate : String,
    description : String,
    starRating :Number,
    imageUrl : String
});

var Bookdata = mongoose.model('product', NewProductSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;
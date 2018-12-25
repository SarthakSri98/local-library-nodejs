var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var author = require('./author');
var genre = require('./genre');

var bookSchema = Schema({
    title : { type:String , required:true},
    author : { type: Schema.Types.ObjectId , ref:'author',  required:true   },
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre : [{ type: Schema.Types.ObjectId , ref:'genre', required:true }]
});
// Virtual for book's URL
bookSchema.set('toObject', { virtuals: true })
bookSchema.set('toJSON', { virtuals: true })

bookSchema
.virtual('url')
.get(function () {
  return '/catalog/book/' + this._id;
});

//Export model
module.exports = mongoose.model('Book', bookSchema);


//author is a reference to a single Author model object, and is required.
//genre is a reference to an array of Genre model objects. We haven't declared this object yet!
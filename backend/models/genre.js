var genre = require('./genre');
var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var genreSchema = new Schema({
      
    name:{type:String ,required:true }

})
genreSchema.set('toObject', { virtuals: true })
genreSchema.set('toJSON', { virtuals: true })

genreSchema.virtual('url')
    .get( function(){
     return  '/catalog/genre/'+ this._id;
        });


module.exports = mongoose.model('genre',genreSchema);
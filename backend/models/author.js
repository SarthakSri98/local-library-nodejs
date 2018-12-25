var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
    first_name: { type:String , required:true , max:100 },
    family_name: { type:String , required:true , max:100 },
    date_of_birth : {type:Date},
    date_of_death : { type:Date }

});

// Virtual for author's full name
authorSchema.set('toObject', { virtuals: true })
authorSchema.set('toJSON', { virtuals: true })

authorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});
// Virtual for author's lifespan
//virtual adds a virtual field
authorSchema
.virtual('lifespan')
.get(function () {
  if(this.date_of_birth && this.date_of_death)
  return (this.date_of_death.getFullYear() - this.date_of_birth.getFullYear()).toString();
});

// Virtual for author's URL
// We've also declared a virtual for the authorSchema named "url" that returns the absolute
//  URL required to get a particular instance of the model — we'll use the property in our templates
//   whenever we need to get a link to a particular author.
authorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

// Declaring our URLs as a virtual in the schema is a good idea because then the URL for an item
//  only ever needs to be changed in one place.
// At this point, a link using this URL wouldn't work, because we haven't got any routes 
// handling code for individual model instances.

module.exports = mongoose.model('author',authorSchema)
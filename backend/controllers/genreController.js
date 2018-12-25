var genre = require('../models/genre');
var Book = require('../models/book');
var async = require('async');
//express-validators
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
// Display list of all genre.
exports.genre_list = function(req, res,next) {
    genre.find().exec((err,genreList)=>{
        console.log(genreList);
         res.status(200).json({ title:"genre List",error:err , data: genreList })
    });
};

// Display detail page for a specific genre.
exports.genre_detail = function(req, res,next) {
      async.parallel({
            
        genre : (cb)=>genre.findById(req.params.id).exec(cb),

        bookList : (cb)=>Book.find({genre:req.params.id}).exec(cb)



      },(err,results)=>{
        if (err) { return next(err); }
        if (results.genre==null) { // No results.
            var err = new Error('genre not found');
            err.status = 404;
            return next(err);
        }
        console.log(results);
          res.status(200).json({ title:"genre detail", genre:results.genre , bookList : results.bookList })
      })

};

// Display genre create form on GET.
exports.genre_create_get = function(req, res) {
   
    res.status(200).json({'title':'Create Genre'})

};

// Handle genre create on POST.
exports.genre_create_post = function(req, res) {
    // Validate that the name field is not empty.
    body('name', 'Genre name required').isLength({ min: 1 }).trim(),
    console.log(req.body);
    console.log(req.body.name);
    // Sanitize (trim and escape) the name field.
    sanitizeBody('name').trim().escape(),

    (req,res,next)=>{
        const error = validationResult(req);
         
        const genre = new genre({
            name : req.body.name
        });

        if(!error.isEmpty())
        {
            res.status(200).json({ title:"Create genre" , genre:genre , error: error.array()})
        }

        else 
        {
            res.findOne({'name':req.body.name}).exec((error,found_genre)=>{
                if(error)  return next(error);
                if(found_genre)
                {
                   // Genre exists, redirect to its detail page.
                   res.redirect(found_genre.url);                
                }
                else if(!found_genre)
                {
                    genre.save(err=>{
                        if(err) return next(err);
                        res.redirect(genre.url);
                    })
                }

            })
        }
    }
    
};

// Display genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: genre delete GET');
};

// Handle genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: genre delete POST');
};

// Display genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: genre update GET');
};

// Handle genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: genre update POST');
};
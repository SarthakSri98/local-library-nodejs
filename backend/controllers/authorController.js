var Author = require('../models/author');
var book = require('../models/book');
var async = require('async');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list of all Authors.
exports.author_list = function(req, res) {
    Author.find().sort([['family_name', 'ascending']]).exec((err,authorList)=>{
        console.log(authorList);
         res.status(200).json({ title:"Author List",error:err , data: authorList })
    });
};

// Display detail page for a specific Author.
exports.author_detail = function(req, res, next) {

    async.parallel({
          author : (cb)=> Author.findById(req.params.id).exec(cb),
          books: (cb)=> book.find({'author':req.params.id}).exec(cb)

    },(err,result)=>{
        if (err) { return next(err); }
        if (result.author==null) { // No results.
            var err = new Error('author not found');
            err.status = 404;
            return next(err);
        }
        res.status(200).json({ title:"Author detail" , author:result.author , books:result.books });
    });
};

// Display Author create form on GET.
exports.author_create_get = function(req, res) {
    res.status(200).json({ title: 'Author created'});
};

// Handle Author create on POST.
exports.author_create_post = [
    // Validate fields.
    body('first_name').isLength({ min: 1 }).trim().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('family_name').isLength({ min: 1 }).trim().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
   // body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }),
   // body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true }),

    // Sanitize fields.
    sanitizeBody('first_name').trim().escape(),
    sanitizeBody('family_name').trim().escape(),
    //sanitizeBody('date_of_birth'),
    //sanitizeBody('date_of_death'),
    (req,res,next)=>{
            console.log(req.body);
            // Extract the validation errors from a request.
            const errors = validationResult(req);
    
            if (!errors.isEmpty()) {
                console.log(errors.isEmpty());
                // There are errors. Render form again with sanitized values/errors messages.
                res.status(200).json({ title: 'Create Author', author: req.body, errors: errors.array() });
                return;
            }
            else {
                // Data from form is valid.
    
                const author = new Author({
                     first_name : req.body.first_name,
                     last_name : req.body.last_name,
                     date_of_birth: req.body.date_of_birth,
                     date_of_death: req.body.date_of_death
                });
               author.save(err=>{
                if (err) { return next(err); }
                console.log('new author',author);
                // Successful - redirect to new author record.
                res.status(200).json({ url:author.url });
              }) 
            }
        }
                // Create an Author object with escaped and trimmed data.
]

// Display Author delete form on GET.
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};
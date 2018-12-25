var author = require('../models/author');
var book = require('../models/book');
var async = require('async');
// Display list of all Authors.
exports.author_list = function(req, res) {
    author.find().sort([['family_name', 'ascending']]).exec((err,authorList)=>{
        console.log(authorList);
         res.status(200).json({ title:"Author List",error:err , data: authorList })
    });
};

// Display detail page for a specific Author.
exports.author_detail = function(req, res, next) {

    async.parallel({
          author : (cb)=> author.findById(req.params.id).exec(cb),
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
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST.
exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

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
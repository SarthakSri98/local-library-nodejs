var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/book-instance');

var async = require('async');

exports.index = function(req, res) {   
    
    async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback);
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.status(200).json({ title: 'Local Library Home', error: err, data: results });
    });
};

// Display list of all books.
exports.book_list = function(req, res) {
    
   Book.find({},"title author").populate('author').exec((err,book_list)=>{
        res.status(200).json({title:"Book list",error:err, data:book_list})
    })
};

// Display detail page for a specific book.
exports.book_detail = function(req, res,next) {
   
    async.parallel({
      book : (cb)=>Book.findById(req.params.id).populate('author').populate('genre').exec(cb),
      bookInstance : (cb)=>BookInstance.find({'book':req.params.id}).exec(cb)

    },(err,results)=>{
        if (err) { return next(err); }
        if (results.book==null) { // No results.
            var err = new Error('genre not found');
            err.status = 404;
            return next(err);
        }
        console.log(results);
        res.status(200).json({title:"Book detail",book:results.book , bookInstance: results.bookInstance})
    })

};

// Display book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};
var BookInstance = require('../models/book-instance');
var book = require('../models/book');
var async = require('async');
// Display list of all BookInstances.
exports.bookinstance_list = function(req, res) {
    BookInstance.find().populate('book').exec((err,bookList)=>{
        res.status(200).json({title:"These are the book instances",
        error:err,
        data:bookList
    })
    });
}    

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function(req, res) {
    async.parallel({
        bookInstance : cb=>BookInstance.findById(req.params.id).populate('book').exec(cb),
        
    },(err,result)=>{
        res.status(200).json({ title:"BookInstance detail" , bookInstance: result.bookInstance })
    })
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};
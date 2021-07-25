const axios = require('axios');
const db = require('../models');

module.exports = {
    findAll: function(res, req) {
        const { query: params } = req;
        axios   
            .get("https://www.googleapis.com/books/v1/volumes", {
                params
            })
            .then(results => 
                results.data.items.filter(
                    results =>
                        results.volumeInfo.title &&
                        results.volumeInfo.infoLink &&
                        results.volumeInfo.authors &&
                        results.volumeInfo.description &&
                        results.volumeInfo.imageLinks &&
                        results.volumeInfo.imageLinks.thumbnail
                )
            )
            .then(apiBooks => 
                db.Book.find().then(dbBooks =>
                    apiBooks.filter(apiBook =>
                        dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
                    )
                )
            )
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    }
};
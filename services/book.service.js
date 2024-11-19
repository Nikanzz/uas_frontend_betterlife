// services/bookService.js
app.factory('bookService', function ($http) {
    return {
        getBooks: () => $http.get('/api/books'),
        addBook: (book) => $http.post('/api/books', book)
    };
});
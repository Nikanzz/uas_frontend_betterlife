// directives/bookListDirective.js
app.directive('bookList', function () {
    return {
        template: '<ul><li ng-repeat="book in books">{{ book.title }} - {{ book.author }}</li></ul>',
        restrict: 'E'
    };
});

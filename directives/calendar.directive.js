angular.module('calendarDirective', [])
    .directive('calendarDay', function () {
        return {
            restrict: 'E',
            template: '<div class="day">{{day}}</div>',
            scope: {
                day: '='
            },
            link: function (scope, element) {
                element.on('click', function () {
                    alert('You clicked on day ' + scope.day);
                });
            }
        };
    });

angular.module('calendarRoutes', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'CalendarController'
            })
            .when('/events', {
                templateUrl: 'events.html',
                controller: 'CalendarController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

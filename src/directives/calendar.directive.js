app.directive('calendarDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'calendar.html',
        controller: function ($scope, $http) {
            $scope.events = [];
            $scope.newEvent = {};

            // Fetch all calendar events
            $http.get('http://localhost:5000/api/calendar')
                .then((response) => {
                    $scope.events = response.data;
                })
                .catch((error) => console.error(error));

            // Add a new calendar event
            $scope.addEvent = function () {
                $http.post('http://localhost:5000/api/calendar', $scope.newEvent)
                    .then((response) => {
                        $scope.events.push(response.data);
                        $scope.newEvent = {};
                    })
                    .catch((error) => console.error(error));
            };
        },
    };
});

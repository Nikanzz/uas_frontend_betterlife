angular.module('calendarController', [])
    .controller('CalendarController', ['$scope', 'CalendarService', function ($scope, CalendarService) {
        var today = new Date();
        $scope.nowYear = today.getFullYear();
        $scope.nowMonth = ('0' + today.getMonth()).slice(-2);
        $scope.nowDay = ('0' + today.getDate()).slice(-2);

        $scope.activeYear = $scope.nowYear;
        $scope.activeMonth = $scope.nowMonth;
        $scope.activeDay = $scope.nowDay;

        $scope.events = CalendarService.getEvents();

        $scope.printMonth = function (year, month) {
            // Logika untuk mencetak kalender bulan
            CalendarService.printMonth(year, month);
        };

        $scope.addEvent = function (eventDate, eventMsg) {
            CalendarService.addEvent(eventDate, eventMsg);
        };

        $scope.showDailyEvents = function (year, month, day) {
            $scope.dailyEvents = CalendarService.getDailyEvents(year, month, day);
        };
    }]);

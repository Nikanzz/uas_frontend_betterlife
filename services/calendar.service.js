angular.module('calendarService', [])
    .service('CalendarService', function () {
        var events = {};

        // Menambahkan event
        this.addEvent = function (eventDate, eventMsg) {
            var ymd = eventDate.split('-');
            var y = ymd[0];
            var m = ymd[1];
            var d = ymd[2];

            if (!events[y + '-' + m]) {
                events[y + '-' + m] = {};
            }

            if (!events[y + '-' + m][d]) {
                events[y + '-' + m][d] = [];
            }

            events[y + '-' + m][d].push(eventMsg);
        };

        // Mengambil event harian
        this.getDailyEvents = function (year, month, day) {
            return events[year + '-' + month] && events[year + '-' + month][day] || [];
        };

        // Menampilkan bulan
        this.printMonth = function (year, month) {
            // Implementasi untuk mencetak bulan
        };

        // Mengambil semua event
        this.getEvents = function () {
            return events;
        };
    });

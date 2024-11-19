// services/diaryService.js
app.factory('diaryService', function ($http) {
    return {
        getDiaries: () => $http.get('/api/diaries'),
        addDiary: (diary) => $http.post('/api/diaries', diary)
    };
});
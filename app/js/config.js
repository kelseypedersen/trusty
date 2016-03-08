// Add UI router here

angular.module('travels.configuration', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'View1Ctrl'
        });

        $routeProvider.when('/search', {
            templateUrl: 'views/search.html',
            controller: 'SearchCtrl'
        });

        $routeProvider.when('/new', {
            templateUrl: 'views/new.html',
            controller: 'AppCtrl'
        });

        $routeProvider.when('/sign-up', {
            templateUrl: 'views/create-user.html',
            controller: 'AppCtrl'
        });

        $routeProvider.when('/sign-in', {
            templateUrl: 'views/login-user.html',
            controller: 'AppCtrl'
        });

    }]);



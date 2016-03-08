// Add UI router here

angular.module('travels.configuration', [])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('home');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'AppCtrl'
            })

            .state('search', {
                url: '/search',
                templateUrl: 'views/search.html',
                controller: 'AppCtrl'
            })

            .state('new', {
                url: '/new',
                templateUrl: 'views/new.html',
                controller: 'AppCtrl'
            })

            .state('sign-up', {
                url: '/signup',
                templateUrl: 'views/create-user.html',
                controller: 'AppCtrl'
            })

            .state('sign-in', {
                url: '/sign-in',
                templateUrl: 'views/login-user.html',
                controller: 'AppCtrl'
            })

            .state('add-destination', {
                url: '/add-destination',
                templateUrl: 'views/add-destination.html',
                controller: 'AppCtrl'
            })

            .state('review', {
                url: '/review',
                templateUrl: 'views/review.html',
                controller: 'AppCtrl'
            });


    }]);



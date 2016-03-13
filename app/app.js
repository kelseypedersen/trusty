'use strict';


angular.module('travels.controllers', [
    'app',
    'trip',
    'details'
]);

angular.module('travels.services', [

]);

angular.module('travels.factories', [

]);



// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'myApp.view1',
    'myApp.view2',
    'travels.controllers',
    'travels.services',
    'travels.factories',
    'travels.configuration'

]);

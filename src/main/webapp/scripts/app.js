'use strict';

angular.module('yoWebappApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.jsp',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

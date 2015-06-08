'use strict';

var myApp = angular.module('myPhones', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });

myApp.controller('phoneController', function($scope) {

  $scope.modes = ['tablets', 'phones'];

  $scope.mode = {
    value: 'phones'
  };

  $scope.setMode = function() {
    switch ($scope.mode.value) {
    case 'tablets':
      return 'tabletList.html';
      break;
    case 'phones':
      return 'phonesList.html';
      break;
    default:
      return 'phonesList.html';
    }
  };

  $scope.phones = [{
    name: 'Nokia Lumia 630',
    year: 2014,
    price: 200,
    company: 'Nokia'
  }, {
    name: 'Samsung Galaxy S 4',
    year: 2014,
    price: 400,
    company: 'Samsung'
  }, {
    name: 'Mi 5',
    year: 2015,
    price: 300,
    company: 'Xiaomi'
  }];
  $scope.tablets = [{
    name: 'Samsung Galaxy Tab S4',
    year: 2014,
    price: 300,
    company: 'Samsung'
  }, {
    name: 'LG G PAD 8.3',
    year: 2013,
    price: 180,
    company: 'LG'
  }, {
    name: 'IdeaTab A8',
    year: 2014,
    price: 220,
    company: 'Lenovo'
  }];

  $scope.tablets = [{
    name: 'Samsung Galaxy Tab S4',
    year: 2014,
    price: 300,
    company: 'Samsung'
  }, {
    name: 'LG G PAD 8.3',
    year: 2013,
    price: 180,
    company: 'LG'
  }, {
    name: 'IdeaTab A8',
    year: 2014,
    price: 220,
    company: 'Lenovo'
  }];

});




myApp.controller('modelDemo', function ($scope) {
  $scope.textInArea = '';
});

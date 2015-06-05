//creating module
var myApp = angular.module('myApp', ['ngSanitize'])
    .run(function ($rootScope) {
        $rootScope.moduleName = 'myApp';
        $rootScope.message = 'Hello AngularJS';
    });

//creating model
myApp.controller('phoneController', function ($scope) {
    $scope.phones = [{
        name: 'Nokia Lumia 630',
        year: 2014,
        price: 200,
        company: {
            name: 'Nokia',
            country: 'Финляндия'
        }
    }, {
        name: 'Samsung Galaxy S 4',
        year: 2014,
        price: 400,
        company: {
            name: 'Samsung',
            country: 'Республика Корея'
        }
    }, {
        name: 'Mi 5',
        year: 2015,
        price: 300,
        company: {
            name: 'Xiaomi',
            country: 'Китай'
        }
    }];
});

//creating model
myApp.controller('itemController', function ($scope) {
    $scope.phones = [{
        name: 'Nokia',
        models: [{
            name: 'Nokia Lumia 530',
            price: 150
        }, {
            name: 'Nokia X2',
            price: 200
        }]
    }, {
        name: 'Samsung',
        models: [{
            name: 'Samsung Galaxy S5',
            price: 500
        }, {
            name: 'Samsung Galaxy Alpha',
            price: 400
        }]
    }];
});

myApp.controller('parentController', function ($scope) {
    $scope.phone = {
        name: 'MeizuV',
        year: 2014,
        price: 340,
        company: {
            name: 'MeizuV',
            country: 'ChinaV'
        }
    };
});
myApp.controller('сhildController', function ($scope) {
    $scope.phone = {
        name: 'MeizuC',
        year: 2015,
        price: 350,
        company: {
            name: 'MeizuC',
            country: 'ChinaC'
        }
    };
});

myApp.controller('countrollerBingHtml', function ($scope) {
    $scope.modelHtmlField = '';
});

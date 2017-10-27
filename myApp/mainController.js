var myApp = angular.module("myApp", ['ngRoute', 'listApp']);
myApp.controller('mainController', function($scope) {
    $scope.name = 'Shaminoo';
    $scope.test = 'testmaincontroller';
    $scope.name1 = 'enter name';
    console.log($scope.name1);
});
myApp.controller('testController', function($scope) {
    $scope.test = 'test';
});
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/list', {
        controller: 'ListController',
        templateUrl: './partials/list.html'
    })
    .when('/view/:Id', {
        controller: 'ViewController',
        templateUrl: './partials/list.html'
    })    
    .otherwise({
        redirectTo: '/'
    })
}]);
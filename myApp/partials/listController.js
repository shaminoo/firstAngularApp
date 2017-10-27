var listApp = angular.module('listApp', []);
listApp.controller('ListController', function($scope) {
    $scope.list = 'list view';
});
listApp.controller('ViewController', function($scope, $routeParams){
    $scope.view = 'test view';
    $scope.list = 'list view test';
    $scope.id = $routeParams.Id;
});
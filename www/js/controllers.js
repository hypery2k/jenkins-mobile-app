var jenkinsmobileApp = angular.module("jenkinsmobileApp", []);

jenkinsmobileApp.controller("HomeController", function ($scope) {
    $scope.message = "AngularJS!";
});

jenkinsmobileApp.controller('JobListCtrl', function ($scope) {
  $scope.jobs = [
    {'name': 'Job1 - JS',
     'description': 'Simple JavaScript Job'},
    {'name': 'Job2 - Java',
     'description': 'Simple Java Job'},
    {'name': 'Job3 - Nightly Build',
     'description': 'Runs nightly to get recent quality metrics'}
  ];
});
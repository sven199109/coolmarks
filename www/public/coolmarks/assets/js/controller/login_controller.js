var loginForm = angular.module('login', []);

loginForm.controller('loginCtrl', function($scope, loginService, $http) {
    $scope.userLogin = function() {
        loginService.userLogin($scope.user).success(function(data, status, headers, config) {
            alert(data);
		}).error(function(data, status, headers, config) {
		    alert(data);
		});
    };
});

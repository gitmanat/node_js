'use strice';

var mainAppModuleName = 'Main';
var mainAppModule = angular.module(mainAppModuleName, []);

mainAppModule.controller('NameController', ['$scope', function($scope) {
	$scope.yourName = 'No Name';
}]);

mainAppModule.filter('sayhello', function() {
	return function(name) {
		return 'Hello, ' + name;
	};
});

angular.element(document).ready(function() {
	angular.bootstrap(document.querySelector('#mainApp'), [mainAppModuleName], {
		strictDi: true
	});
});
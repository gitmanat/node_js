angular.module('core').config([
	'$urlRouterProvider',
	function($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	}
]);
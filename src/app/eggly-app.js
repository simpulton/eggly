angular.module('Eggly', [
		'ui.router'
	])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('index', {
				url: '/'
			})
			.state('home', {
				url: '/home',
				template: '<h1>Eggly App</h1>'
			})
			.state('hello', {
				url: '/hello',
				templateUrl: 'app/templates/hello.tmpl.html'
			})
			.state('users', {
				url: '/users',
				templateUrl: 'app/templates/users.tmpl.html',
				controller: function($scope) {
					$scope.users = ["Johnny", "Susy", "Luke", "Sarah"];
				}
			})
			.state('bookmarks', {
				url: '/bookmarks',
				templateUrl: 'app/templates/bookmarks.tmpl.html',
				controller: 'MainCtrl'
			})
		;
		$urlRouterProvider.otherwise('/');
	})

	.controller('MainCtrl', function($scope) {
		$scope.bookmarks = ["AngularJs", "Egghead.io", "A List Apart", "One Page Love", "MobilityWOD", "Robb Wolf"];
	})

;
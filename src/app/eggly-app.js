angular.module('Eggly', [
		'ui.router'
	])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
			})
			.state('design', {
				url: '/Design',
				templateUrl: 'app/templates/bookmarks.tmpl.html',
				controller: function($scope) {
					$scope.bookmarks = ["A List Apart", "One Page Love"];
				}
			})
			.state('develop', {
				url: '/Development',
				templateUrl: 'app/templates/bookmarks.tmpl.html',
				controller: function($scope) {
					$scope.bookmarks = ["AngularJs", "Egghead.io"];
				}
			})
			.state('exercise', {
				url: '/Exercise',
				templateUrl: 'app/templates/bookmarks.tmpl.html',
				controller: function($scope) {
					$scope.bookmarks = ["MobilityWOD", "Robb Wolf"];
				}
			})
			.state('humor', {
				url: '/Humor',
				templateUrl: 'app/templates/bookmarks.tmpl.html',
				controller: 'HumorCtrl'
			})
		;
		$urlRouterProvider.otherwise('/');
	})

	.controller('HumorCtrl', function($scope) {
		$scope.bookmarks = ["Senor Gif", "Wimp", "Dump"];
	})

;
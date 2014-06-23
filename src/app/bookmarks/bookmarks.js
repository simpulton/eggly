angular.module('bookmarks', [
	'ui.router'
])
	.config(function ($stateProvider) {
		$stateProvider
			.state('eggly.home', {
				url: '/',
				template: '<h1>Welcome to Eggly</h1>'
			})
			.state('eggly.design', {
				url: '/Design',
				templateUrl: 'app/bookmarks/bookmarks.tmpl.html',
				controller: function($scope) {
					$scope.bookmarks = ["A List Apart", "One Page Love"];
				}
			})
			.state('eggly.develop', {
				url: '/Development',
				templateUrl: 'app/bookmarks/bookmarks.tmpl.html',
				controller: function($scope) {
					$scope.bookmarks = ["AngularJs", "Egghead.io"];
				}
			})
			.state('eggly.exercise', {
				url: '/Exercise',
				templateUrl: 'app/bookmarks/bookmarks.tmpl.html',
				controller: function($scope) {
					$scope.bookmarks = ["MobilityWOD", "Robb Wolf"];
				}
			})
			.state('eggly.humor', {
				url: '/Humor',
				templateUrl: 'app/bookmarks/bookmarks.tmpl.html',
				controller: 'HumorCtrl'
			})
		;
	})

	.controller('HumorCtrl', function HumorCtrl($scope) {
		$scope.bookmarks = ["Senor Gif", "Wimp", "Dump"];
	})
;
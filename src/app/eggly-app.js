angular.module('Eggly', [
		'ui.router',
		'bookmarks'
	])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('eggly', {
				url: '',
				template: '<div ui-view></div>',
				abstract: true
			})
		;
		$urlRouterProvider.otherwise('/');
	})
;
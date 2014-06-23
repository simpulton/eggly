//-------------------------------------------------------------------------------------------------
// Add in AnagularJS libraries
//-------------------------------------------------------------------------------------------------

	/* index.html */
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular-animate.min.js"></script>
	<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"></script>


//-------------------------------------------------------------------------------------------------
// Initialize app with ng-app
//-------------------------------------------------------------------------------------------------

	/* index.html */
	<html ng-app>

//-------------------------------------------------------------------------------------------------
// Create main module
//-------------------------------------------------------------------------------------------------

	create folder in src: app
	create file in app: eggly-app.js
	
	/* index.html */
	<html ng-app="Eggly">
	---------------------
    <script src="app/eggly-app.js"></script>

	/* eggly-app.js */
	angular.module('Eggly', []);

//-------------------------------------------------------------------------------------------------
// Set up some simple states
//-------------------------------------------------------------------------------------------------
	
	create folder in app: templates

	create file in templates: bookmarks.tmpl.html

	/* bookmarks.tmpl.html */
	<ul ng-repeat="bookmark in bookmarks">
		<li><h1>{{bookmark}}</h1></li>
	</ul>
	<a ui-sref="home">Back</a>

	/* index.html */
	 <ul class="nav nav-sidebar">
        <li>
          <a ui-sref="develop">
            Development
          </a></li>
          <li>
          <a ui-sref="design">
            Design
          </a></li>
          <li>
          <a ui-sref="exercise">
            Exercise
          </a></li>
          <li>
          <a ui-sref="humor">
            Humor
          </a></li>
    </ul>
    -----------------------------------------------------------------------------

	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" ui-view>
	
	-----------------------------------------------------------------------------
	<script src="vendor/angular-ui-router.min.js"></script>

	/* eggly-app.js */
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
//-------------------------------------------------------------------------------------------------
// Create categories submodule
//-------------------------------------------------------------------------------------------------

expand on this

//-------------------------------------------------------------------------------------------------
// Create bookmarks submodule
//-------------------------------------------------------------------------------------------------

expand on this
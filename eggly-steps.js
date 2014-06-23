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
	create file in templates: hello.tmpl.html

	/* hello.tmpl.html */
	<h1>Hello, and welcome to Eggly App, the most awesome app ever!</h1>

	create file in templates: users.tmpl.html

	/* users.tmpl.html */
	<ul ng-repeat="user in users">
		<li><h1>{{user}}</h1></li>
	</ul>
	<a ui-sref="bookmarks">Bookmarks</a>

	create file in templates: bookmarks.tmpl.html

	/* bookmarks.tmpl.html */
	<ul ng-repeat="bookmark in bookmarks">
		<li><h1>{{bookmark}}</h1></li>
	</ul>
	<a ui-sref="users">Back</a>

	/* index.html */
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" ui-view>
	-----------------------------------------------------------------------------
	<script src="vendor/angular-ui-router.min.js"></script>

	/* eggly-app.js */
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
//-------------------------------------------------------------------------------------------------
// Create categories submodule
//-------------------------------------------------------------------------------------------------

expand on this

//-------------------------------------------------------------------------------------------------
// Create bookmarks submodule
//-------------------------------------------------------------------------------------------------

expand on this
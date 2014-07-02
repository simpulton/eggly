// ===========================
// 		1. Bootstrap the app
// ===========================

	create folder in src: app
	create file in app: eggly-app.js

	/* --------------- index.html --------------- */
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular-animate.min.js"></script>
	<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"></script>

    <script src="app/eggly-app.js"></script>


	/* --------------- eggly-app.js --------------- */
	angular.module('Eggly', []);

// ===========================
// 		2. Create MainCtrl
// ===========================	

	/* --------------- eggly-app.js --------------- */
	angular.module('Eggly', [])
		.value('categories', [
			{"id": 0, "name": "Development"},
		    {"id": 1, "name": "Design"},
		    {"id": 2, "name": "Exercise"},
		    {"id": 3, "name": "Humor"}
		])
		.value('bookmarks', [
			{"id":0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
		    {"id":1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
		    {"id":2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
		    {"id":3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
		    {"id":4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
		    {"id":5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
		    {"id":6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
		    {"id":7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
		    {"id":8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
		])
		.controller('MainCtrl', function MainCtrl ($scope, categories, bookmarks) {
			$scope.categories = categories;
			$scope.bookmarks = bookmarks;
		})
	;

	/* --------------- index.html --------------- */
	<ul class="nav nav-sidebar">
        <li ng-repeat="category in categories">
          <a href="#">
            {{category.name}}
          </a>
        </li>
    </ul>

    ====================================

    <div ng-repeat="bookmark in bookmarks">
          <button type="button" class="close">&times;</button>
          <button type="button" class="btn btn-link"><span class="glyphicon glyphicon-pencil"></span>
          </button>
          <a href="{{bookmark.url}}" target="_blank">{{bookmark.title}}</a>
    </div>

// =================================================================================
// 		3. Add in setCurrentCategory method and filter bookmarks with it
// =================================================================================

	/* --------------- eggly-app.js --------------- */
	.controller('MainCtrl', function MainCtrl ($scope, categories, bookmarks, $filter) {
		$scope.categories = categories;
		$scope.bookmarks = bookmarks;

		$scope.filteredBookmarks = bookmarks;

		$scope.setCurrentCategory = function(filterCategory) {
			$scope.filteredBookmarks = $filter('filter')($scope.bookmarks, filterCategory)
		}
	})

	/* --------------- index.html --------------- */
	<ul class="nav nav-sidebar">
        <li ng-repeat="category in categories">
          <a href="#" ng-click="setCurrentCategory(category.name)">
            {{category.name}}
          </a>
        </li>
    </ul>

    =================================================================

    <div ng-repeat="bookmark in filteredBookmarks">

// ======================================================
// 		4. Create services for bookmarks and categories
// ======================================================
	
	create folder in app: common
	create folder in common: models
	create file in models: bookmarks-model.js
	create file in models: categories-model.js

	/* --------------- bookmarks-model.js --------------- */
	angular.module('eggly.models.bookmarks', [])
	.service('bookmarks', function BookmarksService() {
		var bookmarks = [
			{"id":0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
		    {"id":1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
		    {"id":2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
		    {"id":3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
		    {"id":4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
		    {"id":5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
		    {"id":6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
		    {"id":7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
		    {"id":8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
		];

		var bookmarksModel = this;

		bookmarksModel.getBookmarks = function() {
			return bookmarks;
		}
	})

	/* --------------- categories-model.js --------------- */
	angular.module('eggly.models.categories', [])
	.service('categories', function CategoriesService() {
		var categories = [
			{"id": 0, "name": "Development"},
		    {"id": 1, "name": "Design"},
		    {"id": 2, "name": "Exercise"},
		    {"id": 3, "name": "Humor"}
		];

		var categoriesModel = this;

		categoriesModel.getCategories = function() {
			return categories;
		}
	})

	/* --------------- eggly-app.js --------------- */
	angular.module('Eggly', [
		'eggly.models.categories',
		'eggly.models.bookmarks'
	])
		.controller('MainCtrl', function MainCtrl ($scope, categories, bookmarks, $filter) {
			$scope.categories = categories.getCategories();
			$scope.bookmarks = bookmarks.getBookmarks();

			$scope.filteredBookmarks = $scope.bookmarks;

			$scope.setCurrentCategory = function(filterCategory) {
				$scope.filteredBookmarks = $filter('filter')($scope.bookmarks, filterCategory);
			}
		})

	/* --------------- index.html --------------- */
	<script src="app/common/models/categories-model.js"></script>
    <script src="app/common/models/bookmarks-model.js"></script>

// ======================================================
// 		5. Load data via json and $http
// ======================================================

	create folder in src: data
	create file in data: bookmarks.json
	create file in data: categories.json

	/* --------------- categories.json --------------- */
	[
		{"id": 0, "name": "Development"},
	    {"id": 1, "name": "Design"},
	    {"id": 2, "name": "Exercise"},
	    {"id": 3, "name": "Humor"}
	]

	/* --------------- bookmarks.json --------------- */
	[
		{"id":0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
	    {"id":1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
	    {"id":2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
	    {"id":3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
	    {"id":4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
	    {"id":5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
	    {"id":6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
	    {"id":7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
	    {"id":8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
	]

	/* --------------- categories-model.js --------------- */
	angular.module('eggly.models.categories', [])
	.service('categories', function CategoriesService($http) {
		var URLS = {
          FETCH: 'data/categories.json'
        },
		categoriesModel = this;

		function extract(result) {
	      return result.data;
	    }

	    function cacheCategories(result) {
	      categories = extract(result);
	      return categories;
	    }

		categoriesModel.getCategories = function() {
			return $http.get(URLS.FETCH).then(cacheCategories);
		}
	})

	/* --------------- bookmarks-model.js --------------- */
	angular.module('eggly.models.bookmarks', [])
		.service('bookmarks', function BookmarksService($http) {
			var URLS = {
				FETCH: 'data/bookmarks.json'
			},
			bookmarksModel = this;

			function extract(result) {
		      return result.data;
		    }

		    function cacheBookmarks(result) {
		      categories = extract(result);
		      return categories;
		    }

			bookmarksModel.getBookmarks = function() {
				return $http.get(URLS.FETCH).then(cacheBookmarks);
			}
		})
	;

	/* --------------- eggly-app.js --------------- */
	.controller('MainCtrl', function MainCtrl ($scope, categories, bookmarks, $filter) {
		categories.getCategories()
			.then(function(categories) {
				$scope.categories = categories;
			})
		bookmarks.getBookmarks()
			.then(function(bookmarks) {
				$scope.bookmarks = bookmarks;
				$scope.filteredBookmarks = $scope.bookmarks;
			}, function(error) {
				console.log(error)
			})


		$scope.setCurrentCategory = function(filterCategory) {
			$scope.filteredBookmarks = $filter('filter')($scope.bookmarks, filterCategory);
		}
	})


// ======================================================
// 		6. Add create bookmark form
// ======================================================
	
	/* --------------- index.html --------------- */
	<div ng-if="currentCategory">
	  <button ng-click="toggleCreating()" type="button" class="btn btn-link">
	        <span
	      class="glyphicon glyphicon-plus"></span>
	    Create Bookmark
	  </button>
	</div>

	<div class="createBookmark">
	  <form class="create-form" ng-show="isCreating" role="form" ng-submit="createBookmark()" novalidate>
	      <div class="form-group">
	          <label for="newBookmarkTitle">Bookmark Title</label>
	          <input type="text" class="form-control" id="newBookmarkTitle" ng-model="newBookmark.title" placeholder="Enter title">
	      </div>
	      <div class="form-group">
	          <label for="newBookmarkURL">Bookmark URL</label>
	          <input type="text" class="form-control" id="newBookmarkURL" ng-model="newBookmark.url" placeholder="Enter URL">
	      </div>
	      <button type="submit" class="btn btn-info btn-lg">Create</button>
	      <button type="button" class="btn btn-default btn-lg pull-right" ng-click="cancelCreating()">Cancel</button>
	  </form>
	</div>

    /* --------------- eggly-app.js --------------- */
    .controller('MainCtrl', function MainCtrl ($scope, categories, bookmarks, $filter) {
		$scope.isCreating = false;

	    function toggleCreating() {
	      $scope.isCreating = !$scope.isCreating;
	    }
	    function cancelCreating() {
	      $scope.isCreating = false;
	    }
		function setCurrentCategory(filterCategory) {
			$scope.currentCategory = filterCategory;
			$scope.filteredBookmarks = $filter('filter')($scope.bookmarks, filterCategory);
		}
		function createBookmark() {
	      $scope.newBookmark.category = $scope.currentCategory;
      	  $scope.newBookmark.id = $scope.bookmarks.length;
	      $scope.bookmarks.push($scope.newBookmark);
	      $scope.setCurrentCategory($scope.currentCategory);
		  resetForm(); 	
	    }
	    function resetForm() {
	      $scope.newBookmark = {
	        title: '',
	        url: '',
	        category: $scope.currentCategory
	      };
	    }

		categories.getCategories()
			.then(function(categories) {
				$scope.categories = categories;
			})
		bookmarks.getBookmarks()
			.then(function(bookmarks) {
				$scope.bookmarks = bookmarks;
				$scope.filteredBookmarks = $scope.bookmarks;
			})

		$scope.toggleCreating = toggleCreating;
	    $scope.cancelCreating = cancelCreating;
	    $scope.setCurrentCategory = setCurrentCategory;
	    $scope.createBookmark = createBookmark;

	})

// ======================================================
// 		7. Add edit bookmark form
// ======================================================

	/* --------------- add to eggly-app.js --------------- */
	function toggleEditing(id) {
      $scope.isEditing[id] = $scope.isEditing[id] ? !$scope.isEditing[id] : true;
      populateForm(id);
    }
	function cancelEditing(id) {
      $scope.isEditing[id] = false;
    }
	function updateBookmark() {
      $scope.bookmark = angular.copy($scope.editedBookmark);
	  angular.forEach($scope.bookmarks, function(value, key) {
	  	if ($scope.bookmarks[key].id == $scope.bookmark.id) {
	  		$scope.bookmarks[key] = $scope.bookmark;
	  	}
	  });
	  $scope.cancelEditing($scope.bookmark.id);
    }
	function populateForm(id) {
        $scope.bookmark = $scope.bookmarks[id];
        $scope.editedBookmark = angular.copy($scope.bookmark);
    }

	$scope.toggleEditing = toggleEditing;
	$scope.cancelEditing = cancelEditing;
	$scope.updateBookmark = updateBookmark;

	/* --------------- index.html --------------- */
	<div ng-repeat="bookmark in filteredBookmarks">

          <button type="button" class="close">&times;</button>
          <button type="button" ng-click="toggleEditing(bookmark.id)" class="btn btn-link"><span class="glyphicon glyphicon-pencil"></span>
          </button>
          <a href="{{bookmark.url}}" target="_blank">{{bookmark.title}}</a>
          <div ng-show="isEditing[bookmark.id] == true">   
            <h4>Editing {{bookmark.title}}</h4>

            <form class="edit-form" role="form" ng-submit="updateBookmark()" novalidate>
                <div class="form-group">
                    <label>Bookmark Title</label>
                    <input type="text" class="form-control" ng-model="editedBookmark.title" placeholder="Enter title">
                </div>
                <div class="form-group">
                    <label>Bookmark URL</label>
                    <input type="text" class="form-control" ng-model="editedBookmark.url" placeholder="Enter URL">
                </div>
                <button type="submit" class="btn btn-info btn-lg">Save</button>
                <button type="button" class="btn btn-default btn-lg pull-right" ng-click="cancelEditing(bookmark.id)">Cancel</button>
            </form>
          </div>
    </div>
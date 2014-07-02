angular.module('Eggly', [
	'eggly.models.categories',
	'eggly.models.bookmarks'
])
	.controller('MainCtrl', function MainCtrl ($scope, categories, bookmarks, $filter) {
		$scope.isCreating = false;
		$scope.isEditing = {};

	    function toggleCreating() {
	      $scope.isCreating = !$scope.isCreating;
	    }
	    function toggleEditing(id) {
	      $scope.isEditing[id] = $scope.isEditing[id] ? !$scope.isEditing[id] : true;
	      populateForm(id);
	    }
	    function cancelCreating() {
	      $scope.isCreating = false;
	    }
	    function cancelEditing(id) {
	      $scope.isEditing[id] = false;
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
	    function updateBookmark() {
	      $scope.bookmark = angular.copy($scope.editedBookmark);
		  angular.forEach($scope.bookmarks, function(value, key) {
		  	if ($scope.bookmarks[key].id == $scope.bookmark.id) {
		  		$scope.bookmarks[key] = $scope.bookmark;
		  	}
		  });
		  $scope.setCurrentCategory($scope.currentCategory);
		  $scope.cancelEditing($scope.bookmark.id);
	    }
	    function populateForm(id) {
	        $scope.bookmark = $scope.bookmarks[id];
	        $scope.editedBookmark = angular.copy($scope.bookmark);
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
		$scope.toggleEditing = toggleEditing;
	    $scope.cancelCreating = cancelCreating;
	    $scope.cancelEditing = cancelEditing;
	    $scope.setCurrentCategory = setCurrentCategory;
	    $scope.createBookmark = createBookmark;
	    $scope.updateBookmark = updateBookmark;

	})
;
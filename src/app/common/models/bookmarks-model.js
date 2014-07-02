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
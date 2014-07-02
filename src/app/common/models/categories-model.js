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
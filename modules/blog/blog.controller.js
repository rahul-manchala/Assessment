//blog Controller
app.controller('blogController',['$scope','$http',function($scope, $http){
	$scope.pageName = 'Blog';
	$scope.apiUrl = 'https://www.healthcare.gov';
	$scope.langList = [
		{ id: 'en', name: 'English' },
		{ id: 'es', name: 'Spanish' },
		{ id: '', name: 'Both' }
    ];
    $scope.selectedLanguage = 'en';
	$http({
		method: 'GET',
		url: $scope.apiUrl+'/api/blog.json'
		}).then(function successCallback(response) {
			$scope.blogs = response.data.blog;

		}, function errorCallback(response) {

	});
	$scope.formatDate = function(str){
		return new Date(str);
	};
}]);
// Glossary controller
app.controller('glossaryController',['$scope','$http',function($scope, $http){
	$scope.pageName = 'Glossary';
	$scope.apiUrl = 'https://www.healthcare.gov';
	$scope.searchString = '';
	$scope.langList = [
		{ id: 'en', name: 'English' },
		{ id: 'es', name: 'Spanish' },
		{ id: '', name: 'Both' }
    ];
    $scope.selectedLanguage = 'en';
	$http({
		method: 'GET',
		url: $scope.apiUrl+'/api/glossary.json'
		}).then(function successCallback(response) {
			$scope.glossaries = response.data.glossary;

		}, function errorCallback(response) {

	});
	$scope.search = function() {
		$scope.searchString = $scope.searchText;
	};
}]);
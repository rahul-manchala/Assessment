// Contact controller
app.controller('contactController',['$scope',function($scope){
	$scope.contactus = {};
	$scope.forminValid = false;
	$scope.formValid = false;
	$scope.contactusReasons = [
      { id: 1, name: 'Healthcare Marketplace' },
      { id: 2, name: 'Technical Support' },
      { id: 3, name: 'Website Feedback' }
      ];
}]);
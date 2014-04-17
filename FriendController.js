angular.module('angular-friends').controller('friendController', function($scope, $http) {
	//everything happens here
	$scope.test='hello world';
	$http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json')
		.success(function (data) {
			$scope.friends = data.results;
		});

		$scope.search={};
		$scope.search.name = '';
		$scope.search.current_location = '';
});
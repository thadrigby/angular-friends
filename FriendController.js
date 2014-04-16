angular.module('angular-friends').controller('friendController', function($scope) {
	//everything happens here
	$scope.test='hello world';
	$.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json', function (myJsonDataFromServer) {
		$scope.$apply(function() {
			$scope.friends = myJsonDataFromServer.results;
		});
	
	});
});





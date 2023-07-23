var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
	console.log("In myContoller...");
	
	$scope.newUser = {};
	$scope.checkedUser = {};
	$scope.message = "";

	$scope.users = 
	[
		{FNAME:"vishal",LNAME:"singh",Age:"22",Desgination:"JD",Salary:"15000"}
	];
	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "User added Successful";
	};

	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.updateUser = function(user){

	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
	};
});
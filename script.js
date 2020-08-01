myapp=angular
.module("MyModule",[])
.controller("MyController",function($scope){
	var country={
		name="India",
		capital="Delhi",
		//image="/img/flag.jpg"
	};
	$scope.country=country;
});



var myApp  =  angular.module('app', []);

myApp.controller('displayController', function($scope, $http,mainInfo){

   mainInfo.readJson().then(function(data) {  
       $scope.rss = 
        data; 
    });

   	$scope.column='SrNo';
   	$scope.reverse=false;

   	$scope.sortColumn=function(col){
	   	$scope.column=col;
   		if($scope.reverse){
   			$scope.reverse=false;
   			$scope.reverseclass='arrow-up';
   		}
   		else
   		{
   			$scope.reverse=true;
   			$scope.reverseclass='arrow-down';
   		}
   	};

   	$scope.sortClass=function(col){
   		if($scope.column==col){
   			if($scope.reverse){
   				return 'arrow-down';
   			}
   			else{
   				return '';
   			}
   		}
   	}

});

myApp.controller("formController",function($scope){
	$scope.form="Method";
});
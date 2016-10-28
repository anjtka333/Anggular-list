var myApp = angular.module('myApp',[]);
myApp.controller('mainController',function($scope){
    $scope.lastName ='ndddw';
    $scope.names=[
        'Mary', 
        'Ann', 
        'Pavel'];
    $scope.addName=function(){
        $scope.names.push($scope.enteredName);
        $scope.enteredName ="";
    };
    $scope.removeName=function(name){
        var i =$scope.names.indexOf(name);
        $scope.names.splice(i,1);
       
    };
    $scope.show=false;
    $scope.adit=function(show){
        if (show===true)
        $scope.show=false;
        else if (show===false){
           $scope.show=true; 
        };
        
    };
   
    $scope.checkit=function(myVar,check){
       if (myVar){
           $scope.check="done";
           console.log(myVar);
       } 
    else {
        $scope.check="in progress";
    }    
        
    };
    $scope.sortFild="name";
        
});
    
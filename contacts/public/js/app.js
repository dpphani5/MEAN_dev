var app =angular.module('RegApp', ['ngRoute']);
   app.config(function($routeProvider){
     $routeProvider
            
            .when('/form',{
                  
                templateUrl:'form.html',
              controller:'RouteController'
        }).
        otherwise({
                redirectTo:'/'
        });

});
 app.controller('RouteController',function($scope){
 $scope.collection=[{name:"DP", email: "dpphani5@gmail.com",password:"abc@123"},{name:"esh", email:"esh@123", password:"abc@325"}];
 $scope.addEntry=function(){
    $scope.collection.push($scope.newData);
     $scope.newData='';
 };
 });
 
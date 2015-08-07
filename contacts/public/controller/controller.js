var app=angular.module('Capp',['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
      .when('/login',{
        templateUrl:'login.html',
        controller:'AppCtrl'
      })

        .when('/register',{
          templateUrl:'register.html',
          controller:'AppCtrl'

      })
          .otherwise({

          redirectTo:'/'
      });
});
app.controller('AppCtrl',function($scope, $http){

console.log("inside controller");
   /* var refresh= function(){
$http.get('/contactlist').success(function(response){


console.log("igot the data");
    $scope.contactlist=response;
    $scope.entry = "";
  

});
    };
    refresh();
$scope.addContact = function(){

console.log($scope.entry);
    $http.post('/contactlist', $scope.entry).success(function(response){
    
    console.log(response);
        refresh();
    }); 
};
   
$scope.remove=function(id){
    
   $http.delete('/contactlist/' + id).success(function (response){
   refresh();
       
   
   }) 
   };
    
$scope.edit = function(id) {
    $http.get('/contactlist/' + id).success(function(response){
    
    $scope.entry = response;
    });
     
    };
    
$scope.update = function(){
      $http.put('/contactlist/' + $scope.entry._id, $scope.entry ).success(function (response){
      
      refresh();
      
      })
  
  
  };
    */
$scope.login = function(user){

console.log("inside login");
$http.post('/login', user).success(function(response){
  console.log(response);

});
};

  $scope.register = function(user){
    console.log("inside register");
    $http.post('/register', user).success(function(response){
      console.log(response);
    });
  };
});
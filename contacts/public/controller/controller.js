var app=angular.module('Capp',[]);
app.controller('AppCtrl',function($scope, $http){

console.log("inside controller");
    var refresh= function(){
$http.get('/contactlist').success(function(response){


console.log("igot the data");
    $scope.contactlist=response;
    $scope.entry = "";
    console.log($scope.contactlist);

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
    
$scope.search = function(){



};
});
(function(){
app.controller('appController',appController);

appController.$inject = ['$scope'];
function appController($scope){
        $scope.val = "full on";
       alert("its running!!!"+$scope.val);
    }
})();
angular.module('ReSearchApp', []).controller('contentCtrl', function($scope, $http) {
    $scope.titolo = 'Re-Search'

    $scope.ricerca = {};
    $scope.mostraRisultati = false;
    $scope.ricerca.testo = '';

    $scope.ricerca = function(){
      $scope.mostraRisultati = true;


      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCeNyIX6Wczm5X2-hIACEOmohWltUvyd-8&cx=015654590377674041867:2toi9p41d3m&q='+$scope.ricerca.testo
      }).then(function successCallback(response) {
        console.log($scope.ricerca.testo);
        console.log(response.data.items);
        $scope.ricerca.risultati = response.data.items;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }




});

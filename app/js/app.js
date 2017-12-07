angular.module('ReSearchApp', []).controller('contentCtrl', function($scope) {
    $scope.titolo = 'Re-Search'

    $scope.mostraRisultati = false;

    $scope.ricerca = function(){
      $scope.mostraRisultati = true;
    }


});

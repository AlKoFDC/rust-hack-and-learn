'use strict';

angular.module('hackAndLearnAppApp')
  .controller('KataListCtrl', ['$scope', 'Katas', function($scope, Katas) {
    $scope.katas = Katas.items;
    $scope.difficulties = Katas.difficulties;
    $scope.filterDifficulties = {};

    for (var i = 0; i < Katas.difficulties.length; i++) {
      $scope.filterDifficulties[Katas.difficulties[i]] = true;
    }
    this.encodeURI = window.encodeURI;
  }])
  .controller('PairingCtrl', ['$scope', function($scope) {
    $scope.imageUrl = 'images/pairing-poster.jpg';
  }]);

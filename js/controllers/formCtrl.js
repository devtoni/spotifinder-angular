/* global angular, $rootScope */
angular.module('spotifyApp')
  .controller('searchArtist', function ($scope, $rootScope) {
    var artistName = ''
    $scope.detectEnter = function (e) {
      if (e.keyCode === 13) {
        artistName = e.target.value
        $rootScope.$broadcast('artistNameReady', {artist: artistName})
      }
    }
  })

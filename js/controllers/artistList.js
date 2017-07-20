angular.module('spotifyApp')
  .controller('artistList', function ($scope, spotifyService, $rootScope) {
    $scope.$on('artistNameReady', function (e, data) {
      spotifyService.getArtistList(data.artist)
        .then(function (oArtist) {
          $scope.aArtistList = oArtist.data.artists.items
          // console.log($scope.aArtistList)
        })
    })

    $scope.getArtistId = function (e) {
      var id = e.target.dataset.artistid
      $rootScope.$broadcast('artistIdReady', { artistId: id })
    }
  })

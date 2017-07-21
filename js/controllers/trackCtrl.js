angular.module('spotifyApp')
  .controller('trackList', function ($scope, spotifyService) {
    $scope.$on('albumIdReady', function (e, data) {
      spotifyService.getTrackList(data.albumId)
        .then(function (oTracks) {
          $scope.aTracks = oTracks.data.items
          console.log($scope.aTracks)
        })
    })

 /*   $scope.getAlbumId = function (e) {
      var albumId = e.target.parentNode.attributes[1].nodeValue
      $rootScope.$broadcast('albumIdReady', { artistId: albumId })
    } */
  })

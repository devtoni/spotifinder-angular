angular.module('spotifyApp')
  .controller('albumsList', function ($scope, spotifyService, $rootScope) {
    $scope.$on('artistIdReady', function (e, data) {
      spotifyService.getAlbumsList(data.artistId)
        .then(function (oAlbums) {
          $scope.aArtistAlbums = oAlbums.data.items
          console.log($scope.aArtistAlbums)
        })
    })

    /* $scope.getAlbumId = function (e) {
      var id = e.target.dataset.artistid
      $rootScope.$broadcast('artistIdReady', { artistId: id }) */
  })

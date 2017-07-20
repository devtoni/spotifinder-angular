angular.module('spotifyApp')
  .controller('albumsList', function ($scope, spotifyService, $rootScope) {
    $scope.$on('artistIdReady', function (e, data) {
      spotifyService.getAlbumsList(data.artistId)
        .then(function (oAlbums) {
          $scope.aArtistAlbums = oAlbums.data.items
          console.log($scope.aArtistAlbums.length)
          $scope.aArtistAlbums = uniq($scope.aArtistAlbums, 'name')
          console.log($scope.aArtistAlbums.length)
        })
    })

    function uniq (a, param) {
      return a.filter(function (item, pos, array) {
        return array.map(function (mapItem) {
          return mapItem[param]
        }).indexOf(item[param]) === pos
      })
    }

    $scope.getAlbumId = function (e) {
      var albumId = e.target.parentNode.attributes[1].nodeValue
      $rootScope.$broadcast('albumIdReady', { albumId: albumId })
    }
  })

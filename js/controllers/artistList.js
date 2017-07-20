angular.module('spotifyApp')
  .controller('artistList', function ($scope, spotifyService, $rootScope) {
    $scope.$on('artistNameReady', function (e, data) {
      spotifyService.getArtistList(data.artist)
        .then(function (oArtist) {
          $scope.aArtistList = oArtist.data.artists.items
          console.log($scope.aArtistList.length)
          $scope.aArtistList = uniq($scope.aArtistList, 'name')
          console.log($scope.aArtistList.length)
        })
    })

    function uniq (a, param) {
      return a.filter(function (item, pos, array) {
        return array.map(function (mapItem) {
          return mapItem[param]
        }).indexOf(item[param]) === pos
      })
    }

    $scope.defaultImage = 'https://s-media-cache-ak0.pinimg.com/236x/7f/99/0a/7f990a1e79a583284f92e653dab5bcbb.jpg'
    $scope.getArtistId = function (e) {
      var id = e.target.dataset.artistid
      $rootScope.$broadcast('artistIdReady', { artistId: id })
    }
  })

/* global angular */
angular.module('spotifyApp')
  .controller('albumController', function (spotifyService, searchService) {
    var vm = this
    var artist = searchService.onInputAdded()
    spotifyService.getAlbumsList(artist.artistId)
        .then(function (oAlbums) {
          vm.aArtistAlbums = oAlbums.data.items
          vm.aArtistAlbums = uniq(vm.aArtistAlbums, 'name')
        })

    function uniq (a, param) {
      return a.filter(function (item, pos, array) {
        return array.map(function (mapItem) {
          return mapItem[param]
        }).indexOf(item[param]) === pos
      })
    }

    vm.getAlbumId = function (e) {
      var albumId = e.target.parentNode.attributes[1].nodeValue
      searchService.addSearchInput('albumId', albumId)
    }
  })

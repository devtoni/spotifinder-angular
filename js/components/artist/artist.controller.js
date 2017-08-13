/* global angular */
angular.module('spotifyApp')
  .controller('artistController', function (spotifyService, searchService, $state) {
    var vm = this
    var artist = searchService.onInputAdded()
    spotifyService.getArtistList(artist.name)
        .then(function (oArtist) {
          vm.aArtistList = oArtist.data.artists.items
          vm.aArtistList = uniq(vm.aArtistList, 'name')
        })

    function uniq (a, param) {
      return a.filter(function (item, pos, array) {
        return array.map(function (mapItem) {
          return mapItem[param]
        }).indexOf(item[param]) === pos
      })
    }

    vm.defaultImage = 'https://s-media-cache-ak0.pinimg.com/236x/7f/99/0a/7f990a1e79a583284f92e653dab5bcbb.jpg'
    vm.getArtistId = function (e) {
      var id = e.target.dataset.artistid
      searchService.addSearchInput('artistId', id)
      $state.go('album')
    }
  })

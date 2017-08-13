/* global angular */
angular.module('spotifyApp')
  .controller('trackController', function (spotifyService, searchService) {
    var vm = this
    var artist = searchService.onInputAdded()
    spotifyService.getTrackList(artist.albumId)
        .then(function (oTracks) {
          vm.aTracks = oTracks.data.items
        })
  })

/* global angular */
(function () {
  'use strict'
  var artist = {
    templateUrl: 'js/components/artist/artist.html',
    controller: 'artistController',
    controllerAs: 'vm'
  }
  angular
        .module('spotifyApp')
        .component('artist', artist)
})()

/* global angular */
(function () {
  'use strict'
  var album = {
    templateUrl: 'js/components/album/album.html',
    controller: 'albumController',
    controllerAs: 'vm'
  }
  angular
        .module('spotifyApp')
        .component('album', album)
})()

/* global angular */
(function () {
  'use strict'
  var track = {
    templateUrl: 'js/components/tracks/track.html',
    controller: 'trackController',
    controllerAs: 'vm'
  }
  angular
        .module('spotifyApp')
        .component('track', track)
})()

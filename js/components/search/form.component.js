/* global angular */
(function () {
  'use strict'
  var search = {
    templateUrl: 'js/components/search/form.html',
    controller: 'formController',
    controllerAs: 'vm'
  }
  angular
        .module('spotifyApp')
        .component('search', search)
})()

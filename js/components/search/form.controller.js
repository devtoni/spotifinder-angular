/* global angular */
angular.module('spotifyApp')
  .controller('formController', function (searchService, $state) {
    var vm = this
    vm.submit = function () {
      searchService.addSearchInput('name', vm.artist)
      $state.go('artist')
    }
  })

/* global angular */
(function () {
  'use strict'
  angular
  .module('spotifyApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/')
    var states = [
      {
        name: 'root',
        url: '/',
        template: '<root></root>'
      },
      {
        name: 'search',
        url: '/search',
        template: '<search></search>'
      },
      {
        name: 'artist',
        url: '/artist',
        template: '<artist></artist>'
      },
      {
        name: 'album',
        url: '/album',
        template: '<album></album>'
      },
      {
        name: 'track',
        url: '/track',
        template: '<track></track>'
      }
    ]
    states.forEach(function (state) {
      $stateProvider.state(state)
    })
  })
})()

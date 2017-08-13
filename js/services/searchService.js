angular.module('spotifyApp')
  .factory('searchService', function () {
    var artist = {}
    var addSearchInput = function (key, item) {
      artist[key] = item
    }
    // register listener
    var onInputAdded = function () {
      return artist
    }
    var clearData = function () {
      artist = {}
    }
    return {
      addSearchInput: addSearchInput,
      onInputAdded: onInputAdded,
      clearData: clearData

    }
  })

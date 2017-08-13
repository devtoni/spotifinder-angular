/* global angular */
angular.module('spotifyApp')
  .factory('spotifyService', function ($http) {
    var token = 'BQAsrnqw82DnHXlLgNXmvFP4TYk9-WdqldLRabE04clQFej-NNBQwF2SkzSDM7-gmZS6HuEZJFxCLZkuib0RgBmnDkc6FNYumBxl_oGyxeD8Mo-K9CoBY2FFytRqSkxIWz7d4CwI'
    var headerGet = {
      Authorization: 'Bearer ' + token
    }

    function getArtistList (artist) {
      var url = 'https://api.spotify.com/v1/search?type=artist&query=' + artist
      return $http.get(url, { headers: headerGet })
    }

    function getAlbumsList (idArtist) {
      var url = 'https://api.spotify.com/v1/artists/' + idArtist + '/albums'
      return $http.get(url, { headers: headerGet })
    }

    function getTrackList (idAlbum) {
      var url = 'https://api.spotify.com/v1/albums/' + idAlbum + '/tracks'
      return $http.get(url, { headers: headerGet })
    }

    return {
      getArtistList: getArtistList,
      getAlbumsList: getAlbumsList,
      getTrackList: getTrackList
    }
  })

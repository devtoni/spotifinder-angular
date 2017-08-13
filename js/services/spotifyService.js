/* global angular */
angular.module('spotifyApp')
  .factory('spotifyService', function ($http) {
    var token = 'BQCxXzUIOegIU3uRU9zAx59MG7lHrLXReDVzpnr6Me6L11uM-XGe-Gc1h9UcU31afMVCR1G1gvB9Swz7mGfkoqaxc5BMhMp2lAGONJq3cQu-kh_7SJ6vj1S7u48fJKcTFtUNAv4p'
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

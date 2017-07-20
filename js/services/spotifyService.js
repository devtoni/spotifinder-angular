/* global angular */
angular.module('spotifyApp')
  .factory('spotifyService', function ($http) {
    var token = 'BQB6oLdv5pnrPl4w3cK0wC8hse4Scb9q7d2JmIeyqAvqNquBigrRzeE93orR1suNfhulHXUx6dhI9WjKmNbAww0Hw-pmCejuiL8XJzUKiucWJ-v3oWdDr2_VTuxlxjFcLl575uKZThNz'

    function getArtistList (artist) {
      var url = 'https://api.spotify.com/v1/search?type=artist&query=<%QUERY%>'
      url = url.replace('<%QUERY%>', artist)
      var headerGet = {
        Authorization: 'Bearer ' + token
      }

      return $http.get(url, { headers: headerGet })
    }

    function getAlbumsList (idArtist) {
      var url = 'https://api.spotify.com/v1/artists/<%ID_ARTIST%>/albums'
      url = url.replace('<%ID_ARTIST%>', idArtist)
      var headerGet = {
        Authorization: 'Bearer ' + token
      }
      return $http.get(url, { headers: headerGet })
    }

    function getTrackList (idAlbum) {
      var url = 'https://api.spotify.com/v1/albums/<%ID_ALBUM%>/tracks'
      url = url.replace('<%ID_ALBUM%>', idAlbum)
      var headerGet = {
        Authorization: 'Bearer ' + token
      }
      return $http.get(url, { headers: headerGet })
    }

    return {
      getArtistList: getArtistList,
      getAlbumsList: getAlbumsList,
      getTrackList: getTrackList
    }
  })

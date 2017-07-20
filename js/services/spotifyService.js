/* global angular */
angular.module('spotifyApp')
  .factory('spotifyService', function ($http) {
    var token = 'BQDBfrXRSxEoMBHvdQYOozrqFXFgCvMi8uwPeVY3G6vI25IeZFp9Y4mM4uaK548jINKOWofCEV8unNsCFyV7yRbl6DxWnBNUzNmsrmutVt4Y3WKM5Csn9gGA8o0seATn5b87z2pt'

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
    return {
      getArtistList: getArtistList,
      getAlbumsList: getAlbumsList
    }
  })

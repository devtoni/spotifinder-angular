var btnSearch = $('#search-btn')
var urlAlbums = 'https://api.spotify.com/v1/artists/<%ID_ARTIST%>/albums'
btnSearch.on('keydown', function (e) {
  if (e.keyCode === 13) {
    var artistName = $(this).val()
    $('')
    getArtistData(artistName)
  }
})

$('.artists').on('click', 'a', function () {
  var artistId = ($(this)["0"].dataset.artistid)
  $('.artists').fadeOut()
  getArtistAlbum(artistId)
})


function getArtistData(artistName) {
  var token = 'BQBwjfN3mTI0JOPMZrMump9fwKJbb2FjrVMC8nH3_8jfPFGZ3P9_LjHMKB6lbUCcNXZaLWKuuEZvjqv2Lp_mPkyMtuX8j1qnn0e0jhig8H5dhwweO01_2E9IZjvLEQK5S4YWOp9s'
  $.ajax({
      url: 'https://api.spotify.com/v1/search?type=artist&query=' + artistName,
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .then(function (oData) {
      var arrayArtist = oData.artists.items
      fetchDataArtist(arrayArtist)
    })
}


function fetchDataArtist(arrayOfArtists) {
  console.log(arrayOfArtists)
  var templateDivArtist = '<div class="content-artist"><div class="profile-img"><img src="<%IMG%>" alt="Artist"></div><div class="name"><a href="#" data-artistId="<%ID%>">"<%NAME%>"</a></div></div>'
  var content = arrayOfArtists.map(function (artist) {
    var img = artist.images[0] ? artist.images[0].url : 'https://s-media-cache-ak0.pinimg.com/236x/7f/99/0a/7f990a1e79a583284f92e653dab5bcbb.jpg' //'../img/not-found.jpg'
    return templateDivArtist
      .replace('<%IMG%>', img)
      .replace('<%ID%>', artist.id)
      .replace('<%NAME%>', artist.name)
  }).join('')
  $('.artists')
        .html(content)
        .fadeIn('slow')
}

function getArtistAlbum(artistId) {
  var token = 'BQBwjfN3mTI0JOPMZrMump9fwKJbb2FjrVMC8nH3_8jfPFGZ3P9_LjHMKB6lbUCcNXZaLWKuuEZvjqv2Lp_mPkyMtuX8j1qnn0e0jhig8H5dhwweO01_2E9IZjvLEQK5S4YWOp9s'
  $.ajax({
      url: urlAlbums.replace('<%ID_ARTIST%>', artistId),
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .then(function (oData) {
      //console.log(oData)
      fetchDataAlbum(oData.items)
    })
}


function fetchDataAlbum(aAlbums) {
  var templateAlbums = '<div class="album"><a href="#" data-albumid="<%ID%>"><img src="<%IMG%>" alt="Album"></a><h4><%NAME%></h4></div>'
  var contentHTML = aAlbums.map(function (album) {
    var img = album.images[0] ? album.images[0].url : 'https://s-media-cache-ak0.pinimg.com/236x/7f/99/0a/7f990a1e79a583284f92e653dab5bcbb.jpg' //'../img/not-found.jpg'
    return templateAlbums
      .replace('<%ID%>', album.id)
      .replace('<%IMG%>', img)
      .replace('<%NAME%>', album.name)
  }).join('')
  $('.pair-album').html(contentHTML).fadeIn('slow')
}


/**

        <div class="album">
          <img src="https://s-media-cache-ak0.pinimg.com/236x/7f/99/0a/7f990a1e79a583284f92e653dab5bcbb.jpg" alt="">
          <h4>title</h4>
        </div>



        var templateAlbums = '<div class="album"><img data-albumId="<%ID%>" src="<%IMG%>" alt="Album"><h4><%NAME%></h4></div>'
  var contentHTML = aAlbums.map(function(album) {
    var img = album.images[0] ? album.images[1].url : 'https://s-media-cache-ak0.pinimg.com/236x/7f/99/0a/7f990a1e79a583284f92e653dab5bcbb.jpg' //'../img/not-found.jpg'
    templateAlbums
                  .replace('<%ID%>',album.id)
                  .replace('<%IMG%>',img)
                  .replace('<%NAME%>',album.name)
  }).join('')
  $('.pair-album').html(contentHTML)
       


*/
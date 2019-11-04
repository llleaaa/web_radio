$(document).ready(function () {
    var key = 'AIzaSyCfC5LZBXlwCyrEpyltdL9mVHRGqwvjh9g';
    var playlistId = 'PLWB-sLI81C12M612rq0ygdhHvyl1Y9ib7';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 50,
        playlistId: playlistId
    }

    loodVids();

    function loodVids() {
        $.getJSON(URL, options, function (data) {
            console.log(data);
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        })
    }

    function mainVid(id) {
        $('.video-container').html(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `);
    }

    function resultsLoop(data) {
        $.each(data.items, function(i, item){

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0,100);
            var vid = item.snippet.resourceId.videoId;

            $('.favariate').append(`
                <div class="article" data-key="${vid}">
                    <img src="${thumb}" alt="" class="thumb">
                    <div class="details">
                        <h4>${title}</h4>
                        <p>${desc}</p>
                    </div>
                </div>
            `);
            });
        }

        $('.favariate').on('click', '.article', function(){
            var id = $(this).attr('data-key');
            mainVid(id);
        });
});

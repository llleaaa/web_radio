function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}
$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault();
        //prepare the request
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($(".main_search").val()).replace(/%20/g, "+"),
            maxResults: 20,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
        });
        //exeute the request
        request.execute(function(response){
            var results = response.result;
            $.each(results.items, function(index, item){
                var title = item.snippet.title.substring(0,60);
                var videoid = item.id.videoId;
                $(".results").append(`
                    <div id="results">
                    <div class="item">
                        <h2>${title}</h2>
                        <iframe class="video w100" width="304" height="171" src="//www.youtube.com/embed/${videoid}" frameborder="0"></iframe>
                    </div>
                `);
            });
            
        });
        
    });
    
});


function init(){
    gapi.client.setApiKey("AIzaSyCfC5LZBXlwCyrEpyltdL9mVHRGqwvjh9g");
    gapi.client.load("youtube", "v3", function(){

    });
}
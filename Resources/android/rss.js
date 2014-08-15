var parseHypeMachineTracks = function(json, size) {
    var tracks = [];
    for (var i = 0; size > i; i++) {
        var track = {
            index: i + 1,
            title: json[i].title,
            artist: json[i].artist,
            thumbnail: json[i].thumb_url_large,
            url: json[i].posturl
        };
        tracks.push(track);
    }
    return tracks;
};

var parseiTunesTracks = function(json) {
    var tracks = [];
    for (var i = 0; 100 > i; i++) {
        var track = {
            index: i + 1,
            title: json.feed.entry[i]["im:name"].label,
            artist: json.feed.entry[i]["im:artist"].label,
            thumbnail: json.feed.entry[i]["im:image"][2].label,
            url: json.feed.entry[i]["id"].label
        };
        tracks.push(track);
    }
    return tracks;
};

var pullHypeMachineTracks = function(page, callback) {
    var url = "http://hypem.com/playlist/popular/3day/json/" + page + "/data.js";
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            var response = JSON.parse(this.responseText);
            callback.success(parseHypeMachineTracks(response, 3 == page ? 10 : 20));
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
        },
        timeout: 5e3
    });
    client.open("GET", url);
    client.send();
};

Alloy.Globals.pullHypeMachineTracks = function(callback) {
    var hypeMachineTracks = [];
    pullHypeMachineTracks(1, {
        success: function(tracks) {
            hypeMachineTracks = hypeMachineTracks.concat(tracks);
            pullHypeMachineTracks(2, {
                success: function(tracks) {
                    hypeMachineTracks = hypeMachineTracks.concat(tracks);
                    pullHypeMachineTracks(3, {
                        success: function(tracks) {
                            hypeMachineTracks = hypeMachineTracks.concat(tracks);
                            callback.success(hypeMachineTracks);
                        }
                    });
                }
            });
        }
    });
};

Alloy.Globals.pulliTunesTracks = function(callback) {
    var url = "https://itunes.apple.com/us/rss/topsongs/limit=100/explicit=true/json";
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            var response = JSON.parse(this.responseText);
            callback.success(parseiTunesTracks(response));
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("error");
        },
        timeout: 5e3
    });
    client.open("GET", url);
    client.send();
};
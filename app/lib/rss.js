// Utility function that arses JSON returned by HypeMachine API.
// Returns array of tracks, where each track
// is an array of track attributes (title, artist, thumbnail, url)
var parseHypeMachineTracks = function(json, size){
	var tracks = [];
	
	for(var i=0; i<size; i++){ 
		var track = {
			"index": i+1,
			"title" : json[i].title,
			"artist" : json[i].artist,
			"thumbnail" : json[i].thumb_url_large,
			"url" : json[i].posturl	
		};
		tracks.push(track);
	}
	
	return tracks;
};

// Utility function that parses JSON returned by iTunes API.
// Returns array of tracks, where each track
// is an array of track attributes (title, artist, thumbnail, url)
var parseiTunesTracks = function(json){
	var tracks = [];
	
	for(var i=0; i<100; i++){
		var track = {
			"index": i+1,
			"title" : json.feed.entry[i]['im:name'].label,
			"artist" : json.feed.entry[i]['im:artist'].label,
			"thumbnail" : json.feed.entry[i]['im:image'][2].label,
			"url" : json.feed.entry[i]['id'].label	
		};
		tracks.push(track);
	}
	
	return tracks;
};

// Pulls down HypeMachine track metadata from their API,
// parses them and returns them.
// TODO multiple attempt tries and better error handling
var pullHypeMachineTracks = function(page, callback){
	var url = "http://hypem.com/playlist/popular/3day/json/"+page+"/data.js";
	
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			var response = JSON.parse(this.responseText);
			// TODO better info output
			callback.success(parseHypeMachineTracks(response, (page == 3 ? 10 : 20)));
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
		},
		timeout : 5000 // in milliseconds
	});

	// Prepare the connection.
	client.open("GET", url);

	// Send the request.
	client.send();
};

// Pulls down top 50 HypeMachine track metadata from their API,
// parses them and returns them.
// TODO multiple attempt tries and better error handling
Alloy.Globals.pullHypeMachineTracks = function(callback) {
	var hypeMachineTracks = [];

	// There must be a cleaner way to do this...
	pullHypeMachineTracks(1,{
		success : function(tracks){
			hypeMachineTracks = hypeMachineTracks.concat(tracks);
			pullHypeMachineTracks(2, {
				success : function(tracks){
					hypeMachineTracks = hypeMachineTracks.concat(tracks);
					pullHypeMachineTracks(3, {
						success : function(tracks){
							hypeMachineTracks = hypeMachineTracks.concat(tracks);
							callback.success(hypeMachineTracks);
						}
					});
				}
			});				
		}
	});
};

// Pulls down top 100 iTunes track metadata from their API,
// parses them and returns them.
// TODO multiple attempt tries and better error handling
Alloy.Globals.pulliTunesTracks = function(callback) {
	var url = "https://itunes.apple.com/us/rss/topsongs/limit=100/explicit=true/json";

	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			var response = JSON.parse(this.responseText);
			// TODO better info output
			callback.success(parseiTunesTracks(response));
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			alert('error');
		},
		timeout : 5000 // in milliseconds
	});

	// Prepare the connection.
	client.open("GET", url);

	// Send the request.
	client.send();
};

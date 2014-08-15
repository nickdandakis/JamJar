exports.definition = {
	config: {
		columns: {
		    "title": "string",
		    "artist": "string",
		    "thumbnail": "string",
		    "url": "string",
		    "rank": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "mainstreamTracks"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			url: 'https://itunes.apple.com/us/rss/topsongs/limit=100/explicit=true/json',
			
			parse: function(){
				
			}
			
		});

		return Collection;
	}
};
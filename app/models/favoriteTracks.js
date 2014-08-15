exports.definition = {
	config: {
		columns: {
		    "title": "string",
		    "artist": "string",
		    "thumbnail": "string",
		    "url": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "favoriteTracks"
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
		});

		return Collection;
	}
};
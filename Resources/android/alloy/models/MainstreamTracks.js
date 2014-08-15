exports.definition = {
    config: {
        columns: {
            title: "string",
            artist: "string",
            thumbnail: "string",
            url: "string",
            rank: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "mainstreamTracks"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            url: "https://itunes.apple.com/us/rss/topsongs/limit=100/explicit=true/json",
            parse: function() {}
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("mainstreamTracks", exports.definition, []);

collection = Alloy.C("mainstreamTracks", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
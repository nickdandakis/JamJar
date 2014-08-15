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
            collection_name: "hipsterTracks"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("hipsterTracks", exports.definition, []);

collection = Alloy.C("hipsterTracks", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
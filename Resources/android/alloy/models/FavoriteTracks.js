exports.definition = {
    config: {
        columns: {
            title: "string",
            artist: "string",
            thumbnail: "string",
            url: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "favoriteTracks"
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

model = Alloy.M("favoriteTracks", exports.definition, []);

collection = Alloy.C("favoriteTracks", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
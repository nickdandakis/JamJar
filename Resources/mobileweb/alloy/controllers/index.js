function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("rss");
    var hypeMachineTracks = [];
    var iTunesTracks = [];
    var tableData = [];
    Alloy.Globals.pullHypeMachineTracks({
        success: function(tracks) {
            hypeMachineTracks = tracks;
            for (var i = 0; hypeMachineTracks.length > i; i++) {
                Ti.API.info("Processing track: " + hypeMachineTracks[i].title);
                Ti.API.info("Thumbnail URL: " + hypeMachineTracks[i].thumbnail);
                var row = Titanium.UI.createTableViewRow();
                var index = Titanium.UI.createLabel({
                    backgroundColor: "#000",
                    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                    font: {
                        fontSize: 48,
                        fontWeight: "bold"
                    },
                    opacity: .6,
                    text: i + 1,
                    left: 0,
                    top: 0,
                    width: 64,
                    height: 64
                });
                var thumbnail = Titanium.UI.createImageView({
                    image: hypeMachineTracks[i].thumbnail,
                    width: 64,
                    height: 64,
                    left: 0,
                    top: 0
                });
                var title = Titanium.UI.createLabel({
                    text: hypeMachineTracks[i].title,
                    color: "#2c3e50",
                    font: {
                        fontSize: 14
                    },
                    width: Ti.UI.Size - 80,
                    textAlign: "left",
                    top: 12,
                    ellipsize: true,
                    left: 80,
                    height: 20
                });
                var artist = Titanium.UI.createLabel({
                    text: hypeMachineTracks[i].artist,
                    color: "#7f8c8d",
                    font: {
                        fontSize: 12
                    },
                    width: "auto",
                    textAlign: "left",
                    bottom: 12,
                    left: 80,
                    height: 20
                });
                row.add(thumbnail);
                row.add(index);
                row.add(title);
                row.add(artist);
                row.className = "TrackRow";
                row.hasChild = true;
                row.height = "64";
                row.backgroundColor = i % 2 ? "#ecf0f1" : "#FFF";
                tableData.push(row);
            }
            var table = Ti.UI.createTableView({
                data: tableData
            });
            $.index.add(table);
        }
    });
    Alloy.Globals.pulliTunesTracks({
        success: function(tracks) {
            iTunesTracks = tracks;
        }
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
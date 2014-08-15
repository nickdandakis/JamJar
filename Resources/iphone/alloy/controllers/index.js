function Controller() {
    function loadHypeMachineTracks() {
        Alloy.Globals.pullHypeMachineTracks({
            success: function(tracks) {
                hypeMachineTableView = createTracksTableView(tracks);
                hypeMachineTableView.setVisible(true);
                $.index.add(hypeMachineTableView);
            }
        });
    }
    function loadiTunesTracks() {
        Alloy.Globals.pulliTunesTracks({
            success: function(tracks) {
                iTunesTableView = createTracksTableView(tracks);
                iTunesTableView.setVisible(false);
                $.index.add(iTunesTableView);
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "JamJar",
        id: "__alloyId0"
    });
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("rss");
    var createTracksTableView = function(tracks, areFavorites) {
        var tableData = [];
        for (var i = 0; tracks.length > i; i++) {
            var row = Titanium.UI.createTableViewRow({
                index: i + 1,
                thumbnail: tracks[i].thumbnail,
                tracktitle: tracks[i].title,
                artist: tracks[i].artist,
                url: tracks[i].url
            });
            if (void 0 == areFavorites) var indexLabelView = Titanium.UI.createLabel({
                backgroundColor: "#000",
                color: "#FFF",
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                font: {
                    fontSize: 99 == i ? "30sp" : "48sp",
                    fontWeight: "bold"
                },
                opacity: .6,
                text: row.index,
                left: 0,
                top: 0,
                width: "64dp",
                height: "64dp"
            });
            var thumbnailImageView = Titanium.UI.createImageView({
                image: row.thumbnail,
                width: "64dp",
                height: "64dp",
                left: 0,
                top: 0
            });
            var titleLabelView = Titanium.UI.createLabel({
                text: row.tracktitle,
                color: "#2c3e50",
                font: {
                    fontSize: "14sp"
                },
                height: "18dp",
                width: Ti.UI.FILL,
                horizontalWrap: false,
                textAlign: "left",
                top: "12dp",
                ellipsize: true,
                wordWrap: false,
                left: "80dp",
                right: "40dp"
            });
            var artistLabelView = Titanium.UI.createLabel({
                text: row.artist,
                color: "#7f8c8d",
                font: {
                    fontSize: "12sp"
                },
                height: "16dp",
                width: Ti.UI.FILL,
                horizontalWrap: false,
                wordWrap: false,
                ellipsize: true,
                textAlign: "left",
                top: "30dp",
                left: "80dp"
            });
            var toastImageView = Titanium.UI.createImageView({
                image: void 0 != areFavorites || trackFavorited(row.tracktitle, row.artist) ? "/images/toasted.png" : "/images/not_toasted.png",
                width: "16dp",
                height: "16dp",
                right: "12dp",
                top: "14dp"
            });
            row.addEventListener("singletap", function(e) {
                if ("iphone" == Ti.Platform.osname && e.source.valueOf().indexOf("[object TiUIImageView]") > -1 || "android" == Ti.Platform.osname && e.source instanceof Titanium.UI.ImageView) if (e.source.getImage().indexOf("not_toasted") > -1) {
                    e.source.setImage("/images/toasted.png");
                    var db = Ti.Database.open("JamJarDB");
                    db.execute("INSERT INTO tracks(title, artist, thumbnail, url) VALUES (?, ?, ?, ?)", e.rowData.tracktitle, e.rowData.artist, e.rowData.thumbnail, e.rowData.url);
                    db.close();
                } else if (e.source.getImage().indexOf("toasted") > -1) {
                    e.source.setImage("/images/not_toasted.png");
                    var db = Ti.Database.open("JamJarDB");
                    db.execute("DELETE FROM tracks WHERE title=? AND artist = ?", e.rowData.tracktitle, e.rowData.artist);
                    db.close();
                } else Ti.Platform.openURL(e.rowData.url); else Ti.Platform.openURL(e.rowData.url);
            });
            row.add(thumbnailImageView);
            void 0 == areFavorites && row.add(indexLabelView);
            row.add(titleLabelView);
            row.add(artistLabelView);
            row.add(toastImageView);
            row.className = "TrackRow";
            row.hasChild = false;
            row.backgroundColor = i % 2 ? "#FFF" : "#ecf0f1";
            tableData.push(row);
        }
        var table = Ti.UI.createTableView({
            data: tableData
        });
        return table;
    };
    var hypeMachineTableView = Ti.UI.createTableView();
    var iTunesTableView = Ti.UI.createTableView();
    var favoritedTableView = Ti.UI.createTableView();
    var trackFavorited = function(title, artist) {
        var db = Ti.Database.open("JamJarDB");
        var favoritedRS = db.execute("SELECT * from tracks WHERE title = ? AND artist = ?", title, artist);
        var exists = favoritedRS.isValidRow();
        favoritedRS.close();
        db.close();
        return exists;
    };
    var loadFavoriteTracks = function() {
        var db = Ti.Database.open("JamJarDB");
        var favoritedTracks = [];
        var favoritedRS = db.execute("SELECT * from tracks");
        while (favoritedRS.isValidRow()) {
            var track = {
                title: favoritedRS.fieldByName("title"),
                artist: favoritedRS.fieldByName("artist"),
                thumbnail: favoritedRS.fieldByName("thumbnail"),
                url: favoritedRS.fieldByName("url")
            };
            favoritedTracks.push(track);
            favoritedRS.next();
        }
        favoritedRS.close();
        db.close();
        favoritedTableView = createTracksTableView(favoritedTracks, true);
        favoritedTableView.setVisible(false);
        $.index.add(favoritedTableView);
    };
    var hypeMachineLabelView = Ti.UI.createLabel({
        text: "HIPSTER",
        color: "#000",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        bottom: "5dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    var favouritesLabelView = Ti.UI.createLabel({
        text: "FAVORITES",
        color: "#000",
        font: {
            fontSize: "16dp",
            fontWeight: "none"
        },
        left: "5dp",
        bottom: "5dp"
    });
    var iTunesLabelView = Ti.UI.createLabel({
        text: "MAINSTREAM",
        color: "#000",
        font: {
            fontSize: "16dp",
            fontWeight: "none"
        },
        right: "5dp",
        bottom: "5dp"
    });
    var showHipster = function() {
        hypeMachineTableView.setVisible(true);
        iTunesTableView.setVisible(false);
        favoritedTableView.setVisible(false);
        hypeMachineLabelView.setFont({
            fontSize: "16dp",
            fontWeight: "bold"
        });
        iTunesLabelView.setFont({
            fontSize: "16dp",
            fontWeight: "none"
        });
        favouritesLabelView.setFont({
            fontSize: "16dp",
            fontWeight: "none"
        });
    };
    var showMainstream = function() {
        hypeMachineTableView.setVisible(false);
        iTunesTableView.setVisible(true);
        favoritedTableView.setVisible(false);
        hypeMachineLabelView.setFont({
            fontSize: "16dp",
            fontWeight: "none"
        });
        iTunesLabelView.setFont({
            fontSize: "16dp",
            fontWeight: "bold"
        });
        favouritesLabelView.setFont({
            fontSize: "16dp",
            fontWeight: "none"
        });
    };
    var showFavorites = function() {
        loadFavoriteTracks();
        hypeMachineTableView.setVisible(false);
        iTunesTableView.setVisible(false);
        favoritedTableView.setVisible(true);
        hypeMachineLabelView.setFont({
            fontSize: "16dp",
            fontWeight: "none"
        });
        iTunesLabelView.setFont({
            fontSize: "16dp",
            fontWeight: "none"
        });
        favouritesLabelView.setFont({
            fontSize: "16dp",
            fontWeight: "bold"
        });
    };
    hypeMachineLabelView.addEventListener("singletap", function() {
        showHipster();
    });
    iTunesLabelView.addEventListener("singletap", function() {
        showMainstream();
    });
    favouritesLabelView.addEventListener("singletap", function() {
        showFavorites();
    });
    var navbar = Ti.UI.createView({
        backgroundColor: "#c0392b",
        height: "48dp",
        top: 0
    });
    navbar.add(hypeMachineLabelView);
    navbar.add(iTunesLabelView);
    navbar.add(favouritesLabelView);
    loadHypeMachineTracks();
    loadiTunesTracks();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
    function __alloyId22(e) {
        if (e && e.fromAdapter) return;
        __alloyId22.opts || {};
        var models = __alloyId21.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId8 = models[i];
            __alloyId8.__transform = {};
            var __alloyId10 = Ti.UI.createTableViewRow({
                url: "undefined" != typeof __alloyId8.__transform["url"] ? __alloyId8.__transform["url"] : __alloyId8.get("url")
            });
            rows.push(__alloyId10);
            openURL ? __alloyId10.addEventListener("click", openURL) : __defers["__alloyId10!click!openURL"] = true;
            var __alloyId12 = Ti.UI.createImageView({
                backgroundColor: "#000",
                color: "#FFF",
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                font: {
                    fontWeight: "bold"
                },
                opacity: .6,
                left: 0,
                top: 0,
                width: "64dp",
                height: "64dp",
                text: "index"
            });
            __alloyId10.add(__alloyId12);
            var __alloyId14 = Ti.UI.createImageView({
                width: "64dp",
                height: "64dp",
                left: 0,
                top: 0,
                image: "undefined" != typeof __alloyId8.__transform["thumbnail"] ? __alloyId8.__transform["thumbnail"] : __alloyId8.get("thumbnail")
            });
            __alloyId10.add(__alloyId14);
            var __alloyId16 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: "18dp",
                color: "#2c3e50",
                font: {
                    fontSize: "14sp"
                },
                horizontalWrap: false,
                textAlign: "left",
                top: "12dp",
                ellipsize: true,
                wordWrap: false,
                left: "80dp",
                right: "40dp",
                text: "undefined" != typeof __alloyId8.__transform["title"] ? __alloyId8.__transform["title"] : __alloyId8.get("title")
            });
            __alloyId10.add(__alloyId16);
            var __alloyId18 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: "16dp",
                color: "#7f8c8d",
                font: {
                    fontSize: "12sp"
                },
                horizontalWrap: false,
                wordWrap: false,
                ellipsize: true,
                textAlign: "left",
                top: "30dp",
                left: "80dp",
                text: "undefined" != typeof __alloyId8.__transform["artist"] ? __alloyId8.__transform["artist"] : __alloyId8.get("artist")
            });
            __alloyId10.add(__alloyId18);
            var __alloyId20 = Ti.UI.createImageView({
                width: "16dp",
                height: "16dp",
                right: "12dp",
                top: "14dp",
                title: "undefined" != typeof __alloyId8.__transform["title"] ? __alloyId8.__transform["title"] : __alloyId8.get("title"),
                image: "/images/toasted.png"
            });
            __alloyId10.add(__alloyId20);
            favoriteTrack ? __alloyId20.addEventListener("click", favoriteTrack) : __defers["__alloyId20!click!favoriteTrack"] = true;
        }
        $.__views.hipsterTracksTable.setData(rows);
    }
    function __alloyId38(e) {
        if (e && e.fromAdapter) return;
        __alloyId38.opts || {};
        var models = __alloyId37.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId24 = models[i];
            __alloyId24.__transform = {};
            var __alloyId26 = Ti.UI.createTableViewRow({
                url: "undefined" != typeof __alloyId24.__transform["url"] ? __alloyId24.__transform["url"] : __alloyId24.get("url")
            });
            rows.push(__alloyId26);
            openURL ? __alloyId26.addEventListener("click", openURL) : __defers["__alloyId26!click!openURL"] = true;
            var __alloyId28 = Ti.UI.createImageView({
                backgroundColor: "#000",
                color: "#FFF",
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                font: {
                    fontWeight: "bold"
                },
                opacity: .6,
                left: 0,
                top: 0,
                width: "64dp",
                height: "64dp",
                text: "index"
            });
            __alloyId26.add(__alloyId28);
            var __alloyId30 = Ti.UI.createImageView({
                width: "64dp",
                height: "64dp",
                left: 0,
                top: 0,
                image: "undefined" != typeof __alloyId24.__transform["thumbnail"] ? __alloyId24.__transform["thumbnail"] : __alloyId24.get("thumbnail")
            });
            __alloyId26.add(__alloyId30);
            var __alloyId32 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: "18dp",
                color: "#2c3e50",
                font: {
                    fontSize: "14sp"
                },
                horizontalWrap: false,
                textAlign: "left",
                top: "12dp",
                ellipsize: true,
                wordWrap: false,
                left: "80dp",
                right: "40dp",
                text: "undefined" != typeof __alloyId24.__transform["title"] ? __alloyId24.__transform["title"] : __alloyId24.get("title")
            });
            __alloyId26.add(__alloyId32);
            var __alloyId34 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: "16dp",
                color: "#7f8c8d",
                font: {
                    fontSize: "12sp"
                },
                horizontalWrap: false,
                wordWrap: false,
                ellipsize: true,
                textAlign: "left",
                top: "30dp",
                left: "80dp",
                text: "undefined" != typeof __alloyId24.__transform["artist"] ? __alloyId24.__transform["artist"] : __alloyId24.get("artist")
            });
            __alloyId26.add(__alloyId34);
            var __alloyId36 = Ti.UI.createImageView({
                width: "16dp",
                height: "16dp",
                right: "12dp",
                top: "14dp",
                title: "undefined" != typeof __alloyId24.__transform["title"] ? __alloyId24.__transform["title"] : __alloyId24.get("title"),
                image: "/images/toasted.png"
            });
            __alloyId26.add(__alloyId36);
            favoriteTrack ? __alloyId36.addEventListener("click", favoriteTrack) : __defers["__alloyId36!click!favoriteTrack"] = true;
        }
        $.__views.mainstreamTracksTable.setData(rows);
    }
    function __alloyId53(e) {
        if (e && e.fromAdapter) return;
        __alloyId53.opts || {};
        var models = __alloyId52.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId41 = models[i];
            __alloyId41.__transform = {};
            var __alloyId43 = Ti.UI.createTableViewRow({
                url: "undefined" != typeof __alloyId41.__transform["url"] ? __alloyId41.__transform["url"] : __alloyId41.get("url")
            });
            rows.push(__alloyId43);
            openURL ? __alloyId43.addEventListener("click", openURL) : __defers["__alloyId43!click!openURL"] = true;
            var __alloyId45 = Ti.UI.createImageView({
                width: "64dp",
                height: "64dp",
                left: 0,
                top: 0,
                image: "undefined" != typeof __alloyId41.__transform["thumbnail"] ? __alloyId41.__transform["thumbnail"] : __alloyId41.get("thumbnail")
            });
            __alloyId43.add(__alloyId45);
            var __alloyId47 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: "18dp",
                color: "#2c3e50",
                font: {
                    fontSize: "14sp"
                },
                horizontalWrap: false,
                textAlign: "left",
                top: "12dp",
                ellipsize: true,
                wordWrap: false,
                left: "80dp",
                right: "40dp",
                text: "undefined" != typeof __alloyId41.__transform["title"] ? __alloyId41.__transform["title"] : __alloyId41.get("title")
            });
            __alloyId43.add(__alloyId47);
            var __alloyId49 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: "16dp",
                color: "#7f8c8d",
                font: {
                    fontSize: "12sp"
                },
                horizontalWrap: false,
                wordWrap: false,
                ellipsize: true,
                textAlign: "left",
                top: "30dp",
                left: "80dp",
                text: "undefined" != typeof __alloyId41.__transform["artist"] ? __alloyId41.__transform["artist"] : __alloyId41.get("artist")
            });
            __alloyId43.add(__alloyId49);
            var __alloyId51 = Ti.UI.createImageView({
                width: "16dp",
                height: "16dp",
                right: "12dp",
                top: "14dp",
                title: "undefined" != typeof __alloyId41.__transform["title"] ? __alloyId41.__transform["title"] : __alloyId41.get("title"),
                image: "/images/toasted.png"
            });
            __alloyId43.add(__alloyId51);
            favoriteTrack ? __alloyId51.addEventListener("click", favoriteTrack) : __defers["__alloyId51!click!favoriteTrack"] = true;
        }
        $.__views.__alloyId40.setData(rows);
    }
    function __alloyId55() {
        $.__views.window.removeEventListener("open", __alloyId55);
        if ($.__views.window.activity) $.__views.window.activity.onCreateOptionsMenu = function(e) {
            var __alloyId54 = {
                id: "menuItemRefresh",
                title: "Refresh",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.menuItemRefresh = e.menu.add(_.pick(__alloyId54, Alloy.Android.menuItemCreateArgs));
            $.__views.menuItemRefresh.applyProperties(_.omit(__alloyId54, Alloy.Android.menuItemCreateArgs));
            refresh ? $.__views.menuItemRefresh.addEventListener("click", refresh) : __defers["$.__views.menuItemRefresh!click!refresh"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function loadHypeMachineTracks() {
        Alloy.Globals.pullHypeMachineTracks({
            success: function(tracks) {
                hypeMachineTableView = createTracksTableView(tracks);
                hypeMachineTableView.setVisible(true);
                $.windowHipster.add(hypeMachineTableView);
            }
        });
    }
    function loadiTunesTracks() {
        Alloy.Globals.pulliTunesTracks({
            success: function(tracks) {
                iTunesTableView = createTracksTableView(tracks);
                iTunesTableView.setVisible(true);
                $.windowMainstream.add(iTunesTableView);
            }
        });
    }
    function refresh() {
        loadHypeMachineTracks();
        loadiTunesTracks();
        Alloy.Collections.favoriteTracks.fetch();
    }
    function favoriteTrack(e) {
        var track = Alloy.Collections.favoriteTracks.where({
            title: e.source.title
        })[0];
        if (e.source.getImage().indexOf("not_toasted") > -1) {
            e.source.setImage("/images/toasted.png");
            Alloy.Collections.favoriteTracks.add(track);
            track.save();
        } else {
            e.source.setImage("/images/not_toasted.png");
            Alloy.Collections.favoriteTracks.remove(track);
            track.destroy();
        }
        refresh();
        e.cancelBubble = true;
    }
    function openURL(e) {
        Titanium.Platform.openURL(e.rowData.url);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("favoriteTracks");
    Alloy.Collections.instance("hipsterTracks");
    Alloy.Collections.instance("mainstreamTracks");
    var __alloyId6 = [];
    $.__views.windowHipster = Ti.UI.createWindow({
        id: "windowHipster",
        title: "Hipster"
    });
    $.__views.hipsterTracksTable = Ti.UI.createTableView({
        id: "hipsterTracksTable"
    });
    $.__views.windowHipster.add($.__views.hipsterTracksTable);
    var __alloyId21 = Alloy.Collections["hipsterTracks"] || hipsterTracks;
    __alloyId21.on("fetch destroy change add remove reset", __alloyId22);
    $.__views.__alloyId7 = Ti.UI.createTab({
        window: $.__views.windowHipster,
        title: "Hipster",
        id: "__alloyId7"
    });
    __alloyId6.push($.__views.__alloyId7);
    $.__views.windowMainstream = Ti.UI.createWindow({
        id: "windowMainstream",
        title: "Mainstream"
    });
    $.__views.mainstreamTracksTable = Ti.UI.createTableView({
        id: "mainstreamTracksTable"
    });
    $.__views.windowMainstream.add($.__views.mainstreamTracksTable);
    var __alloyId37 = Alloy.Collections["mainstreamTracks"] || mainstreamTracks;
    __alloyId37.on("fetch destroy change add remove reset", __alloyId38);
    $.__views.__alloyId23 = Ti.UI.createTab({
        window: $.__views.windowMainstream,
        title: "Mainstream",
        id: "__alloyId23"
    });
    __alloyId6.push($.__views.__alloyId23);
    $.__views.windowFavorites = Ti.UI.createWindow({
        id: "windowFavorites",
        title: "Favorites"
    });
    $.__views.__alloyId40 = Ti.UI.createTableView({
        id: "__alloyId40"
    });
    $.__views.windowFavorites.add($.__views.__alloyId40);
    var __alloyId52 = Alloy.Collections["favoriteTracks"] || favoriteTracks;
    __alloyId52.on("fetch destroy change add remove reset", __alloyId53);
    $.__views.__alloyId39 = Ti.UI.createTab({
        window: $.__views.windowFavorites,
        title: "Favorites",
        id: "__alloyId39"
    });
    __alloyId6.push($.__views.__alloyId39);
    $.__views.window = Ti.UI.createTabGroup({
        tabs: __alloyId6,
        id: "window",
        title: "JamJar"
    });
    $.__views.window.addEventListener("open", __alloyId55);
    $.__views.window && $.addTopLevelView($.__views.window);
    exports.destroy = function() {
        __alloyId21.off("fetch destroy change add remove reset", __alloyId22);
        __alloyId37.off("fetch destroy change add remove reset", __alloyId38);
        __alloyId52.off("fetch destroy change add remove reset", __alloyId53);
    };
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
                if (false || true && e.source instanceof Titanium.UI.ImageView) if (e.source.getImage().indexOf("not_toasted") > -1) {
                    e.source.setImage("/images/toasted.png");
                    var track = Alloy.createModel("favoriteTracks", {
                        title: e.rowData.tracktitle,
                        artist: e.rowData.artist,
                        thumbnail: e.rowData.thumbnail,
                        url: e.rowData.url
                    });
                    Alloy.Collections.favoriteTracks.add(track);
                    track.save();
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
    Ti.UI.createTableView();
    var trackFavorited = function(title, artist) {
        var db = Ti.Database.open("JamJarDB");
        var favoritedRS = db.execute("SELECT * from tracks WHERE title = ? AND artist = ?", title, artist);
        var exists = favoritedRS.isValidRow();
        favoritedRS.close();
        db.close();
        return exists;
    };
    $.window.addEventListener("open", function() {
        if (Alloy.Globals.isAndroid) {
            var actionBar = $.window.activity.actionBar;
            actionBar.title = "JamJar";
        }
        refresh();
    });
    $.window.open();
    __defers["__alloyId10!click!openURL"] && __alloyId10.addEventListener("click", openURL);
    __defers["__alloyId20!click!favoriteTrack"] && __alloyId20.addEventListener("click", favoriteTrack);
    __defers["__alloyId26!click!openURL"] && __alloyId26.addEventListener("click", openURL);
    __defers["__alloyId36!click!favoriteTrack"] && __alloyId36.addEventListener("click", favoriteTrack);
    __defers["__alloyId43!click!openURL"] && __alloyId43.addEventListener("click", openURL);
    __defers["__alloyId51!click!favoriteTrack"] && __alloyId51.addEventListener("click", favoriteTrack);
    __defers["$.__views.menuItemRefresh!click!refresh"] && $.__views.menuItemRefresh.addEventListener("click", refresh);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
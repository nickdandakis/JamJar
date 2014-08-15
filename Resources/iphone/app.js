var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var db = Ti.Database.open("JamJarDB");

db.execute("CREATE TABLE IF NOT EXISTS tracks(id INTEGER PRIMARY KEY, title TEXT, artist TEXT, thumbnail TEXT, url TEXT);");

db.close();

Alloy.Globals.isAndroid = "android" == Ti.Platform.osname ? true : false;

Alloy.Globals.isiOS = "iphone" == Ti.Platform.osname ? true : false;

Alloy.createController("index");
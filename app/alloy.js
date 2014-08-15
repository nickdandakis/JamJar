// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// var db = Ti.Database.open('JamJarDB');
// db.execute('CREATE TABLE IF NOT EXISTS tracks(id INTEGER PRIMARY KEY, title TEXT, artist TEXT, thumbnail TEXT, url TEXT);');
// db.file.setRemoteBackup(false);
// db.close();

Alloy.Globals.isAndroid = ((Ti.Platform.osname == 'android') ? true : false);
Alloy.Globals.isiOS = ((Ti.Platform.osname == 'iphone') ? true : false);
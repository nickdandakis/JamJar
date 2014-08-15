require('rss');

var createTracksTableView = function(tracks, areFavorites){
	var tableData = [];
	
	for(var i=0; i<tracks.length; i++){
		var row = Titanium.UI.createTableViewRow({
			index: i+1,
			thumbnail: tracks[i].thumbnail,
			tracktitle: tracks[i].title, // used to be title, but iOS complained
			artist: tracks[i].artist,
			url: tracks[i].url
		});
		
		if(areFavorites == undefined){
			var indexLabelView = Titanium.UI.createLabel({
				backgroundColor: '#000',
				color: '#FFF',
				textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
				font: {
					fontSize: (i==99 ? '30sp' : '48sp'),
					fontWeight: 'bold'
				},
				opacity: 0.6,
				text: row.index,
				left: 0,
				top: 0,
				width: '64dp',
				height: '64dp'
			});
		}
		
		var thumbnailImageView = Titanium.UI.createImageView({
			image: row.thumbnail,
			width: '64dp',
			height: '64dp',
			left: 0,
			top: 0
		});
					 
		var titleLabelView = Titanium.UI.createLabel({ 
			text: row.tracktitle,
			color: '#2c3e50',
			font: {fontSize:'14sp'},
			height: '18dp',
			width: Ti.UI.FILL,
			horizontalWrap: false,
			textAlign: 'left',
			top: '12dp',
			ellipsize: true,
			wordWrap: false,
			left: '80dp',
			right: '40dp'
		});
		
		var artistLabelView = Titanium.UI.createLabel({
			text: row.artist,
			color: '#7f8c8d',
			font: {fontSize:'12sp'},
			height: '16dp',
			width: Ti.UI.FILL,
			horizontalWrap: false,
			wordWrap: false,
			ellipsize: true,
			textAlign: 'left',
			top: '30dp',
			left: '80dp'
		});
		
		var toastImageView = Titanium.UI.createImageView({
			image: (areFavorites == undefined && !trackFavorited(row.tracktitle, row.artist) ? '/images/not_toasted.png' : '/images/toasted.png'),
			width: '16dp',
			height: '16dp',
			right: '12dp',
			top: '14dp'
		});
		
		row.addEventListener('singletap', function(e){
			if((Ti.Platform.osname == 'iphone') && (e.source.valueOf().indexOf('[object TiUIImageView]') > -1) ||
				(Ti.Platform.osname == 'android') && (e.source instanceof Titanium.UI.ImageView))
				if(e.source.getImage().indexOf('not_toasted') > -1){
					e.source.setImage('/images/toasted.png');
					var track = Alloy.createModel('favoriteTracks', {
						title: e.rowData.tracktitle,
						artist: e.rowData.artist,
						thumbnail: e.rowData.thumbnail,
						url: e.rowData.url
					});
					Alloy.Collections.favoriteTracks.add(track);
					track.save();
				}
				else if(e.source.getImage().indexOf('toasted') > -1){
					e.source.setImage('/images/not_toasted.png');		
					var db = Ti.Database.open('JamJarDB');	
					db.execute('DELETE FROM tracks WHERE title=? AND artist = ?', e.rowData.tracktitle, e.rowData.artist);
					db.close();
				} else
					Ti.Platform.openURL(e.rowData.url);
			else	
				Ti.Platform.openURL(e.rowData.url);
		});
		
		row.add(thumbnailImageView);
		if(areFavorites == undefined)
			row.add(indexLabelView);
		row.add(titleLabelView);
		row.add(artistLabelView);
		row.add(toastImageView);
		row.className = "TrackRow";
		row.hasChild = false;
		row.backgroundColor = (i%2 ? '#FFF' : '#ecf0f1');
		
		tableData.push(row);
	}
	
	var table = Ti.UI.createTableView({
		data : tableData
		// bottom: '48dp'
	});
	
	return table;
};

var hypeMachineTableView = Ti.UI.createTableView();
var iTunesTableView = Ti.UI.createTableView();
var favoritedTableView = Ti.UI.createTableView();

var trackFavorited = function(title, artist){
	var db = Ti.Database.open('JamJarDB');
	var favoritedRS = db.execute('SELECT * from tracks WHERE title = ? AND artist = ?', title, artist);
	var exists = favoritedRS.isValidRow();
	favoritedRS.close();
	db.close();
	return exists;
};

function loadHypeMachineTracks(){
	Alloy.Globals.pullHypeMachineTracks({
		success : function(tracks){
			hypeMachineTableView = createTracksTableView(tracks);
			hypeMachineTableView.setVisible(true);
			$.windowHipster.add(hypeMachineTableView);
		}
	}); 
};

function loadiTunesTracks(){
	Alloy.Globals.pulliTunesTracks({
		success : function(tracks){
			iTunesTableView = createTracksTableView(tracks);
			iTunesTableView.setVisible(true);
			$.windowMainstream.add(iTunesTableView);
		}
	});
};

function refresh(){
	loadHypeMachineTracks();
	loadiTunesTracks();
	Alloy.Collections.favoriteTracks.fetch();
};

function favoriteTrack(e){
	var track = Alloy.Collections.favoriteTracks.where({title: e.source.title})[0];
	
	if(e.source.getImage().indexOf('not_toasted') > -1){
		e.source.setImage('/images/toasted.png');
		Alloy.Collections.favoriteTracks.add(track);
		track.save();
	} else {
		e.source.setImage('/images/not_toasted.png');
		Alloy.Collections.favoriteTracks.remove(track);
		track.destroy();
	}
	
	refresh();
	e.cancelBubble = true;
}

function openURL(e){
	Titanium.Platform.openURL(e.rowData.url);
}

$.window.addEventListener('open', function(){
	if(Alloy.Globals.isAndroid){
		var actionBar = $.window.activity.actionBar;
		actionBar.title = 'JamJar';
	}
	
	refresh();
});

$.window.open();
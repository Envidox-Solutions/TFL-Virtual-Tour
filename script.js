(function(){
    var script = {
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "defaultVRPointer": "laser",
 "contentOpaque": false,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Image_DEF11F7B_CA48_E688_41E8_A70F29C19D33"
 ],
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": "100%",
 "scripts": {
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "unregisterKey": function(key){  delete window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); }
 },
 "paddingRight": 0,
 "downloadEnabled": false,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "paddingLeft": 0,
 "class": "Player",
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "height": "100%",
 "borderSize": 0,
 "overflow": "visible",
 "definitions": [{
 "overlays": [
  "this.overlay_DADE2A61_CAB1_1299_41BF_CE46CA3E36D6",
  "this.overlay_DA8FC657_CAB1_32B8_41E4_47B0622A375F"
 ],
 "label": "IMG_20230801_113448_00_017_PureShot",
 "id": "panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C",
 "class": "Panorama",
 "partial": false,
 "thumbnailUrl": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.96,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F1F6E347_CAD8_3EF9_41C9_925CFEA9CDEF",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.4,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F183333A_CAD8_3E8B_41E3_A11828B077FF",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.05,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8617677_CAD8_2699_41E8_B7A26C01FBE0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.37,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F195A31E_CAD8_3E88_41DE_1368205BDA81",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 103.57,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F6B70408_CAD8_3A88_41E7_77C4734CED43",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.86,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8FAB587_CAD8_3A78_41E5_3D5838E29876",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.32,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F896E53D_CAD8_3A89_41D8_637910E09823",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_173548_00_062_PureShot-2",
 "id": "panorama_DC174442_C65D_D0EC_41C5_1275482D010D",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 74.63,
   "panorama": "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321",
   "backwardYaw": -0.17,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 11.22,
   "panorama": "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1",
   "backwardYaw": -179.13,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -179.68,
   "panorama": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83",
   "backwardYaw": -54.01,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E24F6CFD_C67C_F194_41E5_447469BE970F",
  "this.overlay_E5A7F7D9_C674_DF9C_41DF_D450C967BDBB",
  "this.overlay_E351F1C3_C677_F3F3_41E7_289FB4A5FF11",
  "this.overlay_D9D3D829_C675_50BF_41E0_9E863ABB5C68"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -52.19,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F964F7F9_CAD8_2589_41B7_DDC0E80602B1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.94,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9E5674A_CAD8_268B_41E1_2C57EF8E3777",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.53,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8D655B4_CAD8_2598_41E4_AA008CEFA0F1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.71,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9BC36BB_CAD8_2789_41B5_5D9AFD24A377",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_140617_00_032_PureShot",
 "id": "panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -0.04,
   "panorama": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9",
   "backwardYaw": 179.67,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.79,
   "panorama": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C",
   "backwardYaw": -2.16,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DF0B74E5_C637_71B7_41E1_DCB3E7439DCD",
  "this.overlay_DFAF42B6_C637_F194_41C3_0B28B13C9F85"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_163500_00_052_PureShot",
 "id": "panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -165.5,
   "panorama": "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3",
   "backwardYaw": -0.31,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 141.29,
   "panorama": "this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4",
   "backwardYaw": 130.24,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 1.61,
   "panorama": "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1",
   "backwardYaw": 179.52,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D0E8D0BB_C5D5_519C_41CD_A68B454E5700",
  "this.overlay_D080C993_C5D5_5393_41CE_A5FFA2FBF663",
  "this.overlay_D3257D6B_C5D5_50BC_41E3_044D682AB07D",
  "this.overlay_D8AA269E_CAB1_73A8_41D0_31CCDC898B26",
  "this.overlay_D9610BF6_CAB1_3178_41E1_74328612EDCA",
  "this.overlay_D8C5B8CF_CAB7_1FA8_41E2_9284A0EE7C43"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_112132_00_013_PureShot",
 "id": "panorama_CFD38984_C435_02EB_41E4_829FA71604B8",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 116.79,
   "panorama": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601",
   "backwardYaw": 121.97,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CB8A82E3_C5FB_51B3_41C6_E20F80FCA079",
  "this.overlay_CB84D256_C5FC_D094_41E1_300D66E39197",
  "this.overlay_CB70A0FA_C5FD_D19D_41E5_794F9BF2E23A",
  "this.overlay_CAC49611_C5FD_D06C_41CA_1C64E2486482",
  "this.overlay_CACA6C60_C5FC_F0AD_41D2_52CA01423DB7",
  "this.overlay_CB4F1410_C5FF_706D_41D9_2402158FF94C",
  "this.overlay_CB7DF849_C5FF_30FC_41AD_28A023C5518D",
  "this.overlay_D8CBDAB7_CA91_13F9_419A_F1FE3AD87731",
  "this.overlay_DE7C4112_CA93_EEB8_41E0_A9FC2D493898"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.37,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F19FC32C_CAD8_3E8F_41E7_E5F58745C4B4",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.61,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F6877438_CAD8_3A88_41E8_0BC43598F6F0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.98,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8A9A530_CAD8_3A97_41E2_6977D3E16D2F",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977",
   "camera": "this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817",
   "camera": "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F",
   "camera": "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064",
   "camera": "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE",
   "camera": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9",
   "camera": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601",
   "camera": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8",
   "camera": "this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607",
   "camera": "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247",
   "camera": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4",
   "camera": "this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C",
   "camera": "this.panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314",
   "camera": "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B",
   "camera": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332",
   "camera": "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3",
   "camera": "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF",
   "camera": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4",
   "camera": "this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1",
   "camera": "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704",
   "camera": "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C",
   "camera": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442",
   "camera": "this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C",
   "camera": "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9",
   "camera": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD",
   "camera": "this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0",
   "camera": "this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF",
   "camera": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67",
   "camera": "this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83",
   "camera": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE",
   "camera": "this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D",
   "camera": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321",
   "camera": "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1",
   "camera": "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B",
   "camera": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D",
   "camera": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4",
   "camera": "this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462",
   "camera": "this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D",
   "camera": "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6",
   "camera": "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.33,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F692142C_CAD8_3A88_41DF_7D758A217CAE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.24,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9C56783_CAD8_2678_41DA_BAB6A37F67C4",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF62C332_C435_062F_41D5_817A78857EF1_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.67,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F92F27B8_CAD8_2597_41DE_0574E9E2BC7A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.28,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F1C7F37A_CAD8_3E88_41D3_70903E0CC304",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -63.21,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F16B83E4_CAD8_3DB8_41D2_D561C06251A7",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -105.37,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F6AF1420_CAD8_3AB8_41B8_F2FC3C1FA83C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_145605_00_041_PureShot",
 "id": "panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -143.35,
   "panorama": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF",
   "backwardYaw": 0.79,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 19.6,
   "panorama": "this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE",
   "backwardYaw": 176.02,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -54.01,
   "panorama": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D",
   "backwardYaw": -179.68,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E5AAF0D4_C677_3195_41CB_037D0FA5DEF0",
  "this.overlay_D892AA56_C677_3094_41D3_6C596A5B9479",
  "this.overlay_D81A734A_C675_50FD_41CE_B36A0867E1AF",
  "this.overlay_C59117C7_CA58_65F8_41DB_DE23BA91CD5D"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.38,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F91217C5_CAD8_25F9_41B5_C4D9D0EA4777",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 36.65,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F802D64C_CAD8_268F_41E8_5C2D7BEF874C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -58.03,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F1A20311_CAD8_3E99_41DD_CF3812CE9BFA",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.91,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F874B659_CAD8_2689_41C5_E45AF8A5B3AA",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -160.4,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9C85790_CAD8_2598_41AC_ABB09B85B224",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.67,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8DE55C1_CAD8_25F8_41E5_123BBF72A3BA",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.37,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F824B60A_CAD8_2688_41E7_5D52E7653397",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_112756_00_015_PureShot",
 "id": "panorama_CF687FF7_C435_3E15_41B2_E3B73716D247",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 123.37,
   "panorama": "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607",
   "backwardYaw": -7.72,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -75.33,
   "panorama": "this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4",
   "backwardYaw": 179.65,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 14.93,
   "panorama": "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314",
   "backwardYaw": 179.52,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D5E79D01_C5F7_306C_41C1_C6928652C747",
  "this.overlay_D586E657_C5F7_7093_41C5_C25AA509907C",
  "this.overlay_D4B9B866_C5F4_F0B5_41E5_D0B148AAA420",
  "this.overlay_D915FB5F_CA91_32A8_41B6_69CE2618FE20",
  "this.overlay_D9543B5F_CAF1_72A9_41E4_A0A67E4E7FAE"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.65,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9AA76EA_CAD8_2788_41C4_473CD166305A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 125.99,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F847569D_CAD8_2788_41CC_58B448A5F01D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_145258_00_039_PureShot",
 "id": "panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 94.18,
   "panorama": "this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67",
   "backwardYaw": -86.52,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 0.79,
   "panorama": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83",
   "backwardYaw": -143.35,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -179.76,
   "panorama": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B",
   "backwardYaw": 39.09,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DD136A62_C66C_F0AD_41D1_1AF2091F4CFD",
  "this.overlay_E6D7447B_C66C_D093_41E3_19152E460DB3",
  "this.overlay_E75D9960_C66D_D0AD_41D7_2F3E1DF1C035",
  "this.overlay_DAC24EC6_CA59_E7F8_41DD_4FCB683FA55A"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -62.39,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8CDD5DB_CAD8_2588_41E5_666C9AA5F727",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "168%",
 "label": "IMG_20230801_175155_00_065_PureShot",
 "id": "panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -63.18,
   "panorama": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D",
   "backwardYaw": 138.61,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -166.48,
   "panorama": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE",
   "backwardYaw": -1.41,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 14.38,
   "panorama": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601",
   "backwardYaw": -10.74,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DDFA44E3_C5D6_7A80_41DE_D4FE962F2B14",
  "this.overlay_DC6FFBB5_C5D6_CE80_41E5_DEE5D9EDF290",
  "this.overlay_E0C5C8B6_C654_F195_41E7_213F65F9B907",
  "this.overlay_E38715F4_C6F5_5394_41D2_CC2656509E7A",
  "this.overlay_D8F3B9D7_CA91_71B9_41CB_38E9343A43EF"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.59,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F82AD627_CAD8_26B9_41E6_508DE356617F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "150%",
 "label": "3",
 "id": "panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -111.04,
   "panorama": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B",
   "backwardYaw": 80.06,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D3973503_CAB8_DA79_41DE_212207A15BD9",
  "this.overlay_D2382EA3_CAB9_E7B8_41E3_4E45EAAB805B"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.87,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F85ED690_CAD8_2798_41D5_1DBDC95636EF",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.62,
  "hfov": 120,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F14393FC_CAD8_3D88_41CC_86BB826CAE4B",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_163639_00_053_PureShot",
 "id": "panorama_D0F27392_C62B_506C_41A8_D96417AA39E4",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 130.24,
   "panorama": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF",
   "backwardYaw": 141.29,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D9385F48_CAF1_1297_41D3_9ACA81EECE15"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_150901_00_045_PureShot",
 "id": "panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 30.92,
   "panorama": "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321",
   "backwardYaw": 179.65,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.67,
   "panorama": "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064",
   "backwardYaw": 91.04,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -1.41,
   "panorama": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9",
   "backwardYaw": -166.48,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D3A4C228_C44E_7981_41DD_762A27934F8F",
  "this.overlay_DD7F5046_C5DE_3981_41E2_E4FF1B83BEF5",
  "this.overlay_E39FD859_C6F5_309C_41D3_ED6C01FFEC8B",
  "this.overlay_D9723675_CA93_3379_41E4_2D3F31042996",
  "this.overlay_DEA60039_CA93_2EE8_41B6_F66EA2D57003"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_115749_00_021_PureShot",
 "id": "panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 11.63,
   "panorama": "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3",
   "backwardYaw": 178.14,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -165.49,
   "panorama": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B",
   "backwardYaw": -2.06,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D6BB1411_C5D5_F06F_41DC_84076632C3EF",
  "this.overlay_D6E52BED_C5D5_37B4_41D9_494B45F8A23D",
  "this.overlay_D66349BF_C5D4_F394_41DF_5AE50A536EB6",
  "this.overlay_D622017D_C5DC_D097_41E4_E3A846F99AB8",
  "this.overlay_D957D4FF_CAF3_1769_41D4_5E26E11B789C"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.96,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8836561_CAD8_3AB8_41AD_949A5D9B14A9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.96,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F1FB8355_CAD8_3E99_41C2_37B7976BB8E0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.35,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F10E73C0_CAD8_3DF8_41D0_4524CC4F2551",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_112507_00_014_PureShot",
 "id": "panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -7.72,
   "panorama": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247",
   "backwardYaw": 123.37,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 172.1,
   "panorama": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601",
   "backwardYaw": 167.95,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CA91C2AD_C5F5_D1B4_41E7_439AA1B5E666",
  "this.overlay_D5CFE8BA_C5F5_719C_41E5_0AF30E6740E3"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -41.39,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8237618_CAD8_2688_41E0_22B12DE16462",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977",
   "camera": "this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817",
   "camera": "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F",
   "camera": "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064",
   "camera": "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE",
   "camera": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9",
   "camera": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601",
   "camera": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8",
   "camera": "this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607",
   "camera": "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247",
   "camera": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4",
   "camera": "this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C",
   "camera": "this.panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314",
   "camera": "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B",
   "camera": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332",
   "camera": "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3",
   "camera": "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF",
   "camera": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4",
   "camera": "this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1",
   "camera": "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704",
   "camera": "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C",
   "camera": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442",
   "camera": "this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C",
   "camera": "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9",
   "camera": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD",
   "camera": "this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0",
   "camera": "this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF",
   "camera": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67",
   "camera": "this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83",
   "camera": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE",
   "camera": "this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D",
   "camera": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321",
   "camera": "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1",
   "camera": "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B",
   "camera": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D",
   "camera": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4",
   "camera": "this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462",
   "camera": "this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D",
   "camera": "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "1",
 "id": "panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -9.39,
   "panorama": "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817",
   "backwardYaw": 175.33,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CB6011AA_C436_DA81_41DC_2326D73B2D16",
  "this.overlay_E16A4BAC_C66D_37B5_41C1_23B57863A2DF",
  "this.overlay_D860A25F_CAAF_12A8_41E6_7CA000364B90"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.08,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F88B156D_CAD8_3A88_41DD_9E582095B2E2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -57.45,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F99C26FF_CAD8_2788_41DC_82E73A25223B",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_121754_00_028_PureShot",
 "id": "panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 179.72,
   "panorama": "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704",
   "backwardYaw": -13.35,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -76.43,
   "panorama": "this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442",
   "backwardYaw": 122.55,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -2.16,
   "panorama": "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C",
   "backwardYaw": 179.79,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DE2227C7_C62D_5FF4_41D5_2B2249C01E97",
  "this.overlay_DEAF18EE_C62C_D1B5_41DE_619D024C0BE8",
  "this.overlay_D9B3E507_CAF1_3699_41E1_EE02EDD6EBAD",
  "this.overlay_D9E2AC60_CAF1_3697_41E7_7B20151EE8E1",
  "this.overlay_DE3DB2E9_CAEF_1368_41E3_E9BE5DE34163",
  "this.overlay_DE1BDDB8_CA91_11E8_41D3_A28B17451055"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "hfov": 120,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.08,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F6BB9414_CAD8_3A98_41D4_A38639127FA9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.82,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9A756D5_CAD8_2799_41C6_63EF69FFE1D5",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F1CA0386_CAD8_3E7B_41E8_681F98E6752D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_EE98C877_C655_7093_41D0_4977209804A9_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.26,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F812E633_CAD8_2699_417F_584B2B1228A1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.63,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F87E6668_CAD8_26B7_41E6_25164B3AD5D5",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.61,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8B8250C_CAD8_3A88_41DD_D688549C04EE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.28,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8849555_CAD8_3A98_41CF_867138094A5E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.39,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8A6D518_CAD8_3A97_41E0_2D6014BF2780",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.33,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F989B721_CAD8_26B8_41D9_9840DCF62BE9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "2 (3)-2",
 "id": "panorama_CF9C0A5C_C437_061B_41DC_4726402C8817",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 175.33,
   "panorama": "this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977",
   "backwardYaw": -9.39,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.47,
   "panorama": "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F",
   "backwardYaw": -173.55,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CB8357AD_C433_C680_41DF_DE3D9CB1F3FB",
  "this.overlay_D41039E8_C432_4A80_41E8_27A322EFFCBD",
  "this.overlay_D89F66B8_CA91_13F7_41B4_5511E01A293D",
  "this.overlay_D9212706_CA93_329B_41D9_72B174FDE825"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.69,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F90507D2_CAD8_259B_41D6_73AB5B6B6701",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_121258_00_025_PureShot",
 "id": "panorama_CF62C332_C435_062F_41D5_817A78857EF1",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1,
   "panorama": "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704",
   "backwardYaw": 170.39,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.52,
   "panorama": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF",
   "backwardYaw": 1.61,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D1179F93_C62D_506C_41BC_D72BE5AF44AC",
  "this.overlay_D19734E3_C62D_D1B3_41E5_F870D1090109",
  "this.overlay_D95F0B6E_CAF1_7168_41E0_D13BE855F57B"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_151253_00_046_PureShot",
 "id": "panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 117.61,
   "panorama": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D",
   "backwardYaw": -88.39,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E2C608DA_C655_319C_41E7_56D7F2ACE9D1",
  "this.overlay_E5AA5CE9_C655_51BF_41E0_8DBBB6596FF4",
  "this.overlay_DAD64927_CA48_EAB8_41E3_663D816CB2C7",
  "this.overlay_DB992F6D_CA48_E68B_41E5_913D45949674",
  "this.overlay_DB9D91A7_CA48_FDB8_4198_764EAC5F6930",
  "this.overlay_DBC2858F_CA48_6589_41C2_CE659C63CB15",
  "this.overlay_D81A9B4F_CA48_2E89_41E0_C551DF4C0E16"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 63.24,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8C645CE_CAD8_2588_41D6_489569D12AF1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.35,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F122E39D_CAD8_3D89_41CA_7D37CC98A0B2",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_173151_00_061_PureShot-2",
 "id": "panorama_DC2CA898_C65D_319C_41E0_7EC16026556B",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 44.62,
   "panorama": "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D",
   "backwardYaw": 171.63,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -63.33,
   "panorama": "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D",
   "backwardYaw": 171.63,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 173.72,
   "panorama": "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1",
   "backwardYaw": 3.6,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 80.06,
   "panorama": "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6",
   "backwardYaw": -111.04,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -97.72,
   "panorama": "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6",
   "backwardYaw": -111.04,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E0D462AE_C66C_D1B4_41D2_91765E457576",
  "this.overlay_E18B8299_C66C_D19C_41CD_A7FDF6DAC855",
  "this.overlay_E35BA5EC_C66F_73B5_41D5_73E146DD9516",
  "this.overlay_E6E15816_C66C_F095_41E1_661D238FE9D4",
  "this.overlay_E6E28F40_C66D_50EC_41D6_45284A185E4E",
  "this.overlay_E3F7223A_C66D_509C_41E8_A846B08DAB4F",
  "this.overlay_F8C24246_CAC8_DEF8_41DE_D128D843D301"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_t.jpg",
 "hfov": 360
},
{
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "touchControlMode": "drag_rotation"
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_150429_00_044_PureShot",
 "id": "panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 121.97,
   "panorama": "this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8",
   "backwardYaw": 116.79,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 167.95,
   "panorama": "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607",
   "backwardYaw": 172.1,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -10.74,
   "panorama": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9",
   "backwardYaw": 14.38,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DB3E406D_C452_6C12_4190_C8A116F0EF72",
  "this.overlay_DE30B1F6_C456_2FFF_41E6_64662190C7D2",
  "this.overlay_DF3705DB_C452_D436_41BD_0FAA6EBC6AE7",
  "this.overlay_DABE427D_C44E_6CED_41D3_0B455923880A",
  "this.overlay_D8CFA2B0_CA90_F3F7_419E_81D617C1060C"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.83,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F86BE683_CAD8_2678_41E1_2AE3C169057D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.48,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F97237EC_CAD8_258F_41E5_668C331D49A1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.84,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9FC873C_CAD8_2689_41E0_A4E237406EDE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.78,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F89D0549_CAD8_3A89_41CA_5B85A2886BD8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 108.51,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8E8C5A0_CAD8_25B8_41D5_BF61BA1FA9B2",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "150%",
 "label": "1",
 "id": "panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 171.63,
   "panorama": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B",
   "backwardYaw": 44.62,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DDC98D77_CA48_2A98_41E5_0E5B81EDA90A",
  "this.overlay_D27DE70F_CA48_2688_41C9_92515E275248",
  "this.overlay_DD9B8D53_CA48_2A98_41CD_A2BF3A5714AE"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_145825_00_042_PureShot",
 "id": "panorama_DD14356E_C65D_30B5_41D1_41E6217914AE",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 176.02,
   "panorama": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83",
   "backwardYaw": 19.6,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E6C8BF34_C674_F094_41C4_CFF1889D8182"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.96,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F17373CC_CAD8_3D88_41E2_C5C120CEF9AE",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_175519_00_068_PureShot-2",
 "id": "panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -116.76,
   "panorama": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D",
   "backwardYaw": -4.84,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C5A44F10_CA58_2698_41E1_0DBD439CD968",
  "this.overlay_DA23C4B8_CA48_5B88_41E3_09A416A65754"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.03,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8F2A57A_CAD8_3A88_41E5_50F430ECDAA7",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "3",
 "id": "panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 5.39,
   "panorama": "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064",
   "backwardYaw": -71.49,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -173.55,
   "panorama": "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817",
   "backwardYaw": -7.47,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D4A49EBB_C437_C680_41E1_B68F814B1BB8",
  "this.overlay_D5A122AD_C43E_5E80_41E7_6626B48DD882",
  "this.overlay_E326C509_C6FD_D07C_41E3_7F91D1A89040",
  "this.overlay_EEF39452_C6FB_50ED_41E3_7D60CAAA6402",
  "this.overlay_EB8C5BCA_C6F4_D7FD_41D9_1AD0799FAA27",
  "this.overlay_D86A13B0_CAB3_11F7_41E6_2DFEE1C2F144",
  "this.overlay_D8C5EC3B_CAB1_F6E9_41E3_CB3F5666CB6D"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_175306_00_067_PureShot-2",
 "id": "panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -4.84,
   "panorama": "this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4",
   "backwardYaw": -116.76,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -88.39,
   "panorama": "this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462",
   "backwardYaw": 117.61,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 138.61,
   "panorama": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9",
   "backwardYaw": -63.18,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EE0332B6_C65F_3194_41B3_8BB1236F889C",
  "this.overlay_E4BC5987_C65D_D073_41C4_DDEE81D66B8C",
  "this.overlay_E1A9B6FE_C65C_D195_41DB_4EAE575F7582",
  "this.overlay_C5B7E396_CA58_5D9B_41E4_F8B9719F344E",
  "this.overlay_DA43B10D_CA58_FA88_41E8_5ECE69EE7108",
  "this.overlay_DA4139CE_CA58_2D88_41B0_BA47DB4A622E"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.61,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F84BB6AD_CAD8_2789_41C3_342ECAF73E0C",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_113037_00_016_PureShot",
 "id": "panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.65,
   "panorama": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247",
   "backwardYaw": -75.33,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C58C6030_CA93_2EF7_41DC_E56BD42D75AF",
  "this.overlay_DA60FE78_CA93_3377_41E3_2C2758E527C8"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_140902_00_033",
 "id": "panorama_EE98C877_C655_7093_41D0_4977209804A9",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 179.67,
   "panorama": "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C",
   "backwardYaw": -0.04,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -105.12,
   "panorama": "this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD",
   "backwardYaw": 178.92,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 127.81,
   "panorama": "this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0",
   "backwardYaw": -101.97,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E060FE94_C62C_F195_41E3_35CB803DEB83",
  "this.overlay_EADB0E21_C62F_F0AC_41E7_320FDD794226",
  "this.overlay_EFD731BD_C65C_F394_41DD_33F7998D0021",
  "this.overlay_E136DEB8_C65D_719C_41E0_181CFA5E3ED5",
  "this.overlay_EDF7B65C_C65B_D094_41C6_EE336E05D8F4",
  "this.overlay_C5FDE501_CA57_FA79_41E5_69297C70C4BC",
  "this.overlay_FAFF2E02_CAC9_E678_41DC_6313A9651172"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.21,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8A24524_CAD8_3ABF_41DE_78C33CF9989B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.5,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F83CB5F4_CAD8_2598_41C8_9AE3902FC124",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_145412_00_040_PureShot",
 "id": "panorama_D94D78C1_C65D_F1EF_41C5_921930906B67",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -86.52,
   "panorama": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF",
   "backwardYaw": 94.18,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D85E439B_C66B_379C_41DF_3E29FFFDE65C",
  "this.overlay_DAB574A5_C674_D1B7_41D7_4E7E2DA77829"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_162109_00_051_PureShot",
 "id": "panorama_DF268CDD_C63C_D197_41E4_62400CB177AD",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 178.92,
   "panorama": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9",
   "backwardYaw": -105.12,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EAF2328B_C65B_5073_41E7_687DEC956963",
  "this.overlay_EDE952C4_C65B_F1F5_41E3_945EC7F28645",
  "this.overlay_EC76C5D0_C65B_33ED_41D9_650846E4A403",
  "this.overlay_EE6A5C23_C65D_50B3_41E0_7AB003B9E8CF",
  "this.overlay_EBC74C5A_C66D_309C_41D5_012CB9240397"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_120837_00_023_PureShot",
 "id": "panorama_CF7E98D1_C435_026D_41C1_664EA10986C3",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -0.31,
   "panorama": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF",
   "backwardYaw": -165.5,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 178.14,
   "panorama": "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332",
   "backwardYaw": 11.63,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D62DBF76_C5DD_5094_41E5_4DF0AD5078C7",
  "this.overlay_D1B51457_C5DD_D094_41D5_5277586F8044",
  "this.overlay_E1166DD1_C6EF_73EF_41E8_B5A50537FC63",
  "this.overlay_D9356226_CAF1_1298_41DE_F62B7B858803"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.45,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F92567AB_CAD8_2589_41E3_7080404E352C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.21,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F987C713_CAD8_2698_41E7_1C2BB1D0EF38",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.94,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8E0D593_CAD8_2598_41E8_3C1D8F8B3373",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -49.76,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F90FC7DF_CAD8_2589_41E1_B7FDE168B43C",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_161824_00_050_PureShot",
 "id": "panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -101.97,
   "panorama": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9",
   "backwardYaw": 127.81,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D80FA5D0_CABF_31B8_41BC_91810CFFAC51",
  "this.overlay_DBD8F349_CABF_72A8_41D6_7BC74E690C0F"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_150115_00_043_PureShot",
 "id": "panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 179.65,
   "panorama": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE",
   "backwardYaw": 30.92,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.17,
   "panorama": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D",
   "backwardYaw": 74.63,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EED0D6D7_C66B_F194_41D5_CB50880608FB",
  "this.overlay_EE45E763_C66B_D0AC_41DF_7D31E6217050"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_140339_00_031_PureShot",
 "id": "panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 122.55,
   "panorama": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C",
   "backwardYaw": -76.43,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DE194FBE_CA90_F1E8_41DD_99FD2C3A0438",
  "this.overlay_DE720DBC_CA93_11EF_41B6_F9D7E8FF7F31",
  "this.overlay_DE34627C_CA93_736F_41B0_57EDE2C12EDB",
  "this.overlay_DEEA4EAD_CA93_33E9_41E7_7BF02C19FBF2"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.07,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F1D3A36F_CAD8_3E88_41DE_C8A1431CF2BE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.28,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F13FE392_CAD8_3D9B_41E2_09ED7E215D9B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.82,
  "hfov": 120,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F835E5E8_CAD8_2588_41D8_29299B68943F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_121518_00_026_PureShot",
 "id": "panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -13.35,
   "panorama": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C",
   "backwardYaw": 179.72,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 170.39,
   "panorama": "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1",
   "backwardYaw": -1,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D198D684_C62F_D075_41DE_79D8A3859959",
  "this.overlay_D1FE4F8D_C62F_3077_41D9_21E0D800487C",
  "this.overlay_DE8CDBAB_CAF3_31E9_41C1_022D103E4E7C"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_175858_00_069_PureShot",
 "id": "panorama_D586DBB1_C432_CE80_41E7_856DF01E4064",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 91.04,
   "panorama": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE",
   "backwardYaw": 179.67,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -71.49,
   "panorama": "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F",
   "backwardYaw": 5.39,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D2FCEF54_C472_4782_41BB_5808F1697666",
  "this.overlay_D2475404_C476_D981_41E3_33485B94FED6",
  "this.overlay_EB6B4D26_C6F5_F0B5_41C9_D4CABC67AD05",
  "this.overlay_E00F195C_C6F7_3094_41B0_8AD5AC00D540",
  "this.overlay_EA689C14_C6F7_D095_41DD_ED44E62B7063",
  "this.overlay_D8C5E23E_CA91_12E8_41E0_1BA8B83DCE71",
  "this.overlay_D9478B72_CA97_117B_41D8_F822FA8D5738"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_DC174442_C65D_D0EC_41C5_1275482D010D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.52,
  "hfov": 120,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F16603D8_CAD8_3D88_41E4_0394A4232FFF",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_113943_00_019_PureShot",
 "id": "panorama_CF746CB7_C435_0215_41D3_84DE8EB51314",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -2.37,
   "panorama": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B",
   "backwardYaw": 179.66,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.52,
   "panorama": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247",
   "backwardYaw": 14.93,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D4AE1CA6_C5EB_51B4_41D4_F964955AEAD3",
  "this.overlay_D447FEA6_C5EB_71B5_41E0_1B287DB1F05B"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_114341_00_020_PureShot",
 "id": "panorama_CF62C613_C435_01ED_41E2_99F63CE4918B",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -2.06,
   "panorama": "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332",
   "backwardYaw": -165.49,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.66,
   "panorama": "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314",
   "backwardYaw": -2.37,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 39.09,
   "panorama": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF",
   "backwardYaw": -179.76,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D7B7F13E_C5EF_F094_41E3_4FD2B577003F",
  "this.overlay_D7EFDD23_C5ED_70B3_41D3_BE70D16BFE09",
  "this.overlay_D6559738_C5EB_709C_41E7_872971E0D21B",
  "this.overlay_D6F65F43_C5D7_50EC_41C0_17999BCDA017",
  "this.overlay_D18F6619_C5D7_D09F_41D0_A2E9B71311D2",
  "this.overlay_D8DB7DA7_CAF3_1199_41DC_682262961E99",
  "this.overlay_D90461D9_CAF7_31A8_41E3_4FF345997AFD"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.88,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F11B23B5_CAD8_3D99_41E5_7E4E94B1DE67",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.48,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F11653A9_CAD8_3D89_41E0_30B646DAF17C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.34,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F1EF5362_CAD8_3EB8_41CF_87F193837674",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.51,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9E85760_CAD8_26B7_41E3_AA6843B26B9F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.9,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F15EC3F0_CAD8_3D98_41D2_4CB353A48D6C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.16,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8B20500_CAD8_3A78_41E3_A23E8BF1DB3E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CFD38984_C435_02EB_41E4_829FA71604B8_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "hfovMin": "135%",
 "label": "IMG_20230801_172848_00_060_PureShot",
 "id": "panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -179.13,
   "panorama": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D",
   "backwardYaw": 11.22,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 3.6,
   "panorama": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B",
   "backwardYaw": 173.72,
   "distance": 1
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E321FF80_C66B_306C_41C3_9841F53B664B",
  "this.overlay_E575355C_C66B_5094_41DC_F77047FEA319"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.48,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F818563F_CAD8_2689_41E4_50056A8A1336",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.63,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9DCA777_CAD8_2698_41DB_56705D924667",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.61,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F932079D_CAD8_2588_41A7_290998F2AA9D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_camera",
 "automaticZoomSpeed": 10
},
{
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipBorderSize": 1,
 "progressBorderSize": 0,
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "width": "100%",
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 10,
 "minHeight": 50,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderRadius": 0,
 "paddingLeft": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 100,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "height": "100%",
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "9px",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "shadow": false,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "paddingTop": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Bebas Neue",
 "vrPointerSelectionColor": "#009933",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF"
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "layout": "absolute",
 "right": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "height": 641,
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "children": [
  "this.Label_ED4090E9_CAC8_3B88_41B5_AA7FECE2A264"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 579.4,
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": 15,
 "scrollBarMargin": 2,
 "class": "Container",
 "height": 142.6,
 "minWidth": 1,
 "overflow": "visible",
 "propagateClick": true,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "layout": "absolute",
 "right": "0%",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.64,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "height": 118,
 "minWidth": 1,
 "class": "Container",
 "overflow": "visible",
 "bottom": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--MENU"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "layout": "absolute",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--INFO photoalbum"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "layout": "absolute",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "layout": "absolute",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "layout": "absolute",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "layout": "absolute",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "layout": "absolute",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1"
},
{
 "maxHeight": 1000,
 "maxWidth": 1000,
 "id": "Image_DEF11F7B_CA48_E688_41E8_A70F29C19D33",
 "left": "0.03%",
 "width": "10.534%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_DEF11F7B_CA48_E688_41E8_A70F29C19D33.png",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": "13.314%",
 "minWidth": 1,
 "class": "Image",
 "bottom": "7.26%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image15108"
 },
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "propagateClick": true,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "propagateClick": true,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.12,
   "hfov": 16.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -34.46
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_ED96566B_CAB8_6688_41C1_59579A79BC14",
   "pitch": -34.46,
   "yaw": -148.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.17,
   "distance": 100
  }
 ],
 "id": "overlay_DADE2A61_CAB1_1299_41BF_CE46CA3E36D6",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.95,
   "hfov": 7.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 32.27
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 144,
      "height": 129
     }
    ]
   },
   "pitch": 32.27,
   "yaw": 12.95,
   "distance": 50
  }
 ],
 "id": "overlay_DA8FC657_CAB1_32B8_41E4_47B0622A375F",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.22,
   "hfov": 10.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.05
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1, this.camera_F85ED690_CAD8_2798_41D5_1DBDC95636EF); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ]
   },
   "pitch": 1.05,
   "yaw": 11.22,
   "distance": 50
  }
 ],
 "id": "overlay_E24F6CFD_C67C_F194_41E5_447469BE970F",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.63,
   "hfov": 19.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -19.39
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321, this.camera_F86BE683_CAD8_2678_41E1_2AE3C169057D); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3174CF5_C635_5194_41E8_22424F154EA5",
   "pitch": -19.39,
   "yaw": 74.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.62,
   "distance": 50
  }
 ],
 "id": "overlay_E5A7F7D9_C674_DF9C_41DF_D450C967BDBB",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.53,
   "hfov": 8.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.76
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 140,
      "height": 136
     }
    ]
   },
   "pitch": -2.76,
   "yaw": 159.53,
   "distance": 50
  }
 ],
 "id": "overlay_E351F1C3_C677_F3F3_41E7_289FB4A5FF11",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.68,
   "hfov": 23.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -16.59
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83, this.camera_F847569D_CAD8_2788_41CC_58B448A5F01D); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E316DCF6_C635_5194_41E2_DB6CC50DD95A",
   "pitch": -16.59,
   "yaw": -179.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.15,
   "distance": 100
  }
 ],
 "id": "overlay_D9D3D829_C675_50BF_41E0_9E863ABB5C68",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.04,
   "hfov": 23.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.14
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EE98C877_C655_7093_41D0_4977209804A9, this.camera_F989B721_CAD8_26B8_41D9_9840DCF62BE9); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30B3CEC_C635_51B4_41E6_00898F03BDBB",
   "pitch": -17.14,
   "yaw": -0.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.08,
   "distance": 100
  }
 ],
 "id": "overlay_DF0B74E5_C637_71B7_41E1_DCB3E7439DCD",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.79,
   "hfov": 23.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -16.8
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C, this.camera_F9FC873C_CAD8_2689_41E0_A4E237406EDE); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30B5CED_C635_51B4_41D3_C6E09675817F",
   "pitch": -16.8,
   "yaw": 179.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.12,
   "distance": 100
  }
 ],
 "id": "overlay_DFAF42B6_C637_F194_41C3_0B28B13C9F85",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.61,
   "hfov": 24.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.28
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF62C332_C435_062F_41D5_817A78857EF1, this.camera_F97237EC_CAD8_258F_41E5_668C331D49A1); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30DCCE4_C635_51B4_41DF_33E432594D32",
   "pitch": -17.28,
   "yaw": 1.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.9,
   "distance": 100
  }
 ],
 "id": "overlay_D0E8D0BB_C5D5_519C_41CD_A68B454E5700",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.5,
   "hfov": 25.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -15.56
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3, this.camera_F90507D2_CAD8_259B_41D6_73AB5B6B6701); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30E8CE5_C635_51B4_41E4_1B279E0D5AFF",
   "pitch": -15.56,
   "yaw": -165.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.12,
   "distance": 100
  }
 ],
 "id": "overlay_D080C993_C5D5_5393_41CE_A5FFA2FBF663",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.29,
   "hfov": 24.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -18.65
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4, this.camera_F90FC7DF_CAD8_2589_41E1_B7FDE168B43C); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30E1CE6_C635_51B4_41E6_3F6CED617E39",
   "pitch": -18.65,
   "yaw": 141.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.71,
   "distance": 100
  }
 ],
 "id": "overlay_D3257D6B_C5D5_50BC_41E3_044D682AB07D",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.97,
   "hfov": 23.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -13.98
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_ED90C66F_CAB8_6688_41E5_3D746F235976",
   "pitch": -13.98,
   "yaw": -120.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.44,
   "distance": 100
  }
 ],
 "id": "overlay_D8AA269E_CAB1_73A8_41D0_31CCDC898B26",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.31,
   "hfov": 14.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 54,
      "height": 16
     }
    ]
   },
   "pitch": -6.65
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 250,
      "height": 74
     }
    ]
   },
   "pitch": -6.65,
   "yaw": -120.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.76,
   "distance": 50
  }
 ],
 "id": "overlay_D9610BF6_CAB1_3178_41E1_74328612EDCA",
 "data": {
  "label": "Swimming Pool"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.88,
   "hfov": 22.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 54,
      "height": 16
     }
    ]
   },
   "pitch": -11.06
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 386,
      "height": 113
     }
    ]
   },
   "pitch": -11.06,
   "yaw": 142.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.45,
   "distance": 50
  }
 ],
 "id": "overlay_D8C5B8CF_CAB7_1FA8_41E2_9284A0EE7C43",
 "data": {
  "label": "Farm House Villa"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.22,
   "hfov": 7.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -19.03
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 140,
      "height": 149
     }
    ]
   },
   "pitch": -19.03,
   "yaw": 65.22,
   "distance": 50
  }
 ],
 "id": "overlay_CB8A82E3_C5FB_51B3_41C6_E20F80FCA079",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.15,
   "hfov": 9.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -17.65
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 168,
      "height": 131
     }
    ]
   },
   "pitch": -17.65,
   "yaw": -66.15,
   "distance": 50
  }
 ],
 "id": "overlay_CB84D256_C5FC_D094_41E1_300D66E39197",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.43,
   "hfov": 9.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -8.73
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 168,
      "height": 131
     }
    ]
   },
   "pitch": -8.73,
   "yaw": 35.43,
   "distance": 50
  }
 ],
 "id": "overlay_CB70A0FA_C5FD_D19D_41E5_794F9BF2E23A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.99,
   "hfov": 8.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -8.73
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 140,
      "height": 149
     }
    ]
   },
   "pitch": -8.73,
   "yaw": -34.99,
   "distance": 50
  }
 ],
 "id": "overlay_CAC49611_C5FD_D06C_41CA_1C64E2486482",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.72,
   "hfov": 8.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -6.95
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 149,
      "height": 136
     }
    ]
   },
   "pitch": -6.95,
   "yaw": 154.72,
   "distance": 50
  }
 ],
 "id": "overlay_CACA6C60_C5FC_F0AD_41D2_52CA01423DB7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.56,
   "hfov": 8.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -6.95
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 149,
      "height": 136
     }
    ]
   },
   "pitch": -6.95,
   "yaw": -179.56,
   "distance": 50
  }
 ],
 "id": "overlay_CB4F1410_C5FF_706D_41D9_2402158FF94C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.79,
   "hfov": 7.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -8.48
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601, this.camera_F1A20311_CAD8_3E99_41DD_CF3812CE9BFA); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 132,
      "height": 155
     }
    ]
   },
   "pitch": -8.48,
   "yaw": 116.79,
   "distance": 50
  }
 ],
 "id": "overlay_CB7DF849_C5FF_30FC_41AD_28A023C5518D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.11,
   "hfov": 15.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 53,
      "height": 16
     }
    ]
   },
   "pitch": -13.35
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 272,
      "height": 81
     }
    ]
   },
   "pitch": -13.35,
   "yaw": -179.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.68,
   "distance": 50
  }
 ],
 "id": "overlay_D8CBDAB7_CA91_13F9_419A_F1FE3AD87731",
 "data": {
  "label": "AQUAPHONICS"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.18,
   "hfov": 18.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_8_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 63,
      "height": 16
     }
    ]
   },
   "pitch": -13.5
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 323,
      "height": 82
     }
    ]
   },
   "pitch": -13.5,
   "yaw": 156.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.7,
   "distance": 50
  }
 ],
 "id": "overlay_DE7C4112_CA93_EEB8_41E0_A9FC2D493898",
 "data": {
  "label": "HydroPhonics"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -143.35,
   "hfov": 21.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -27.85
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF, this.camera_F8A24524_CAD8_3ABF_41DE_78C33CF9989B); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E308ECF2_C635_51AC_41DE_D207B33B2068",
   "pitch": -27.85,
   "yaw": -143.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.36,
   "distance": 50
  }
 ],
 "id": "overlay_E5AAF0D4_C677_3195_41CB_037D0FA5DEF0",
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.01,
   "hfov": 16.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -21.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D, this.camera_F896E53D_CAD8_3A89_41D8_637910E09823); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3080CF3_C635_51AC_41DF_0B3EDDA8AEF7",
   "pitch": -21.04,
   "yaw": -54.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.86,
   "distance": 50
  }
 ],
 "id": "overlay_D892AA56_C677_3094_41D3_6C596A5B9479",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.6,
   "hfov": 10.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.23
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE, this.camera_F8A9A530_CAD8_3A97_41E2_6977D3E16D2F); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ]
   },
   "pitch": -6.23,
   "yaw": 19.6,
   "distance": 50
  }
 ],
 "id": "overlay_D81A734A_C675_50FD_41CE_B36A0867E1AF",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.7,
   "hfov": 8.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": -12.76
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 150,
      "height": 96
     }
    ]
   },
   "pitch": -12.76,
   "yaw": 20.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.72,
   "distance": 50
  }
 ],
 "id": "overlay_C59117C7_CA58_65F8_41DB_DE23BA91CD5D",
 "data": {
  "label": "POOL"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.93,
   "hfov": 22.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -18.38
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314, this.camera_F11653A9_CAD8_3D89_41E0_30B646DAF17C); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3020CD9_C635_519C_41D3_6909540D203F",
   "pitch": -18.38,
   "yaw": 14.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.92,
   "distance": 100
  }
 ],
 "id": "overlay_D5E79D01_C5F7_306C_41C1_C6928652C747",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.37,
   "hfov": 23.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -15.63
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607, this.camera_F13FE392_CAD8_3D9B_41E2_09ED7E215D9B); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E301BCD9_C635_519C_41BF_0957EA736A16",
   "pitch": -15.63,
   "yaw": 123.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.26,
   "distance": 100
  }
 ],
 "id": "overlay_D586E657_C5F7_7093_41C5_C25AA509907C",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.33,
   "hfov": 21.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -27.64
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4, this.camera_F122E39D_CAD8_3D89_41CA_7D37CC98A0B2); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E301ECDA_C635_519C_41E5_15D246E991BD",
   "pitch": -27.64,
   "yaw": -75.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.4,
   "distance": 100
  }
 ],
 "id": "overlay_D4B9B866_C5F4_F0B5_41E5_D0B148AAA420",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.84,
   "hfov": 15.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -34.19
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 323,
      "height": 136
     }
    ]
   },
   "pitch": -34.19,
   "yaw": -75.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.88,
   "distance": 50
  }
 ],
 "id": "overlay_D915FB5F_CA91_32A8_41B6_69CE2618FE20",
 "data": {
  "label": "WAY TO "
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.4,
   "hfov": 17.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -23.3
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 317,
      "height": 82
     }
    ]
   },
   "pitch": -23.3,
   "yaw": 16.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.27,
   "distance": 50
  }
 ],
 "id": "overlay_D9543B5F_CAF1_72A9_41E4_A0A67E4E7FAE",
 "data": {
  "label": "Explore more"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.79,
   "hfov": 23.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -12.13
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83, this.camera_F802D64C_CAD8_268F_41E8_5C2D7BEF874C); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30A1CEE_C635_51B4_41C3_7359C7470260",
   "pitch": -12.13,
   "yaw": 0.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.62,
   "distance": 100
  }
 ],
 "id": "overlay_DD136A62_C66C_F0AD_41D1_1AF2091F4CFD",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.18,
   "hfov": 11.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.2
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67, this.camera_F818563F_CAD8_2689_41E4_50056A8A1336); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 201,
      "height": 201
     }
    ]
   },
   "pitch": -8.2,
   "yaw": 94.18,
   "distance": 50
  }
 ],
 "id": "overlay_E6D7447B_C66C_D093_41E3_19152E460DB3",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.76,
   "hfov": 22.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.4
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B, this.camera_F874B659_CAD8_2689_41C5_E45AF8A5B3AA); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E309ECF0_C635_51AC_41E8_BD19E1EA98D4",
   "pitch": -21.4,
   "yaw": -179.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.49,
   "distance": 100
  }
 ],
 "id": "overlay_E75D9960_C66D_D0AD_41D7_2F3E1DF1C035",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.78,
   "hfov": 19.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 45,
      "height": 16
     }
    ]
   },
   "pitch": -17.38
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 344,
      "height": 122
     }
    ]
   },
   "pitch": -17.38,
   "yaw": 93.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.47,
   "distance": 50
  }
 ],
 "id": "overlay_DAC24EC6_CA59_E7F8_41DD_4FCB683FA55A",
 "data": {
  "label": "CAMP Fire"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.38,
   "hfov": 22.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -19.48
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601, this.camera_F812E633_CAD8_2699_417F_584B2B1228A1); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_DFFE1C52_C5D1_C980_4195_5D5B4BECA039",
   "pitch": -19.48,
   "yaw": 14.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.77,
   "distance": 100
  }
 ],
 "id": "overlay_DDFA44E3_C5D6_7A80_41DE_D4FE962F2B14",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.48,
   "hfov": 24.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.64
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE, this.camera_F82AD627_CAD8_26B9_41E6_508DE356617F); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_DFFDBC52_C5D1_C980_41E7_08BAF3D10062",
   "pitch": -21.64,
   "yaw": -166.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.49,
   "distance": 100
  }
 ],
 "id": "overlay_DC6FFBB5_C5D6_CE80_41E5_DEE5D9EDF290",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.18,
   "hfov": 22.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -22.22
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D, this.camera_F8237618_CAD8_2688_41E0_22B12DE16462); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E305ECD2_C635_51EC_41D4_E7452BFCF25C",
   "pitch": -22.22,
   "yaw": -63.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.36,
   "distance": 100
  }
 ],
 "id": "overlay_E0C5C8B6_C654_F195_41E7_213F65F9B907",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.42,
   "hfov": 4.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -11.84
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 71,
      "height": 52
     }
    ]
   },
   "pitch": -11.84,
   "yaw": -17.42,
   "distance": 50
  }
 ],
 "id": "overlay_E38715F4_C6F5_5394_41D2_CC2656509E7A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.9,
   "hfov": 21.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 74,
      "height": 16
     }
    ]
   },
   "pitch": -27.11
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 401,
      "height": 86
     }
    ]
   },
   "pitch": -27.11,
   "yaw": -62.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.15,
   "distance": 50
  }
 ],
 "id": "overlay_D8F3B9D7_CA91_71B9_41CB_38E9343A43EF",
 "data": {
  "label": "WAY TO AUDITORIUM"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.04,
   "hfov": 13.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.12
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B, this.camera_F9E5674A_CAD8_268B_41E1_2C57EF8E3777); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 151,
      "height": 151
     }
    ]
   },
   "pitch": -10.12,
   "yaw": -111.04,
   "distance": 50
  }
 ],
 "id": "overlay_D3973503_CAB8_DA79_41DE_212207A15BD9",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.91,
   "hfov": 16.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.88
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 192
     }
    ]
   },
   "pitch": -12.88,
   "yaw": -4.91,
   "distance": 50
  }
 ],
 "id": "overlay_D2382EA3_CAB9_E7B8_41E3_4E45EAAB805B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.24,
   "hfov": 22.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.4
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF, this.camera_F9BC36BB_CAD8_2789_41B5_5D9AFD24A377); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_ED90766F_CAB8_6688_41E3_3774368F5A76",
   "pitch": -21.4,
   "yaw": 130.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.49,
   "distance": 100
  }
 ],
 "id": "overlay_D9385F48_CAF1_1297_41D3_9ACA81EECE15",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.41,
   "hfov": 24.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.49
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9, this.camera_F16603D8_CAD8_3D88_41E4_0394A4232FFF); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_DFFEBC51_C5D1_C980_41D3_520F03209C17",
   "pitch": -17.49,
   "yaw": -1.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.09,
   "distance": 100
  }
 ],
 "id": "overlay_D3A4C228_C44E_7981_41DD_762A27934F8F",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.67,
   "hfov": 28.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -24.35
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064, this.camera_F17373CC_CAD8_3D88_41E2_C5C120CEF9AE); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_DFFE4C51_C5D1_C980_41E6_6646EF1169A1",
   "pitch": -24.35,
   "yaw": 179.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.08,
   "distance": 100
  }
 ],
 "id": "overlay_DD7F5046_C5DE_3981_41E2_E4FF1B83BEF5",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.1,
   "hfov": 3.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -8.69
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 54,
      "height": 47
     }
    ]
   },
   "pitch": -8.69,
   "yaw": 25.1,
   "distance": 50
  }
 ],
 "id": "overlay_E39FD859_C6F5_309C_41D3_ED6C01FFEC8B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.92,
   "hfov": 22.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -20.85
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321, this.camera_F10E73C0_CAD8_3DF8_41D0_4524CC4F2551); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_ED8D3668_CAB8_66B7_41D1_81024BBDA74D",
   "pitch": -20.85,
   "yaw": 30.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.57,
   "distance": 50
  }
 ],
 "id": "overlay_D9723675_CA93_3379_41E4_2D3F31042996",
 "data": {
  "label": "Circle Arrow 01b Right"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.27,
   "hfov": 20.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 16
     }
    ]
   },
   "pitch": -26.67
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 381,
      "height": 102
     }
    ]
   },
   "pitch": -26.67,
   "yaw": 33.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.18,
   "distance": 50
  }
 ],
 "id": "overlay_DEA60039_CA93_2EE8_41B6_F66EA2D57003",
 "data": {
  "label": "WAY TO NAALUKETTU"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.96,
   "hfov": 2.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": -10.13
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 46
     }
    ]
   },
   "pitch": -10.13,
   "yaw": -21.96,
   "distance": 50
  }
 ],
 "id": "overlay_D6BB1411_C5D5_F06F_41DC_84076632C3EF",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.63,
   "hfov": 22.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -19.82
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3, this.camera_F8FAB587_CAD8_3A78_41E5_3D5838E29876); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30EBCE0_C635_51AC_41C9_A0D866B5C07C",
   "pitch": -19.82,
   "yaw": 11.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.72,
   "distance": 100
  }
 ],
 "id": "overlay_D6E52BED_C5D5_37B4_41D9_494B45F8A23D",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.49,
   "hfov": 22.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -18.79
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B, this.camera_F8E0D593_CAD8_2598_41E8_3C1D8F8B3373); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30EECE1_C635_51AC_41E6_1E6A219CD8A7",
   "pitch": -18.79,
   "yaw": -165.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.87,
   "distance": 100
  }
 ],
 "id": "overlay_D66349BF_C5D4_F394_41DF_5AE50A536EB6",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.43,
   "hfov": 8.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -11.34
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 149,
      "height": 126
     }
    ]
   },
   "pitch": -11.34,
   "yaw": -73.43,
   "distance": 50
  }
 ],
 "id": "overlay_D622017D_C5DC_D097_41E4_E3A846F99AB8",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.63,
   "hfov": 15.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 52,
      "height": 16
     }
    ]
   },
   "pitch": -18.26
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 281,
      "height": 85
     }
    ]
   },
   "pitch": -18.26,
   "yaw": -71.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.81,
   "distance": 50
  }
 ],
 "id": "overlay_D957D4FF_CAF3_1769_41D4_5E26E11B789C",
 "data": {
  "label": "kennel club"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.72,
   "hfov": 21.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -28.81
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247, this.camera_F87E6668_CAD8_26B7_41E6_25164B3AD5D5); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E302BCD7_C635_5194_41E3_9C47639F2A03",
   "pitch": -28.81,
   "yaw": -7.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.16,
   "distance": 100
  }
 ],
 "id": "overlay_CA91C2AD_C5F5_D1B4_41E7_439AA1B5E666",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.1,
   "hfov": 22.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -22.29
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601, this.camera_F8617677_CAD8_2699_41E8_B7A26C01FBE0); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E302FCD8_C635_519C_41D6_9D6A8127E5A9",
   "pitch": -22.29,
   "yaw": 172.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.35,
   "distance": 100
  }
 ],
 "id": "overlay_D5CFE8BA_C5F5_719C_41E5_0AF30E6740E3",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.39,
   "hfov": 23.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -12.51
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817, this.camera_F8DE55C1_CAD8_25F8_41E5_123BBF72A3BA); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D1CC8EC4_C432_C680_41C5_FB1BC1C1FB43",
   "pitch": -12.51,
   "yaw": -9.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.58,
   "distance": 100
  }
 ],
 "id": "overlay_CB6011AA_C436_DA81_41DC_2326D73B2D16",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.49,
   "hfov": 6.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -8.33
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 107,
      "height": 94
     }
    ]
   },
   "pitch": -8.33,
   "yaw": -68.49,
   "distance": 50
  }
 ],
 "id": "overlay_E16A4BAC_C66D_37B5_41C1_23B57863A2DF",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.9,
   "hfov": 25.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 96,
      "height": 16
     }
    ]
   },
   "pitch": -15.92
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 454,
      "height": 75
     }
    ]
   },
   "pitch": -15.92,
   "yaw": -7.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.91,
   "distance": 50
  }
 ],
 "id": "overlay_D860A25F_CAAF_12A8_41E6_7CA000364B90",
 "data": {
  "label": "ENTER TO THANIMA FARM LIFE"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.16,
   "hfov": 27.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -22.22
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C, this.camera_F987C713_CAD8_2698_41E7_1C2BB1D0EF38); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30CCCEA_C635_51BC_41D8_0674FB2DFBA5",
   "pitch": -22.22,
   "yaw": -2.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.19,
   "distance": 100
  }
 ],
 "id": "overlay_DE2227C7_C62D_5FF4_41D5_2B2249C01E97",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.72,
   "hfov": 27.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -20.16
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704, this.camera_F9AA76EA_CAD8_2788_41C4_473CD166305A); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30C6CEA_C635_51BC_41C2_67B37B4118B0",
   "pitch": -20.16,
   "yaw": 179.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.57,
   "distance": 100
  }
 ],
 "id": "overlay_DEAF18EE_C62C_D1B5_41DE_619D024C0BE8",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.46,
   "hfov": 7.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 66,
      "height": 98
     }
    ]
   },
   "pitch": -6.97
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 132,
      "height": 196
     }
    ]
   },
   "pitch": -6.97,
   "roll": 0,
   "yaw": -76.46,
   "distance": 50
  }
 ],
 "id": "overlay_D9B3E507_CAF1_3699_41E1_EE02EDD6EBAD",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.43,
   "hfov": 3.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": -6.68
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442, this.camera_F99C26FF_CAD8_2788_41DC_82E73A25223B); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 64,
      "height": 83
     }
    ]
   },
   "pitch": -6.68,
   "yaw": -76.43,
   "distance": 50
  }
 ],
 "id": "overlay_D9E2AC60_CAF1_3697_41E7_7B20151EE8E1",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.78,
   "hfov": 5.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -6.23
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 92,
      "height": 81
     }
    ]
   },
   "pitch": -6.23,
   "yaw": -108.78,
   "distance": 50
  }
 ],
 "id": "overlay_DE3DB2E9_CAEF_1368_41E3_E9BE5DE34163",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.7,
   "hfov": 10.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -10.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 180,
      "height": 60
     }
    ]
   },
   "pitch": -10.04,
   "yaw": -75.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.53,
   "distance": 50
  }
 ],
 "id": "overlay_DE1BDDB8_CA91_11E8_41D3_A28B17451055",
 "data": {
  "label": "OUTDOOR GAMES"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.47,
   "hfov": 30.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.33
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F, this.camera_F92567AB_CAD8_2589_41E3_7080404E352C); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_ED811665_CAB8_66B9_41E0_DAEF9E9E7306",
   "pitch": -21.33,
   "yaw": -7.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.43,
   "distance": 100
  }
 ],
 "id": "overlay_CB8357AD_C433_C680_41DF_DE3D9CB1F3FB",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.33,
   "hfov": 26.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -30.53
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977, this.camera_F932079D_CAD8_2588_41A7_290998F2AA9D); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D1CDCEC6_C432_C680_41C6_982C6702FF96",
   "pitch": -30.53,
   "yaw": 175.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.25,
   "distance": 100
  }
 ],
 "id": "overlay_D41039E8_C432_4A80_41E8_27A322EFFCBD",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.99,
   "hfov": 5.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": -21.39
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 100,
      "height": 128
     }
    ]
   },
   "pitch": -21.39,
   "yaw": -95.99,
   "distance": 50
  }
 ],
 "id": "overlay_D89F66B8_CA91_13F7_41B4_5511E01A293D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.47,
   "hfov": 15.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -14.91
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Welcome",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 272,
      "height": 90
     }
    ]
   },
   "pitch": -14.91,
   "yaw": -95.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.62,
   "distance": 50
  }
 ],
 "id": "overlay_D9212706_CA93_329B_41D9_72B174FDE825",
 "data": {
  "label": "Battery Cars"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1,
   "hfov": 23.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -16.46
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704, this.camera_F8B8250C_CAD8_3A88_41DD_D688549C04EE); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30E5CE6_C635_51B4_4185_2793AF613292",
   "pitch": -16.46,
   "yaw": -1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.17,
   "distance": 100
  }
 ],
 "id": "overlay_D1179F93_C62D_506C_41BC_D72BE5AF44AC",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.52,
   "hfov": 23.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -15.77
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF, this.camera_F8A6D518_CAD8_3A97_41E0_2D6014BF2780); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30DECE7_C635_51B4_41BD_705D1F0A1A72",
   "pitch": -15.77,
   "yaw": 179.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.25,
   "distance": 100
  }
 ],
 "id": "overlay_D19734E3_C62D_D1B3_41E5_F870D1090109",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.17,
   "hfov": 8.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 21,
      "height": 15
     }
    ]
   },
   "pitch": -2.4
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 136,
      "height": 103
     }
    ]
   },
   "pitch": -2.4,
   "yaw": -33.17,
   "distance": 50
  }
 ],
 "id": "overlay_D95F0B6E_CAF1_7168_41E0_D13BE855F57B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.58,
   "hfov": 6.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.55
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_EDAE967B_CAB8_6688_41CB_37A529B131CC",
   "pitch": -4.55,
   "yaw": 0.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.98,
   "distance": 100
  }
 ],
 "id": "overlay_E2C608DA_C655_319C_41E7_56D7F2ACE9D1",
 "data": {
  "label": "Info Red 07"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.51,
   "hfov": 3.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3138CFA_C635_519C_41C2_663FB008BA9F",
   "pitch": 7,
   "yaw": -16.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.96,
   "distance": 100
  }
 ],
 "id": "overlay_E5AA5CE9_C655_51BF_41E0_8DBBB6596FF4",
 "data": {
  "label": "Info Red 07"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.61,
   "hfov": 23.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -16.8
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D, this.camera_F84BB6AD_CAD8_2789_41C3_342ECAF73E0C); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_EDAE067C_CAB8_6688_41E0_024D49EE324E",
   "pitch": -16.8,
   "yaw": 117.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.12,
   "distance": 100
  }
 ],
 "id": "overlay_DAD64927_CA48_EAB8_41E3_663D816CB2C7",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.14,
   "hfov": 10.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -2.65
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 170,
      "height": 75
     }
    ]
   },
   "pitch": -2.65,
   "yaw": 78.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.1,
   "distance": 50
  }
 ],
 "id": "overlay_DB992F6D_CA48_E68B_41E5_913D45949674",
 "data": {
  "label": "ZIP LINE"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.79,
   "hfov": 9.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 45,
      "height": 16
     }
    ]
   },
   "pitch": 3.99
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 166,
      "height": 59
     }
    ]
   },
   "pitch": 3.99,
   "yaw": -12.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.81,
   "distance": 50
  }
 ],
 "id": "overlay_DB9D91A7_CA48_FDB8_4198_764EAC5F6930",
 "data": {
  "label": "Sky cycling"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.79,
   "hfov": 6.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.61
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_EDAD467C_CAB8_6688_41C0_A7883B2B0471",
   "pitch": 2.61,
   "yaw": 76.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.99,
   "distance": 100
  }
 ],
 "id": "overlay_DBC2858F_CA48_6589_41C2_CE659C63CB15",
 "data": {
  "label": "Info Red 07"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.19,
   "hfov": 12.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -9.64
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 205,
      "height": 91
     }
    ]
   },
   "pitch": -9.64,
   "yaw": 1.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.01,
   "distance": 50
  }
 ],
 "id": "overlay_D81A9B4F_CA48_2E89_41E0_C551DF4C0E16",
 "data": {
  "label": "BOATING"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.46,
   "hfov": 6.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": 0.06
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 149
     }
    ]
   },
   "pitch": 0.06,
   "yaw": 118.46,
   "distance": 50
  }
 ],
 "id": "overlay_E0D462AE_C66C_D1B4_41D2_91765E457576",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.62,
   "hfov": 7.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 0.94
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D, this.camera_F195A31E_CAD8_3E88_41DE_1368205BDA81); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 139
     }
    ]
   },
   "pitch": 0.94,
   "yaw": 44.62,
   "distance": 50
  }
 ],
 "id": "overlay_E18B8299_C66C_D19C_41CD_A7FDF6DAC855",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.06,
   "hfov": 10.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.49
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6, this.camera_F1F6E347_CAD8_3EF9_41C9_925CFEA9CDEF); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ]
   },
   "pitch": 2.49,
   "yaw": 80.06,
   "distance": 50
  }
 ],
 "id": "overlay_E35BA5EC_C66F_73B5_41D5_73E146DD9516",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.33,
   "hfov": 7.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -1.11
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D, this.camera_F19FC32C_CAD8_3E8F_41E7_E5F58745C4B4); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 139
     }
    ]
   },
   "pitch": -1.11,
   "yaw": -63.33,
   "distance": 50
  }
 ],
 "id": "overlay_E6E15816_C66C_F095_41E1_661D238FE9D4",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.58,
   "hfov": 6.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.48
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 117,
      "height": 123
     }
    ]
   },
   "pitch": -0.48,
   "yaw": -132.58,
   "distance": 50
  }
 ],
 "id": "overlay_E6E28F40_C66D_50EC_41D6_45284A185E4E",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.72,
   "hfov": 6.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.11
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6, this.camera_F1FB8355_CAD8_3E99_41C2_37B7976BB8E0); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 117,
      "height": 123
     }
    ]
   },
   "pitch": -1.11,
   "yaw": -97.72,
   "distance": 50
  }
 ],
 "id": "overlay_E3F7223A_C66D_509C_41E8_A846B08DAB4F",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.72,
   "hfov": 28.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -15.65
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1, this.camera_F183333A_CAD8_3E8B_41E3_A11828B077FF); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_FBB02C69_CAF8_6A88_41B6_6E5709BDBB32",
   "pitch": -15.65,
   "yaw": 173.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.62,
   "distance": 100
  }
 ],
 "id": "overlay_F8C24246_CAC8_DEF8_41DE_D128D843D301",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "propagateClick": true,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "propagateClick": true,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "propagateClick": true,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0
},
{
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "right": 30,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingLeft": 0,
 "propagateClick": true,
 "height": 75,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "bottom": 8,
 "transparencyActive": true,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.74,
   "hfov": 26.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -28.6
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9, this.camera_F14393FC_CAD8_3D88_41CC_86BB826CAE4B); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3056CD3_C635_51EC_41DF_DDE5792A259A",
   "pitch": -28.6,
   "yaw": -10.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.75,
   "distance": 100
  }
 ],
 "id": "overlay_DB3E406D_C452_6C12_4190_C8A116F0EF72",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.95,
   "hfov": 27.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -31
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607, this.camera_F15EC3F0_CAD8_3D98_41D2_4CB353A48D6C); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3049CD3_C635_51EC_41D6_2B9B416636EB",
   "pitch": -31,
   "yaw": 167.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.83,
   "distance": 100
  }
 ],
 "id": "overlay_DE30B1F6_C456_2FFF_41E6_64662190C7D2",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.35,
   "hfov": 13.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 69,
      "height": 200
     }
    ]
   },
   "pitch": -13.81
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 222,
      "height": 641
     }
    ]
   },
   "pitch": -13.81,
   "roll": 0,
   "yaw": 122.35,
   "distance": 50
  }
 ],
 "id": "overlay_DF3705DB_C452_D436_41BD_0FAA6EBC6AE7",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 121.97,
   "hfov": 6.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -14.36
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8, this.camera_F16B83E4_CAD8_3DB8_41D2_D561C06251A7); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 114,
      "height": 133
     }
    ]
   },
   "pitch": -14.36,
   "yaw": 121.97,
   "distance": 50
  }
 ],
 "id": "overlay_DABE427D_C44E_6CED_41D3_0B455923880A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.45,
   "hfov": 18.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 63,
      "height": 16
     }
    ]
   },
   "pitch": -7.61
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 321,
      "height": 81
     }
    ]
   },
   "pitch": -7.61,
   "yaw": 123.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.85,
   "distance": 50
  }
 ],
 "id": "overlay_D8CFA2B0_CA90_F3F7_419E_81D617C1060C",
 "data": {
  "label": "FARM RESEARCH"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.63,
   "hfov": 14.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -5.78
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B, this.camera_F91217C5_CAD8_25F9_41B5_C4D9D0EA4777); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 166,
      "height": 156
     }
    ]
   },
   "pitch": -5.78,
   "yaw": 171.63,
   "distance": 50
  }
 ],
 "id": "overlay_DDC98D77_CA48_2A98_41E5_0E5B81EDA90A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.17,
   "hfov": 16.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.85
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 192
     }
    ]
   },
   "pitch": 0.85,
   "yaw": -160.17,
   "distance": 50
  }
 ],
 "id": "overlay_D27DE70F_CA48_2688_41C9_92515E275248",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.81,
   "hfov": 16.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.25
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 192
     }
    ]
   },
   "pitch": -14.25,
   "yaw": 1.81,
   "distance": 50
  }
 ],
 "id": "overlay_DD9B8D53_CA48_2A98_41CD_A2BF3A5714AE",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.02,
   "hfov": 10.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.11
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83, this.camera_F9C85790_CAD8_2598_41AC_ABB09B85B224); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ]
   },
   "pitch": 10.11,
   "yaw": 176.02,
   "distance": 50
  }
 ],
 "id": "overlay_E6C8BF34_C674_F094_41C4_CFF1889D8182",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.76,
   "hfov": 17.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -9.48
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D, this.camera_F8B20500_CAD8_3A78_41E3_A23E8BF1DB3E); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_EDAF667B_CAB8_6688_41E2_78973F639518",
   "pitch": -9.48,
   "yaw": -116.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.81,
   "distance": 100
  }
 ],
 "id": "overlay_C5A44F10_CA58_2698_41E1_0DBD439CD968",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.87,
   "hfov": 11.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.3
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 192
     }
    ]
   },
   "pitch": -2.3,
   "yaw": 73.87,
   "distance": 50
  }
 ],
 "id": "overlay_DA23C4B8_CA48_5B88_41E3_09A416A65754",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.39,
   "hfov": 23.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.14
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064, this.camera_F8E8C5A0_CAD8_25B8_41D5_BF61BA1FA9B2); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D1CD8EC6_C432_C680_41C8_F1B2D3BEEB14",
   "pitch": -17.14,
   "yaw": 5.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.08,
   "distance": 100
  }
 ],
 "id": "overlay_D4A49EBB_C437_C680_41E1_B68F814B1BB8",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.55,
   "hfov": 21.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -35.06
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817, this.camera_F8D655B4_CAD8_2598_41E4_AA008CEFA0F1); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_D1C26EC7_C432_C680_41B2_45BBE73514B6",
   "pitch": -35.06,
   "yaw": -173.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.8,
   "distance": 100
  }
 ],
 "id": "overlay_D5A122AD_C43E_5E80_41E7_6626B48DD882",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.61,
   "hfov": 9.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 79,
      "height": 150
     }
    ]
   },
   "pitch": -4.4
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 158,
      "height": 300
     }
    ]
   },
   "pitch": -4.4,
   "roll": 0,
   "yaw": 69.61,
   "distance": 50
  }
 ],
 "id": "overlay_E326C509_C6FD_D07C_41E3_7F91D1A89040",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.62,
   "hfov": 4.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -4.64
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 71,
      "height": 52
     }
    ]
   },
   "pitch": -4.64,
   "yaw": 69.62,
   "distance": 50
  }
 ],
 "id": "overlay_EEF39452_C6FB_50ED_41E3_7D60CAAA6402",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.09,
   "hfov": 4.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 31.21
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 94,
      "height": 94
     }
    ]
   },
   "pitch": 31.21,
   "yaw": 70.09,
   "distance": 50
  }
 ],
 "id": "overlay_EB8C5BCA_C6F4_D7FD_41D9_1AD0799FAA27",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.99,
   "hfov": 10.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -8.02
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 176,
      "height": 58
     }
    ]
   },
   "pitch": -8.02,
   "yaw": 69.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.4,
   "distance": 50
  }
 ],
 "id": "overlay_D86A13B0_CAB3_11F7_41E6_2DFEE1C2F144",
 "data": {
  "label": "Front Office"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.69,
   "hfov": 8.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": 35.82
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 176,
      "height": 58
     }
    ]
   },
   "pitch": 35.82,
   "yaw": 70.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.5,
   "distance": 50
  }
 ],
 "id": "overlay_D8C5EC3B_CAB1_F6E9_41E3_CB3F5666CB6D",
 "data": {
  "label": "SKY CYCLING"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.39,
   "hfov": 9.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -0.17
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462, this.camera_F8CDD5DB_CAD8_2588_41E5_666C9AA5F727); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 163,
      "height": 182
     }
    ]
   },
   "pitch": -0.17,
   "yaw": -88.39,
   "distance": 50
  }
 ],
 "id": "overlay_EE0332B6_C65F_3194_41B3_8BB1236F889C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.84,
   "hfov": 23.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -12.82
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4, this.camera_F8C645CE_CAD8_2588_41D6_489569D12AF1); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3137CF9_C635_519C_41DB_27C612A8FA21",
   "pitch": -12.82,
   "yaw": -4.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.55,
   "distance": 100
  }
 ],
 "id": "overlay_E4BC5987_C65D_D073_41C4_DDEE81D66B8C",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.61,
   "hfov": 22.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -22.43
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9, this.camera_F835E5E8_CAD8_2588_41D8_29299B68943F); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E312ACF9_C635_519C_41E3_49790B3AF937",
   "pitch": -22.43,
   "yaw": 138.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.33,
   "distance": 100
  }
 ],
 "id": "overlay_E1A9B6FE_C65C_D195_41DB_4EAE575F7582",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.65,
   "hfov": 9.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -6.45
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 169,
      "height": 70
     }
    ]
   },
   "pitch": -6.45,
   "yaw": -87.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.99,
   "distance": 50
  }
 ],
 "id": "overlay_C5B7E396_CA58_5D9B_41E4_F8B9719F344E",
 "data": {
  "label": "BOAT VIEW"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.25,
   "hfov": 11.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.01
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 192
     }
    ]
   },
   "pitch": -5.01,
   "yaw": -59.25,
   "distance": 50
  }
 ],
 "id": "overlay_DA43B10D_CA58_FA88_41E8_5ECE69EE7108",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.95,
   "hfov": 8.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -11.53
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 145,
      "height": 81
     }
    ]
   },
   "pitch": -11.53,
   "yaw": -58.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.46,
   "distance": 50
  }
 ],
 "id": "overlay_DA4139CE_CA58_2D88_41B0_BA47DB4A622E",
 "data": {
  "label": "Boating"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.94,
   "hfov": 25.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -26.2
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_ED97166B_CAB8_6688_41D3_6A76981E5855",
   "pitch": -26.2,
   "yaw": -0.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.12,
   "distance": 100
  }
 ],
 "id": "overlay_C58C6030_CA93_2EF7_41DC_E56BD42D75AF",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.65,
   "hfov": 23.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -32.79
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247, this.camera_F92F27B8_CAD8_2597_41DE_0574E9E2BC7A); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_ED96F66B_CAB8_6688_41E3_EC91EE14685C",
   "pitch": -32.79,
   "yaw": 179.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.54,
   "distance": 100
  }
 ],
 "id": "overlay_DA60FE78_CA93_3377_41E3_2C2758E527C8",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.12,
   "hfov": 23.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -15.29
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD, this.camera_F88B156D_CAD8_3A88_41DD_9E582095B2E2); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30A9CEE_C635_51B4_4190_DB20D3BBA130",
   "pitch": -15.29,
   "yaw": -105.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.3,
   "distance": 100
  }
 ],
 "id": "overlay_E060FE94_C62C_F195_41E3_35CB803DEB83",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.81,
   "hfov": 4.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -6.15
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0, this.camera_F8F2A57A_CAD8_3A88_41E5_50F430ECDAA7); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 79,
      "height": 64
     }
    ]
   },
   "pitch": -6.15,
   "yaw": 127.81,
   "distance": 50
  }
 ],
 "id": "overlay_EADB0E21_C62F_F0AC_41E7_320FDD794226",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.16,
   "hfov": 2.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 6.21
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 46,
      "height": 53
     }
    ]
   },
   "pitch": 6.21,
   "yaw": 137.16,
   "distance": 50
  }
 ],
 "id": "overlay_EFD731BD_C65C_F394_41DD_33F7998D0021",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.46,
   "hfov": 9.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 56,
      "height": 16
     }
    ]
   },
   "pitch": 8.91
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 162,
      "height": 46
     }
    ]
   },
   "pitch": 8.91,
   "yaw": 137.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.51,
   "distance": 50
  }
 ],
 "id": "overlay_E136DEB8_C65D_719C_41E0_181CFA5E3ED5",
 "data": {
  "label": "Bamboo Hut"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.89,
   "hfov": 12.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 70,
      "height": 15
     }
    ]
   },
   "pitch": -2.56
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 217,
      "height": 49
     }
    ]
   },
   "pitch": -2.56,
   "yaw": 127.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.86,
   "distance": 50
  }
 ],
 "id": "overlay_EDF7B65C_C65B_D094_41C6_EE336E05D8F4",
 "data": {
  "label": "Conference Room"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.68,
   "hfov": 11.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.44
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 192
     }
    ]
   },
   "pitch": 7.44,
   "yaw": -3.68,
   "distance": 50
  }
 ],
 "id": "overlay_C5FDE501_CA57_FA79_41E5_69297C70C4BC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.67,
   "hfov": 25.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -18.69
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C, this.camera_F8836561_CAD8_3AB8_41AD_949A5D9B14A9); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E629C2A6_CAC9_DFB8_41D8_3D14728546FD",
   "pitch": -18.69,
   "yaw": 179.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.29,
   "distance": 100
  }
 ],
 "id": "overlay_FAFF2E02_CAC9_E678_41DC_6313A9651172",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.52,
   "hfov": 20.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -30.73
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF, this.camera_F9A756D5_CAD8_2799_41C6_63EF69FFE1D5); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3090CF1_C635_51AC_41E6_39EE0495F541",
   "pitch": -30.73,
   "yaw": -86.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.76,
   "distance": 100
  }
 ],
 "id": "overlay_D85E439B_C66B_379C_41DF_3E29FFFDE65C",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.36,
   "hfov": 9.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -16.14
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 154
     }
    ]
   },
   "pitch": -16.14,
   "yaw": 100.36,
   "distance": 50
  }
 ],
 "id": "overlay_DAB574A5_C674_D1B7_41D7_4E7E2DA77829",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.4,
   "hfov": 21.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -7.64
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 359,
      "height": 294
     }
    ]
   },
   "pitch": -7.64,
   "yaw": -3.4,
   "distance": 50
  }
 ],
 "id": "overlay_EAF2328B_C65B_5073_41E7_687DEC956963",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.12,
   "hfov": 8.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 13.83
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 149,
      "height": 149
     }
    ]
   },
   "pitch": 13.83,
   "yaw": -109.12,
   "distance": 50
  }
 ],
 "id": "overlay_EDE952C4_C65B_F1F5_41E3_945EC7F28645",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.01,
   "hfov": 4.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -7.85
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 75,
      "height": 85
     }
    ]
   },
   "pitch": -7.85,
   "yaw": 28.01,
   "distance": 50
  }
 ],
 "id": "overlay_EC76C5D0_C65B_33ED_41D9_650846E4A403",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -36.88,
   "hfov": 7.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.71
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 120,
      "height": 120
     }
    ]
   },
   "pitch": -1.71,
   "yaw": -36.88,
   "distance": 50
  }
 ],
 "id": "overlay_EE6A5C23_C65D_50B3_41E0_7AB003B9E8CF",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.92,
   "hfov": 24.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.99
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EE98C877_C655_7093_41D0_4977209804A9, this.camera_F11B23B5_CAD8_3D99_41E5_7E4E94B1DE67); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_ED997673_CAB8_6698_41C0_B39E2814637A",
   "pitch": -17.99,
   "yaw": 178.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.87,
   "distance": 100
  }
 ],
 "id": "overlay_EBC74C5A_C66D_309C_41D5_012CB9240397",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.31,
   "hfov": 26.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -22.5
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF, this.camera_F83CB5F4_CAD8_2598_41C8_9AE3902FC124); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30E0CE2_C635_51AC_41D9_26FD6245DA7F",
   "pitch": -22.5,
   "yaw": -0.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.12,
   "distance": 100
  }
 ],
 "id": "overlay_D62DBF76_C5DD_5094_41E5_4DF0AD5078C7",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.14,
   "hfov": 24.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -24.35
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332, this.camera_F824B60A_CAD8_2688_41E7_5D52E7653397); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30DACE3_C635_51AC_41C2_78F7E041C5DD",
   "pitch": -24.35,
   "yaw": 178.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.51,
   "distance": 100
  }
 ],
 "id": "overlay_D1B51457_C5DD_D094_41D5_5277586F8044",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.47,
   "hfov": 8.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.38
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_ED92066E_CAB8_6688_41D5_7C9A26F5F5EE",
   "pitch": -14.38,
   "yaw": -96.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.64,
   "distance": 100
  }
 ],
 "id": "overlay_E1166DD1_C6EF_73EF_41E8_B5A50537FC63",
 "data": {
  "label": "Info Red 08"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.4,
   "hfov": 21.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 66,
      "height": 16
     }
    ]
   },
   "pitch": -21.97
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 397,
      "height": 96
     }
    ]
   },
   "pitch": -21.97,
   "yaw": -94.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.82,
   "distance": 50
  }
 ],
 "id": "overlay_D9356226_CAF1_1298_41DE_F62B7B858803",
 "data": {
  "label": "Children's park"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.16,
   "hfov": 6.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": 2.58
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 105,
      "height": 79
     }
    ]
   },
   "pitch": 2.58,
   "yaw": 7.16,
   "distance": 50
  }
 ],
 "id": "overlay_D80FA5D0_CABF_31B8_41BC_91810CFFAC51",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.97,
   "hfov": 8.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.39
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_EE98C877_C655_7093_41D0_4977209804A9, this.camera_F964F7F9_CAD8_2589_41B7_DDC0E80602B1); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 151,
      "height": 151
     }
    ]
   },
   "pitch": -9.39,
   "yaw": -101.97,
   "distance": 50
  }
 ],
 "id": "overlay_DBD8F349_CABF_72A8_41D6_7BC74E690C0F",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.17,
   "hfov": 22.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -19.68
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D, this.camera_F6AF1420_CAD8_3AB8_41B8_F2FC3C1FA83C); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3165CF6_C635_5194_41E5_E1F4DF3BBA27",
   "pitch": -19.68,
   "yaw": -0.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.74,
   "distance": 100
  }
 ],
 "id": "overlay_EED0D6D7_C66B_F194_41D5_CB50880608FB",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.65,
   "hfov": 22.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.97
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE, this.camera_F6BB9414_CAD8_3A98_41D4_A38639127FA9); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E315FCF6_C635_5194_41B1_CD06A276B49E",
   "pitch": -17.97,
   "yaw": 179.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.98,
   "distance": 100
  }
 ],
 "id": "overlay_EE45E763_C66B_D0AC_41DF_7D31E6217050",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.08,
   "hfov": 11.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.52
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 192
     }
    ]
   },
   "pitch": 5.52,
   "yaw": -29.08,
   "distance": 50
  }
 ],
 "id": "overlay_DE194FBE_CA90_F1E8_41DD_99FD2C3A0438",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.43,
   "hfov": 11.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.31
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 192
     }
    ]
   },
   "pitch": -0.31,
   "yaw": 23.43,
   "distance": 50
  }
 ],
 "id": "overlay_DE720DBC_CA93_11EF_41B6_F9D7E8FF7F31",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.98,
   "hfov": 11.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.15
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 192
     }
    ]
   },
   "pitch": -6.15,
   "yaw": -164.98,
   "distance": 50
  }
 ],
 "id": "overlay_DE34627C_CA93_736F_41B0_57EDE2C12EDB",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.55,
   "hfov": 23.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -13.44
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C, this.camera_F6B70408_CAD8_3A88_41E7_77C4734CED43); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_ED9C5671_CAB8_6698_41C8_0473728CDE8C",
   "pitch": -13.44,
   "yaw": 122.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.49,
   "distance": 100
  }
 ],
 "id": "overlay_DEEA4EAD_CA93_33E9_41E7_7BF02C19FBF2",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.35,
   "hfov": 26.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.6
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C, this.camera_F1C7F37A_CAD8_3E88_41D3_70903E0CC304); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30D0CE8_C635_51BC_41E3_46EE50F2B894",
   "pitch": -21.6,
   "yaw": -13.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.03,
   "distance": 100
  }
 ],
 "id": "overlay_D198D684_C62F_D075_41DE_79D8A3859959",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.39,
   "hfov": 22.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -20.71
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF62C332_C435_062F_41D5_817A78857EF1, this.camera_F1CA0386_CAD8_3E7B_41E8_681F98E6752D); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E30C9CE9_C635_51BC_41B1_1214FC41AB2D",
   "pitch": -20.71,
   "yaw": 170.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.59,
   "distance": 100
  }
 ],
 "id": "overlay_D1FE4F8D_C62F_3077_41D9_21E0D800487C",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.32,
   "hfov": 5.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -3.84
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 88,
      "height": 97
     }
    ]
   },
   "pitch": -3.84,
   "yaw": 87.32,
   "distance": 50
  }
 ],
 "id": "overlay_DE8CDBAB_CAF3_31E9_41C1_022D103E4E7C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.49,
   "hfov": 23.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -15.01
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F, this.camera_F6877438_CAD8_3A88_41E8_0BC43598F6F0); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_DFFF2C51_C5D1_C980_41CE_5CB3D1BEC6A5",
   "pitch": -15.01,
   "yaw": -71.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.33,
   "distance": 100
  }
 ],
 "id": "overlay_D2FCEF54_C472_4782_41BB_5808F1697666",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.04,
   "hfov": 23.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.69
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE, this.camera_F692142C_CAD8_3A88_41DF_7D758A217CAE); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_DFFEEC51_C5D1_C980_41E3_4659F4038C20",
   "pitch": -17.69,
   "yaw": 91.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.01,
   "distance": 100
  }
 ],
 "id": "overlay_D2475404_C476_D981_41E3_33485B94FED6",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.62,
   "hfov": 20.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 113,
      "height": 200
     }
    ]
   },
   "pitch": -7.95
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 358,
      "height": 633
     }
    ]
   },
   "pitch": -7.95,
   "roll": 0,
   "yaw": 13.62,
   "distance": 50
  }
 ],
 "id": "overlay_EB6B4D26_C6F5_F0B5_41C9_D4CABC67AD05",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.22,
   "hfov": 5.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -9.35
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 101,
      "height": 92
     }
    ]
   },
   "pitch": -9.35,
   "yaw": 13.22,
   "distance": 50
  }
 ],
 "id": "overlay_E00F195C_C6F7_3094_41B0_8AD5AC00D540",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.41,
   "hfov": 5.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 35.27
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 104,
      "height": 90
     }
    ]
   },
   "pitch": 35.27,
   "yaw": 48.41,
   "distance": 50
  }
 ],
 "id": "overlay_EA689C14_C6F7_D095_41DD_ED44E62B7063",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.34,
   "hfov": 13.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 54,
      "height": 16
     }
    ]
   },
   "pitch": -4.24
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 236,
      "height": 69
     }
    ]
   },
   "pitch": -4.24,
   "yaw": 13.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.96,
   "distance": 50
  }
 ],
 "id": "overlay_D8C5E23E_CA91_12E8_41E0_1BA8B83DCE71",
 "data": {
  "label": "Waiting Room"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.34,
   "hfov": 16.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 74,
      "height": 16
     }
    ]
   },
   "pitch": 30.54
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 323,
      "height": 69
     }
    ]
   },
   "pitch": 30.54,
   "yaw": 47.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.51,
   "distance": 50
  }
 ],
 "id": "overlay_D9478B72_CA97_117B_41D8_F822FA8D5738",
 "data": {
  "label": "Reservation office"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.37,
   "hfov": 22.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.4
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B, this.camera_F1EF5362_CAD8_3EB8_41CF_87F193837674); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3012CDB_C635_519C_41E1_01092CD4D64C",
   "pitch": -21.4,
   "yaw": -2.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.49,
   "distance": 100
  }
 ],
 "id": "overlay_D4AE1CA6_C5EB_51B4_41D4_F964955AEAD3",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.52,
   "hfov": 22.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -19
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247, this.camera_F1D3A36F_CAD8_3E88_41DE_C8A1431CF2BE); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3009CDC_C635_5194_41A0_690424C85ED8",
   "pitch": -19,
   "yaw": 179.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.84,
   "distance": 100
  }
 ],
 "id": "overlay_D447FEA6_C5EB_71B5_41E0_1B287DB1F05B",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.06,
   "hfov": 17.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -16.42
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332, this.camera_F9E85760_CAD8_26B7_41E3_AA6843B26B9F); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E300ECDD_C635_5194_41DC_0D4295B4EE7E",
   "pitch": -16.42,
   "yaw": -2.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.32,
   "distance": 100
  }
 ],
 "id": "overlay_D7B7F13E_C5EF_F094_41E3_4FD2B577003F",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.66,
   "hfov": 23.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -14.76
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314, this.camera_F9DCA777_CAD8_2698_41DB_56705D924667); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3001CDD_C635_5194_41E3_C1DFE861FFB1",
   "pitch": -14.76,
   "yaw": 179.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.04,
   "distance": 100
  }
 ],
 "id": "overlay_D7EFDD23_C5ED_70B3_41D3_BE70D16BFE09",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.09,
   "hfov": 19.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -35.4
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF, this.camera_F9C56783_CAD8_2678_41DA_BAB6A37F67C4); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E3005CDE_C635_5194_41D4_98082FB15EA0",
   "pitch": -35.4,
   "yaw": 39.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.69,
   "distance": 50
  }
 ],
 "id": "overlay_D6559738_C5EB_709C_41E7_872971E0D21B",
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.03,
   "hfov": 9.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 15
     }
    ]
   },
   "pitch": -7.86
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 170,
      "height": 161
     }
    ]
   },
   "pitch": -7.86,
   "yaw": -63.03,
   "distance": 50
  }
 ],
 "id": "overlay_D6F65F43_C5D7_50EC_41C0_17999BCDA017",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.22,
   "hfov": 2.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": -10.21
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 46
     }
    ]
   },
   "pitch": -10.21,
   "yaw": -27.22,
   "distance": 50
  }
 ],
 "id": "overlay_D18F6619_C5D7_D09F_41D0_A2E9B71311D2",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.11,
   "hfov": 16.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 63,
      "height": 16
     }
    ]
   },
   "pitch": -15.25
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 292,
      "height": 74
     }
    ]
   },
   "pitch": -15.25,
   "yaw": -62.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.69,
   "distance": 50
  }
 ],
 "id": "overlay_D8DB7DA7_CAF3_1199_41DC_682262961E99",
 "data": {
  "label": "Exotic BIRD PARK"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.89,
   "hfov": 15.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 75,
      "height": 16
     }
    ]
   },
   "pitch": -39.77
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 348,
      "height": 74
     }
    ]
   },
   "pitch": -39.77,
   "yaw": 35.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.87,
   "distance": 50
  }
 ],
 "id": "overlay_D90461D9_CAF7_31A8_41E3_4FF345997AFD",
 "data": {
  "label": "WAY TO NAALUKETTU"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.6,
   "hfov": 10.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.37
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B, this.camera_F8849555_CAD8_3A98_41CF_867138094A5E); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 175
     }
    ]
   },
   "pitch": -7.37,
   "yaw": 3.6,
   "distance": 50
  }
 ],
 "id": "overlay_E321FF80_C66B_306C_41C3_9841F53B664B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.13,
   "hfov": 21.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -25.72
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D, this.camera_F89D0549_CAD8_3A89_41CA_5B85A2886BD8); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_E314ACF7_C635_5194_41E6_C6E1A97B8BBA",
   "pitch": -25.72,
   "yaw": -179.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.76,
   "distance": 100
  }
 ],
 "id": "overlay_E575355C_C66B_5094_41DC_F77047FEA319",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "layout": "horizontal",
 "right": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "height": 110,
 "minWidth": 1,
 "overflow": "visible",
 "propagateClick": true,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver"
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "layout": "vertical",
 "right": "0%",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "91.304%",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "height": "85.959%",
 "minWidth": 1,
 "class": "Container",
 "overflow": "scroll",
 "bottom": "0%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 3,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Label_ED4090E9_CAC8_3B88_41B5_AA7FECE2A264",
 "left": "0%",
 "fontFamily": "Bebas Neue",
 "width": "89.23%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "text": "THANIMA FARM LIFE",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "class": "Label",
 "height": "63.114%",
 "textShadowHorizontalLength": 4,
 "minWidth": 1,
 "textShadowBlurRadius": 8,
 "fontSize": "10.54vmin",
 "propagateClick": false,
 "borderSize": 0,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "data": {
  "name": "Label25748"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "paddingTop": 0,
 "fontWeight": "normal",
 "textShadowColor": "#000000",
 "textDecoration": "none",
 "textShadowVerticalLength": 1,
 "textShadowOpacity": 0.62
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "right": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "height": 2,
 "minWidth": 1,
 "class": "Image",
 "bottom": 53,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "white line"
 },
 "shadow": false,
 "scaleMode": "fit_outside",
 "paddingTop": 0
},
{
 "children": [
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_D9C9028F_CA78_3F89_41E7_95C007ED2E16"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 30,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "height": 51,
 "minWidth": 1,
 "class": "Container",
 "overflow": "scroll",
 "bottom": "0%",
 "borderSize": 0,
 "scrollBarWidth": 10,
 "gap": 3,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set container"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "shadowSpread": 1,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "right": "10%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "class": "Container",
 "top": "5%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "5%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver"
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "layout": "vertical",
 "right": "10%",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "minWidth": 1,
 "class": "Container",
 "overflow": "visible",
 "bottom": "80%",
 "borderSize": 0,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "shadowSpread": 1,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "right": "10%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "class": "Container",
 "top": "5%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "5%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver"
},
{
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "layout": "vertical",
 "right": "10%",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "minWidth": 1,
 "class": "Container",
 "overflow": "visible",
 "bottom": "80%",
 "borderSize": 0,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowBlurRadius": 25,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "class": "Container",
 "top": "7%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "7%",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver"
},
{
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "shadowSpread": 1,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "right": "10%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "top": "5%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "5%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver"
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "layout": "vertical",
 "right": "10%",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "propagateClick": false,
 "minWidth": 1,
 "class": "Container",
 "overflow": "visible",
 "bottom": "80%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowBlurRadius": 25,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "top": "7%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "7%",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver"
},
{
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowBlurRadius": 25,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "class": "Container",
 "top": "7%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "7%",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver"
},
{
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowBlurRadius": 25,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "class": "Container",
 "top": "7%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "7%",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver"
},
{
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "shadowSpread": 1,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "right": "10%",
 "shadowHorizontalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "top": "5%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "5%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver"
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "layout": "vertical",
 "right": "10%",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "propagateClick": false,
 "minWidth": 1,
 "class": "Container",
 "overflow": "visible",
 "bottom": "80%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ED96566B_CAB8_6688_41C1_59579A79BC14",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3174CF5_C635_5194_41E8_22424F154EA5",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E316DCF6_C635_5194_41E2_DB6CC50DD95A",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30B3CEC_C635_51B4_41E6_00898F03BDBB",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30B5CED_C635_51B4_41D3_C6E09675817F",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30DCCE4_C635_51B4_41DF_33E432594D32",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30E8CE5_C635_51B4_41E4_1B279E0D5AFF",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30E1CE6_C635_51B4_41E6_3F6CED617E39",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ED90C66F_CAB8_6688_41E5_3D746F235976",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E308ECF2_C635_51AC_41DE_D207B33B2068",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3080CF3_C635_51AC_41DF_0B3EDDA8AEF7",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3020CD9_C635_519C_41D3_6909540D203F",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E301BCD9_C635_519C_41BF_0957EA736A16",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E301ECDA_C635_519C_41E5_15D246E991BD",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30A1CEE_C635_51B4_41C3_7359C7470260",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E309ECF0_C635_51AC_41E8_BD19E1EA98D4",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_DFFE1C52_C5D1_C980_4195_5D5B4BECA039",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_DFFDBC52_C5D1_C980_41E7_08BAF3D10062",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E305ECD2_C635_51EC_41D4_E7452BFCF25C",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ED90766F_CAB8_6688_41E3_3774368F5A76",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_DFFEBC51_C5D1_C980_41D3_520F03209C17",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_DFFE4C51_C5D1_C980_41E6_6646EF1169A1",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ED8D3668_CAB8_66B7_41D1_81024BBDA74D",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30EBCE0_C635_51AC_41C9_A0D866B5C07C",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30EECE1_C635_51AC_41E6_1E6A219CD8A7",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E302BCD7_C635_5194_41E3_9C47639F2A03",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E302FCD8_C635_519C_41D6_9D6A8127E5A9",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D1CC8EC4_C432_C680_41C5_FB1BC1C1FB43",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30CCCEA_C635_51BC_41D8_0674FB2DFBA5",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30C6CEA_C635_51BC_41C2_67B37B4118B0",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ED811665_CAB8_66B9_41E0_DAEF9E9E7306",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D1CDCEC6_C432_C680_41C6_982C6702FF96",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30E5CE6_C635_51B4_4185_2793AF613292",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30DECE7_C635_51B4_41BD_705D1F0A1A72",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EDAE967B_CAB8_6688_41CB_37A529B131CC",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 900
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3138CFA_C635_519C_41C2_663FB008BA9F",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 900
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EDAE067C_CAB8_6688_41E0_024D49EE324E",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EDAD467C_CAB8_6688_41C0_A7883B2B0471",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 900
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_FBB02C69_CAF8_6A88_41B6_6E5709BDBB32",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3056CD3_C635_51EC_41DF_DDE5792A259A",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3049CD3_C635_51EC_41D6_2B9B416636EB",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EDAF667B_CAB8_6688_41E2_78973F639518",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D1CD8EC6_C432_C680_41C8_F1B2D3BEEB14",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_D1C26EC7_C432_C680_41B2_45BBE73514B6",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3137CF9_C635_519C_41DB_27C612A8FA21",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E312ACF9_C635_519C_41E3_49790B3AF937",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ED97166B_CAB8_6688_41D3_6A76981E5855",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ED96F66B_CAB8_6688_41E3_EC91EE14685C",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30A9CEE_C635_51B4_4190_DB20D3BBA130",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E629C2A6_CAC9_DFB8_41D8_3D14728546FD",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3090CF1_C635_51AC_41E6_39EE0495F541",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ED997673_CAB8_6698_41C0_B39E2814637A",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30E0CE2_C635_51AC_41D9_26FD6245DA7F",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30DACE3_C635_51AC_41C2_78F7E041C5DD",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ED92066E_CAB8_6688_41D5_7C9A26F5F5EE",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 900
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3165CF6_C635_5194_41E5_E1F4DF3BBA27",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E315FCF6_C635_5194_41B1_CD06A276B49E",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ED9C5671_CAB8_6698_41C8_0473728CDE8C",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30D0CE8_C635_51BC_41E3_46EE50F2B894",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E30C9CE9_C635_51BC_41B1_1214FC41AB2D",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_DFFF2C51_C5D1_C980_41CE_5CB3D1BEC6A5",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_DFFEEC51_C5D1_C980_41E3_4659F4038C20",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3012CDB_C635_519C_41E1_01092CD4D64C",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3009CDC_C635_5194_41A0_690424C85ED8",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E300ECDD_C635_5194_41DC_0D4295B4EE7E",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3001CDD_C635_5194_41E3_C1DFE861FFB1",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E3005CDE_C635_5194_41D4_98082FB15EA0",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_E314ACF7_C635_5194_41E6_C6E1A97B8BBA",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780
  }
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "propagateClick": true,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "propagateClick": true,
 "borderSize": 0,
 "click": "this.shareTwitter(window.location.href)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "propagateClick": true,
 "borderSize": 0,
 "click": "this.shareFacebook(window.location.href)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "shadowSpread": 1,
 "width": 45.2,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Montserrat",
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "iconWidth": 32,
 "class": "Button",
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "LIST",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "fontStyle": "normal",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button panorama list"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none"
},
{
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "shadowSpread": 1,
 "width": 83.6,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Montserrat",
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "iconWidth": 32,
 "class": "Button",
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "LOCATION",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "fontStyle": "normal",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button location"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none"
},
{
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "shadowSpread": 1,
 "width": 103,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Montserrat",
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "iconWidth": 32,
 "class": "Button",
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "ACTIVITIES",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "fontStyle": "normal",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button floorplan"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none"
},
{
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "shadowSpread": 1,
 "width": 112,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Montserrat",
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "iconWidth": 32,
 "class": "Button",
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "PHOTOALBUM",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "fontStyle": "normal",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button photoalbum"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none"
},
{
 "id": "Button_D9C9028F_CA78_3F89_41E7_95C007ED2E16",
 "shadowSpread": 1,
 "width": 87.2,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Montserrat",
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "iconWidth": 32,
 "class": "Button",
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "ABOUT US",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "rollOverBackgroundColor": [
  "#009933"
 ],
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "fontStyle": "normal",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button photoalbum"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none"
},
{
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "layout": "absolute",
 "contentOpaque": false,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "width": "85%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "layout": "vertical",
 "contentOpaque": false,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "width": "50%",
 "paddingRight": 50,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "paddingLeft": 50,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#0069A3"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "propagateClick": false,
 "transparencyActive": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "layout": "absolute",
 "contentOpaque": false,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "width": "85%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "layout": "vertical",
 "contentOpaque": false,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "width": "50%",
 "paddingRight": 50,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "paddingLeft": 50,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#0069A3"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "width": "25%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "propagateClick": false,
 "transparencyActive": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "layout": "absolute",
 "contentOpaque": false,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "itemHeight": 156,
 "itemLabelFontWeight": "normal",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "rollOverItemThumbnailShadow": true,
 "paddingBottom": 70,
 "itemThumbnailScaleMode": "fit_outside",
 "width": "100%",
 "itemLabelFontSize": 14,
 "borderRadius": 5,
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "itemLabelFontColor": "#666666",
 "class": "ThumbnailGrid",
 "paddingLeft": 70,
 "backgroundColor": [
  "#000000"
 ],
 "itemBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "itemMinWidth": 50,
 "height": "100%",
 "rollOverItemLabelFontColor": "#04A3E1",
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "itemThumbnailHeight": 125,
 "itemPaddingBottom": 3,
 "itemBackgroundOpacity": 0,
 "borderSize": 0,
 "itemLabelFontStyle": "normal",
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "gap": 26,
 "shadow": false,
 "itemOpacity": 1,
 "itemLabelHorizontalAlign": "center",
 "paddingTop": 10,
 "itemMode": "normal",
 "itemVerticalAlign": "top",
 "itemLabelFontFamily": "Montserrat",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemThumbnailWidth": 220,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "backgroundOpacity": 0.05,
 "itemPaddingLeft": 3,
 "paddingRight": 70,
 "itemLabelPosition": "bottom",
 "propagateClick": false,
 "selectedItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemHorizontalAlign": "center",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColor": [],
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "selectedItemLabelFontWeight": "bold",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailShadow": false,
 "itemWidth": 220,
 "itemLabelTextDecoration": "none",
 "itemMinHeight": 50
},
{
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "layout": "absolute",
 "contentOpaque": false,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "width": "85%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "layout": "vertical",
 "contentOpaque": false,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "width": "15%",
 "paddingRight": 50,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 400,
 "paddingLeft": 50,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#0069A3"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "propagateClick": false,
 "transparencyActive": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "layout": "absolute",
 "contentOpaque": false,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "id": "MapViewer",
 "toolTipBorderSize": 1,
 "progressBorderSize": 0,
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "width": "100%",
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 10,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "minHeight": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "paddingLeft": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "height": "100%",
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "9px",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "shadow": false,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "paddingTop": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "transitionMode": "blending",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Bebas Neue",
 "vrPointerSelectionColor": "#009933",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF"
},
{
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "layout": "absolute",
 "contentOpaque": false,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "layout": "absolute",
 "contentOpaque": false,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "layout": "absolute",
 "contentOpaque": false,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "layout": "absolute",
 "contentOpaque": false,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "width": "55%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "layout": "vertical",
 "contentOpaque": false,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "width": "45%",
 "paddingRight": 60,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "paddingLeft": 60,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#0069A3"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "propagateClick": false,
 "transparencyActive": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "class": "Image",
 "height": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "scaleMode": "fit_outside",
 "paddingTop": 0
},
{
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "layout": "vertical",
 "contentOpaque": false,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 520,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "paddingLeft": 0,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C"
},
{
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipBorderSize": 1,
 "progressBorderSize": 0,
 "toolTipPaddingTop": 7,
 "right": 0,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 10,
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "9px",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "shadow": false,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "paddingTop": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Bebas Neue",
 "bottom": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#009933",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Viewer info 1"
 },
 "vrPointerColor": "#FFFFFF"
},
{
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "class": "Container",
 "height": "100%",
 "minWidth": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container arrows"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "layout": "vertical",
 "contentOpaque": false,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 520,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "paddingLeft": 0,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C"
},
{
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "right": 20,
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "class": "IconButton",
 "paddingLeft": 0,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderRadius": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "right": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "url": "https://www.google.com/maps/place/Thanima+Farm+Life/@10.7207995,76.7981594,689m/data=!3m2!1e3!4b1!4m9!3m8!1s0x3ba86be4a763fbb3:0x930fcab3fc8d93cb!5m2!4m1!1i2!8m2!3d10.7207995!4d76.7981594!16s%2Fg%2F11t71pdl9r?entry=ttu",
 "paddingRight": 0,
 "minHeight": 1,
 "class": "WebFrame",
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "insetBorder": false,
 "backgroundColorRatios": [
  0
 ],
 "bottom": "0%",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollEnabled": true
},
{
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "layout": "vertical",
 "contentOpaque": false,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 520,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "paddingLeft": 0,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C"
},
{
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "right": 20,
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "class": "IconButton",
 "paddingLeft": 0,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderRadius": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "right": 20,
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "class": "IconButton",
 "paddingLeft": 0,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "borderRadius": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipBorderSize": 1,
 "progressBorderSize": 0,
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "width": "100%",
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 10,
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderRadius": 0,
 "paddingLeft": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "height": "100%",
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "9px",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "shadow": false,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "paddingTop": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": "0%",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Bebas Neue",
 "vrPointerSelectionColor": "#009933",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "vrPointerColor": "#FFFFFF"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "width": "14.22%",
 "paddingBottom": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingLeft": 0,
 "top": "20%",
 "propagateClick": false,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "bottom": "20%",
 "transparencyActive": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "right": 10,
 "width": "14.22%",
 "paddingBottom": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingLeft": 0,
 "top": "20%",
 "propagateClick": false,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "bottom": "20%",
 "transparencyActive": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipBorderSize": 1,
 "progressBorderSize": 0,
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "width": "100%",
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 10,
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderRadius": 0,
 "paddingLeft": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "height": "100%",
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "9px",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "shadow": false,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "paddingTop": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "top": "0%",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Bebas Neue",
 "vrPointerSelectionColor": "#009933",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "vrPointerColor": "#FFFFFF"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "paddingBottom": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingLeft": 0,
 "top": "20%",
 "propagateClick": false,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "bottom": "20%",
 "transparencyActive": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "right": 10,
 "width": "14.22%",
 "paddingBottom": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "paddingLeft": 0,
 "top": "20%",
 "propagateClick": false,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "bottom": "20%",
 "transparencyActive": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "right": 20,
 "width": "10%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "class": "IconButton",
 "paddingLeft": 0,
 "top": 20,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderRadius": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "class": "Image",
 "height": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "scaleMode": "fit_outside",
 "paddingTop": 0
},
{
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "layout": "vertical",
 "contentOpaque": false,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 520,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "paddingLeft": 0,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C"
},
{
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "minHeight": 1,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingLeft": 10,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.53vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.33vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.62vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1"
},
{
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "shadowSpread": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Bebas Neue Bold",
 "width": "46%",
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "Button",
 "iconWidth": 32,
 "propagateClick": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "height": "9%",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "data": {
  "name": "Button"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "paddingTop": 0,
 "fontWeight": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none"
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "width": "12%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 70,
 "class": "IconButton",
 "height": "8%",
 "minWidth": 70,
 "mode": "push",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "propagateClick": false,
 "transparencyActive": true,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "80%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "class": "Container",
 "height": "30%",
 "minWidth": 1,
 "paddingLeft": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container separator"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "width": "12%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 70,
 "class": "IconButton",
 "height": "8%",
 "minWidth": 70,
 "mode": "push",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "propagateClick": false,
 "transparencyActive": true,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "minHeight": 1,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingLeft": 10,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.53vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.33vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1"
},
{
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "shadowSpread": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Bebas Neue Bold",
 "width": "46%",
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "Button",
 "iconWidth": 32,
 "propagateClick": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "height": "9%",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "data": {
  "name": "Button"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "paddingTop": 0,
 "fontWeight": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none"
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "minHeight": 1,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingLeft": 10,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.53vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1"
},
{
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "shadowSpread": 1,
 "width": 207,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "class": "Button",
 "paddingLeft": 0,
 "iconWidth": 32,
 "propagateClick": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "height": 59,
 "fontSize": 34,
 "label": "lorem ipsum",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "fontWeight": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none"
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "minHeight": 1,
 "class": "HTMLText",
 "height": "45%",
 "minWidth": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.53vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.08vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1"
},
{
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "layout": "horizontal",
 "contentOpaque": false,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "height": "80%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "borderSize": 0,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "class": "Image",
 "height": "100%",
 "minWidth": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "borderSize": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "agent photo"
 },
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "75%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "minHeight": 1,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingLeft": 10,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.74vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.74vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.74vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1"
}],
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();

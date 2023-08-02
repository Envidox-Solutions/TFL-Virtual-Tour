(function(){
    var script = {
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
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
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": "100%",
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "paddingRight": 0,
 "downloadEnabled": false,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "desktopMipmappingEnabled": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "borderSize": 0,
 "overflow": "visible",
 "definitions": [{
 "partial": false,
 "label": "5",
 "id": "panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068",
 "hfovMin": "135%",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 179.81,
   "panorama": "this.panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C",
   "backwardYaw": 93.02,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -1.31,
   "panorama": "this.panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2",
   "backwardYaw": -167.12,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "pitch": 0,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
  "this.overlay_A2661FF8_B6C2_F252_41DC_0584A89B5A9F",
  "this.overlay_A28A07F4_B6C3_7252_41A3_E0780D767816"
 ],
 "thumbnailUrl": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51",
   "camera": "this.panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C",
   "camera": "this.panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_BA594147_B6C3_8FBD_41D1_7071E3278573",
   "camera": "this.panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C",
   "camera": "this.panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068",
   "camera": "this.panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2",
   "camera": "this.panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "id": "window_A2B7FE71_B6C2_9252_41E5_3671D6E2F2BC",
 "headerBackgroundColorDirection": "vertical",
 "width": 400,
 "shadowBlurRadius": 6,
 "footerBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "titleFontFamily": "Arial",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "verticalAlign": "middle",
 "borderRadius": 5,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "bodyPaddingBottom": 5,
 "modal": true,
 "bodyPaddingLeft": 5,
 "titleTextDecoration": "none",
 "backgroundColor": [],
 "headerPaddingTop": 10,
 "minWidth": 20,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "height": 600,
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "backgroundColorRatios": [],
 "title": "",
 "class": "Window",
 "scrollBarWidth": 10,
 "closeButtonBackgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "gap": 10,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "scrollBarColor": "#000000",
 "headerPaddingLeft": 10,
 "paddingTop": 0,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "titlePaddingTop": 5,
 "bodyPaddingTop": 5,
 "headerPaddingRight": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowVerticalLength": 0,
 "bodyBorderColor": "#006633",
 "shadowSpread": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "children": [
  "this.htmlText_A2A93E71_B6C2_9252_41C9_27634A1EF175"
 ],
 "headerBorderColor": "#000000",
 "shadowColor": "#000000",
 "veilColorDirection": "horizontal",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconWidth": 12,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 1,
 "titleFontWeight": "normal",
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "bodyPaddingRight": 5,
 "footerHeight": 5,
 "bodyBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "closeButtonIconColor": "#000000",
 "veilOpacity": 0.4,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "overflow": "scroll",
 "closeButtonBackgroundColor": [],
 "shadowHorizontalLength": 3,
 "titlePaddingLeft": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundOpacity": 1,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "data": {
  "name": "Window16863"
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "titlePaddingBottom": 5,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "titleFontStyle": "normal"
},
{
 "duration": 5000,
 "label": "0001",
 "id": "photo_A3A88841_B6FE_9DB5_41E1_6644B3C5B657",
 "width": 1920,
 "thumbnailUrl": "media/photo_A3A88841_B6FE_9DB5_41E1_6644B3C5B657_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_A3A88841_B6FE_9DB5_41E1_6644B3C5B657.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 1080
},
{
 "initialPosition": {
  "yaw": -86.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AC545423_B6C3_95F6_41D7_F5A88E8DD700",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "label": "4",
 "id": "panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C",
 "hfovMin": "135%",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -72.52,
   "panorama": "this.panorama_BA594147_B6C3_8FBD_41D1_7071E3278573",
   "backwardYaw": 5.32,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": 93.02,
   "panorama": "this.panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068",
   "backwardYaw": 179.81,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "pitch": 0,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
  "this.overlay_A0300347_B6C2_93BE_41AE_8F113B59257B",
  "this.overlay_A3FFFC91_B6C5_B6D2_41A4_AEF059D1F933",
  "this.overlay_A2A8926A_B6C3_B276_41E5_37A441A7C28E",
  "this.overlay_A2D7DC5D_B6C2_F64D_41D3_3F0BBAC7DCA6"
 ],
 "thumbnailUrl": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -0.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AC8FD3E1_B6C3_9272_41D2_9B6F7F8E703B",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "id": "window_A2729C69_B6FD_B672_41E2_475B0E751EBA",
 "headerBackgroundColorDirection": "vertical",
 "width": 1000,
 "shadowBlurRadius": 6,
 "footerBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "titlePaddingRight": 5,
 "contentOpaque": false,
 "headerBorderSize": 0,
 "titleFontFamily": "Arial",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "closeButtonPaddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 5,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "bodyPaddingBottom": 5,
 "modal": true,
 "bodyPaddingLeft": 5,
 "titleTextDecoration": "none",
 "backgroundColor": [],
 "headerPaddingTop": 10,
 "minWidth": 20,
 "closeButtonBackgroundOpacity": 1,
 "height": 400,
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "title": "",
 "class": "Window",
 "closeButtonPaddingLeft": 0,
 "scrollBarWidth": 10,
 "closeButtonBackgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "gap": 10,
 "bodyBorderSize": 0,
 "closeButtonPaddingRight": 0,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "scrollBarColor": "#000000",
 "headerPaddingLeft": 10,
 "paddingTop": 0,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "titlePaddingTop": 5,
 "bodyPaddingTop": 5,
 "headerPaddingRight": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "shadowVerticalLength": 0,
 "bodyBorderColor": "#000000",
 "shadowSpread": 1,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "children": [
  "this.htmlText_A26CDC69_B6FD_B672_41D9_04A28D3864DE",
  "this.image_uidAC9BF3BD_B6C3_92D2_41D6_F2E067A6C975_1"
 ],
 "headerBorderColor": "#000000",
 "shadowColor": "#000000",
 "veilColorDirection": "horizontal",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconWidth": 12,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 1,
 "titleFontWeight": "normal",
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "bodyPaddingRight": 5,
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "closeButtonPaddingTop": 0,
 "propagateClick": false,
 "closeButtonIconColor": "#000000",
 "veilOpacity": 0.4,
 "closeButtonBorderColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerVerticalAlign": "middle",
 "overflow": "scroll",
 "footerBorderColor": "#000000",
 "closeButtonBackgroundColor": [],
 "shadowHorizontalLength": 3,
 "titlePaddingLeft": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundOpacity": 1,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "data": {
  "name": "Window20312"
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "horizontal",
 "titlePaddingBottom": 5,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "titleFontStyle": "normal"
},
{
 "initialPosition": {
  "yaw": -1.63,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AC7C63FA_B6C3_9256_41E2_924A66B0DE33",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "label": "2",
 "id": "panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C",
 "hfovMin": "135%",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 178.37,
   "panorama": "this.panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51",
   "backwardYaw": -12.8,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -5.6,
   "panorama": "this.panorama_BA594147_B6C3_8FBD_41D1_7071E3278573",
   "backwardYaw": -173.48,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "pitch": 0,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
  "this.overlay_A645B248_B6CF_8DB3_41D1_5818A5E9B86A",
  "this.overlay_A6BAA4BC_B6CD_F6D2_41C8_6CA668EE7636"
 ],
 "thumbnailUrl": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -17.16,
  "hfov": 104,
  "class": "PanoramaCameraPosition",
  "pitch": 3.35
 },
 "class": "PanoramaCamera",
 "id": "panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 12.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AC5F6430_B6C3_95D2_41E0_996BBAE6ED2F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 174.4,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AC6B8415_B6C3_95D2_41E5_2008823372A1",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "label": "IMG_20230801_110523_00_007",
 "id": "panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51",
 "hfovMin": "153%",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -12.8,
   "panorama": "this.panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C",
   "backwardYaw": 178.37,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "pitch": 0,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
  "this.overlay_B9846F88_B6C2_B2B2_41E6_C8809B09FE80",
  "this.overlay_A790C9BB_B6C5_BED6_41E0_0406BFD0857A"
 ],
 "thumbnailUrl": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 167.2,
  "hfov": 104,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AC4A643D_B6C3_95D2_41E2_EF9D13B718EE",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -174.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AC8883D5_B6C3_9252_41BB_695DEA3F46DA",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "label": "6",
 "id": "panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2",
 "hfovMin": "135%",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -167.12,
   "panorama": "this.panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068",
   "backwardYaw": -1.31,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "pitch": 0,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
  "this.overlay_A2496D1D_B6C7_97D2_41D2_98FD1A1013C2",
  "this.overlay_A251C7D6_B6C6_925E_41E2_C05BE3E58E58"
 ],
 "thumbnailUrl": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -20.06,
  "class": "PanoramaCameraPosition",
  "pitch": -0.43
 },
 "class": "PanoramaCamera",
 "id": "panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 6.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AC34944A_B6C3_95B6_41DB_3BF5FFABB9C7",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 178.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AC75D3ED_B6C3_9272_41D7_0B967AEC520A",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51",
   "camera": "this.panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C",
   "camera": "this.panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_BA594147_B6C3_8FBD_41D1_7071E3278573",
   "camera": "this.panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C",
   "camera": "this.panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068",
   "camera": "this.panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 107.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AC621407_B6C3_95BE_419F_0487839E623C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer"
},
{
 "partial": false,
 "label": "3",
 "id": "panorama_BA594147_B6C3_8FBD_41D1_7071E3278573",
 "hfovMin": "135%",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 5.32,
   "panorama": "this.panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C",
   "backwardYaw": -72.52,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "yaw": -173.48,
   "panorama": "this.panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C",
   "backwardYaw": -5.6,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "pitch": 0,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
  "this.overlay_A5484FED_B6C5_924D_41DA_D6F12B2C1518",
  "this.overlay_A5885BDD_B6C3_7252_41D2_65BB8AC0B726",
  "this.overlay_A5DD22DF_B6C2_924D_41CB_1BAA0C1030A4",
  "this.overlay_A25E10FD_B6CE_8E52_41DE_359CC294076F"
 ],
 "thumbnailUrl": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_t.jpg",
 "hfov": 360
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
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
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
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
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
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "top": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
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
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF"
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
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
 "propagateClick": true,
 "height": 641,
 "minWidth": 1,
 "overflow": "scroll",
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "layout": "absolute",
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
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 573,
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
 "propagateClick": true,
 "height": 133,
 "minWidth": 1,
 "overflow": "visible",
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "layout": "absolute",
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
 "overflow": "visible",
 "bottom": 0,
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "layout": "absolute",
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
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
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
 "scrollBarColor": "#000000",
 "layout": "absolute"
},
{
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
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
 "scrollBarColor": "#000000",
 "layout": "absolute"
},
{
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
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
 "scrollBarColor": "#000000",
 "layout": "absolute"
},
{
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
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
 "scrollBarColor": "#000000",
 "layout": "absolute"
},
{
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
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
 "scrollBarColor": "#000000",
 "layout": "absolute"
},
{
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
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
 "scrollBarColor": "#000000",
 "layout": "absolute"
},
{
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
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
 "scrollBarColor": "#000000",
 "layout": "absolute"
},
{
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
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
 "scrollBarColor": "#04A3E1",
 "layout": "absolute"
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
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "borderSize": 0,
 "class": "IconButton",
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
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "borderSize": 0,
 "class": "IconButton",
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
   "yaw": -1.31,
   "hfov": 23.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2, this.camera_AC5F6430_B6C3_95D2_41E0_996BBAE6ED2F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A27B8090_B6C3_8ED2_41DF_A29662C16750",
   "yaw": -1.31,
   "pitch": -17.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 23.07
  }
 ],
 "id": "overlay_A2661FF8_B6C2_F252_41DC_0584A89B5A9F",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 179.81,
   "hfov": 17.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -25.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C, this.camera_AC545423_B6C3_95F6_41D7_F5A88E8DD700); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A2445090_B6C3_8ED2_41D6_DF5A8B13A226",
   "yaw": 179.81,
   "pitch": -25.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 17.88
  }
 ],
 "id": "overlay_A28A07F4_B6C3_7252_41A3_E0780D767816",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_A2A93E71_B6C2_9252_41C9_27634A1EF175",
 "width": "100%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "minHeight": 0,
 "paddingLeft": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Registration info: </SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText16864"
 },
 "shadow": false,
 "paddingTop": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 13.73,
   "hfov": 20.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0_HS_0_1_0_map.gif",
      "width": 112,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0_HS_0_0.png",
      "width": 355,
      "height": 628,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.88,
   "yaw": 13.73,
   "hfov": 20.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A0300347_B6C2_93BE_41AE_8F113B59257B",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 13.9,
   "hfov": 4.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "rollOver": "this.showWindow(this.window_A2729C69_B6FD_B672_41E2_475B0E751EBA, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0_HS_1_0.png",
      "width": 75,
      "height": 79,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.83,
   "yaw": 13.9,
   "hfov": 4.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A3FFFC91_B6C5_B6D2_41A4_AEF059D1F933",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -72.52,
   "hfov": 23.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -13.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA594147_B6C3_8FBD_41D1_7071E3278573, this.camera_AC8883D5_B6C3_9252_41BB_695DEA3F46DA); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A27BF08F_B6C3_8ECE_41DB_4098B7645BB4",
   "yaw": -72.52,
   "pitch": -13.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 23.46
  }
 ],
 "id": "overlay_A2A8926A_B6C3_B276_41E5_37A441A7C28E",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 93.02,
   "hfov": 17.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0_HS_3_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -13.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068, this.camera_AC8FD3E1_B6C3_9272_41D2_9B6F7F8E703B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A27BA08F_B6C3_8ECE_41CA_E8BDA38979F7",
   "yaw": 93.02,
   "pitch": -13.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 17.55
  }
 ],
 "id": "overlay_A2D7DC5D_B6C2_F64D_41D3_3F0BBAC7DCA6",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_A26CDC69_B6FD_B672_41D9_04A28D3864DE",
 "width": "50%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "minHeight": 0,
 "paddingLeft": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">add an image and info </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">small exposure cleanup</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText20313"
 },
 "shadow": false,
 "paddingTop": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "image_uidAC9BF3BD_B6C3_92D2_41D6_F2E067A6C975_1",
 "width": "50%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "media/photo_A3A88841_B6FE_9DB5_41E1_6644B3C5B657.jpg",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "borderSize": 0,
 "class": "Image",
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image29253"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 178.37,
   "hfov": 24.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -25.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51, this.camera_AC4A643D_B6C3_95D2_41E2_EF9D13B718EE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A6559E03_B6C3_75B6_41A2_129491F67CA0",
   "yaw": 178.37,
   "pitch": -25.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 24.24
  }
 ],
 "id": "overlay_A645B248_B6CF_8DB3_41D1_5818A5E9B86A",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -5.6,
   "hfov": 20.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -30.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA594147_B6C3_8FBD_41D1_7071E3278573, this.camera_AC34944A_B6C3_95B6_41DB_3BF5FFABB9C7); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A6567E03_B6C3_75B6_41E1_D58EC5463598",
   "yaw": -5.6,
   "pitch": -30.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 20.72
  }
 ],
 "id": "overlay_A6BAA4BC_B6CD_F6D2_41C8_6CA668EE7636",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -12.8,
   "hfov": 23.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -13.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C, this.camera_AC7C63FA_B6C3_9256_41E2_924A66B0DE33); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Welcome\u000a",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC9943BC_B6C3_92D2_41DA_5C132595E7F0",
   "yaw": -12.8,
   "pitch": -13.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 23.45
  }
 ],
 "id": "overlay_B9846F88_B6C2_B2B2_41E6_C8809B09FE80",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -69.38,
   "hfov": 5.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0_HS_1_0.png",
      "width": 96,
      "height": 82,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.91,
   "yaw": -69.38,
   "hfov": 5.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A790C9BB_B6C5_BED6_41E0_0406BFD0857A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 14.58,
   "hfov": 23.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -14.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A2443090_B6C3_8ED2_41DC_027F8F41874B",
   "yaw": 14.58,
   "pitch": -14.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 23.34
  }
 ],
 "id": "overlay_A2496D1D_B6C7_97D2_41D2_98FD1A1013C2",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -167.12,
   "hfov": 22.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -22.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068, this.camera_AC75D3ED_B6C3_9272_41D7_0B967AEC520A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A245E090_B6C3_8ED2_41C7_B2FF5338CB37",
   "yaw": -167.12,
   "pitch": -22.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 22.24
  }
 ],
 "id": "overlay_A251C7D6_B6C6_925E_41E2_C05BE3E58E58",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
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
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "borderSize": 0,
 "class": "IconButton",
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
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "borderSize": 0,
 "class": "IconButton",
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
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "borderSize": 0,
 "class": "IconButton",
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
 "borderRadius": 0,
 "paddingLeft": 0,
 "propagateClick": true,
 "height": 75,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "bottom": 8,
 "borderSize": 0,
 "class": "IconButton",
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
   "yaw": 5.32,
   "hfov": 22.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -20.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C, this.camera_AC621407_B6C3_95BE_419F_0487839E623C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A27E8087_B6C3_8EBE_41C2_424C78081B6D",
   "yaw": 5.32,
   "pitch": -20.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 22.69
  }
 ],
 "id": "overlay_A5484FED_B6C5_924D_41DA_D6F12B2C1518",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -173.48,
   "hfov": 19.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -34.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C, this.camera_AC6B8415_B6C3_95D2_41E5_2008823372A1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A27E6087_B6C3_8EBE_41CA_FA5114852653",
   "yaw": -173.48,
   "pitch": -34.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 19.98
  }
 ],
 "id": "overlay_A5885BDD_B6C3_7252_41D2_65BB8AC0B726",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 69.67,
   "hfov": 8.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0_HS_2_1_0_map.gif",
      "width": 73,
      "height": 149,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0_HS_2_0.png",
      "width": 146,
      "height": 298,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.38,
   "yaw": 69.67,
   "hfov": 8.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A5DD22DF_B6C2_924D_41CB_1BAA0C1030A4",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 69.74,
   "hfov": 3.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0_HS_3_0_0_map.gif",
      "width": 22,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "rollOver": "this.showWindow(this.window_A2B7FE71_B6C2_9252_41E5_3671D6E2F2BC, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0_HS_3_0.png",
      "width": 58,
      "height": 42,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.02,
   "yaw": 69.74,
   "hfov": 3.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A25E10FD_B6CE_8E52_41DE_359CC294076F",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
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
 "propagateClick": true,
 "height": 110,
 "minWidth": 1,
 "overflow": "visible",
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "layout": "horizontal",
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
 "overflow": "scroll",
 "bottom": "0%",
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "gap": 3,
 "horizontalAlign": "center",
 "layout": "vertical",
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
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 0.1,
 "width": 549.45,
 "fontFamily": "Bebas Neue Bold",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "text": "Thanima Farm Life",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": 5.3,
 "textShadowHorizontalLength": 0,
 "propagateClick": true,
 "height": 86,
 "minWidth": 1,
 "textShadowBlurRadius": 10,
 "fontSize": 90,
 "borderSize": 0,
 "class": "Label",
 "fontStyle": "normal",
 "textShadowVerticalLength": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "text 1"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "textShadowColor": "#000000",
 "textDecoration": "none",
 "textShadowOpacity": 1
},
{
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": 6.2,
 "width": 388,
 "fontFamily": "Bebas Neue Book",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "text": "dolor sit amet, consectetur ",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "textShadowHorizontalLength": 0,
 "propagateClick": true,
 "height": 46,
 "minWidth": 1,
 "textShadowBlurRadius": 10,
 "fontSize": 41,
 "bottom": 2,
 "borderSize": 0,
 "class": "Label",
 "fontStyle": "normal",
 "textShadowVerticalLength": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "text 2"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "paddingTop": 0,
 "fontWeight": "normal",
 "textShadowColor": "#000000",
 "textDecoration": "none",
 "textShadowOpacity": 1
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
 "bottom": 53,
 "borderSize": 0,
 "class": "Image",
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
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
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
 "overflow": "scroll",
 "bottom": "0%",
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 3,
 "horizontalAlign": "left",
 "layout": "horizontal",
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
 "shadowVerticalLength": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "right": "10%",
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
 "borderRadius": 0,
 "top": "5%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "5%",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "layout": "horizontal",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver"
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
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
 "overflow": "visible",
 "bottom": "80%",
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "right",
 "layout": "vertical",
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
 "shadowVerticalLength": 0,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "right": "10%",
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
 "borderRadius": 0,
 "top": "5%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "5%",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "layout": "horizontal",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver"
},
{
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
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
 "overflow": "visible",
 "bottom": "80%",
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "right",
 "layout": "vertical",
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
 "shadowVerticalLength": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "right": "15%",
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
 "borderRadius": 0,
 "top": "7%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "7%",
 "overflow": "visible",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "layout": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver"
},
{
 "shadowVerticalLength": 0,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "right": "10%",
 "contentOpaque": false,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "top": "5%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "5%",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "layout": "horizontal",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver"
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
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
 "overflow": "visible",
 "bottom": "80%",
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "right",
 "layout": "vertical",
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
 "shadowVerticalLength": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "right": "15%",
 "contentOpaque": false,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "top": "7%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "7%",
 "overflow": "visible",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "layout": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver"
},
{
 "shadowVerticalLength": 0,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "right": "15%",
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
 "borderRadius": 0,
 "top": "7%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "7%",
 "overflow": "visible",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "layout": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver"
},
{
 "shadowVerticalLength": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "right": "15%",
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
 "borderRadius": 0,
 "top": "7%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "7%",
 "overflow": "visible",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "layout": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver"
},
{
 "shadowVerticalLength": 0,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "shadowSpread": 1,
 "shadowBlurRadius": 25,
 "right": "10%",
 "contentOpaque": false,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "top": "5%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "5%",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "layout": "horizontal",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver"
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
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
 "overflow": "visible",
 "bottom": "80%",
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "right",
 "layout": "vertical",
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
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_A27B8090_B6C3_8ED2_41DF_A29662C16750",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_A2445090_B6C3_8ED2_41D6_DF5A8B13A226",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_BA53C9C8_B6C2_9EB2_41D9_1C0812F48068_0_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_A27BF08F_B6C3_8ECE_41DB_4098B7645BB4",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0_HS_2_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_A27BA08F_B6C3_8ECE_41CA_E8BDA38979F7",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_BA53AD8D_B6C2_96B2_41E3_DAE594ED832C_0_HS_3_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_A6559E03_B6C3_75B6_41A2_129491F67CA0",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_1_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_A6567E03_B6C3_75B6_41E1_D58EC5463598",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_BD31C3E7_B6C2_F27E_41D5_2A6130103D8C_1_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_AC9943BC_B6C3_92D2_41DA_5C132595E7F0",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_BA56D1DA_B6C2_8E56_41B0_86786C8A1C51_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_A2443090_B6C3_8ED2_41DC_027F8F41874B",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_A245E090_B6C3_8ED2_41C7_B2FF5338CB37",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_BA502948_B6C2_9FB2_41E6_362CF12298C2_0_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_A27E8087_B6C3_8EBE_41C2_424C78081B6D",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_A27E6087_B6C3_8EBE_41CA_FA5114852653",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_BA594147_B6C3_8FBD_41D1_7071E3278573_0_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
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
 "propagateClick": true,
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "borderSize": 0,
 "class": "IconButton",
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
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "borderSize": 0,
 "class": "IconButton",
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
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "borderSize": 0,
 "class": "IconButton",
 "click": "this.shareFacebook(window.location.href)",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "paddingTop": 0
},
{
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "shadowSpread": 1,
 "width": 77.6,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Montserrat",
 "paddingBottom": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 0,
 "cursor": "hand",
 "shadowColor": "#000000",
 "rollOverShadow": false,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "iconWidth": 0,
 "propagateClick": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "label": "ABOUT US",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "fontStyle": "normal",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "iconBeforeLabel": true
},
{
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "shadowSpread": 1,
 "width": 61.2,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Montserrat",
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
 "propagateClick": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "RIDES",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
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
 "layout": "horizontal",
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
 "textDecoration": "none",
 "iconBeforeLabel": true
},
{
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "shadowSpread": 1,
 "width": 66.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Montserrat",
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
 "propagateClick": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "ROOMS",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
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
 "layout": "horizontal",
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
 "textDecoration": "none",
 "iconBeforeLabel": true
},
{
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "shadowSpread": 1,
 "width": 103,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Montserrat",
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
 "propagateClick": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "LOCATIONS",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "fontStyle": "normal",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
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
 "textDecoration": "none",
 "iconBeforeLabel": true
},
{
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "shadowSpread": 1,
 "width": 112,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Montserrat",
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
 "propagateClick": true,
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
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
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
 "layout": "horizontal",
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
 "textDecoration": "none",
 "iconBeforeLabel": true
},
{
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "shadowSpread": 1,
 "width": 90,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontFamily": "Montserrat",
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
 "rollOverBackgroundColorDirection": "horizontal",
 "propagateClick": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "REALTOR",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#009966"
 ],
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "fontStyle": "normal",
 "gap": 5,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0.54
 ],
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "data": {
  "name": "Button realtor"
 },
 "fontColor": "#FFFFFF",
 "shadow": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "iconBeforeLabel": true
},
{
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
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
 "paddingLeft": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
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
 "paddingLeft": 50,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "layout": "vertical",
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
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "class": "IconButton",
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
 "paddingLeft": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
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
 "paddingLeft": 50,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "layout": "vertical",
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
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "class": "IconButton",
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
 "propagateClick": false,
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
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "layout": "absolute",
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
 "paddingLeft": 70,
 "scrollBarMargin": 2,
 "itemLabelFontColor": "#666666",
 "itemMinWidth": 50,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "rollOverItemLabelFontColor": "#04A3E1",
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "borderSize": 0,
 "itemThumbnailHeight": 125,
 "class": "ThumbnailGrid",
 "itemPaddingBottom": 3,
 "itemBackgroundOpacity": 0,
 "gap": 26,
 "itemLabelFontStyle": "normal",
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "itemVerticalAlign": "top",
 "shadow": false,
 "itemOpacity": 1,
 "itemLabelHorizontalAlign": "center",
 "paddingTop": 10,
 "itemMode": "normal",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemLabelFontFamily": "Montserrat",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemThumbnailWidth": 220,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "backgroundOpacity": 0.05,
 "itemPaddingLeft": 3,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "paddingRight": 70,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "propagateClick": false,
 "selectedItemThumbnailShadow": true,
 "itemHorizontalAlign": "center",
 "itemBackgroundColor": [],
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemLabelGap": 7,
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
 "paddingLeft": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
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
 "paddingLeft": 50,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 400,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "layout": "vertical",
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
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "class": "IconButton",
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
 "propagateClick": false,
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
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "layout": "absolute",
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
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
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
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
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
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "transitionMode": "blending",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
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
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF"
},
{
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
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
 "propagateClick": false,
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
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
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
 "paddingLeft": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
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
 "paddingLeft": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
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
 "paddingLeft": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
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
 "paddingLeft": 60,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "visible",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "layout": "vertical",
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
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "class": "IconButton",
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
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "class": "Image",
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
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
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
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
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
 "paddingLeft": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "layout": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C"
},
{
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
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
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal",
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
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
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
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
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
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "top": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Georgia",
 "bottom": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
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
 "playbackBarHeadShadowHorizontalLength": 0,
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
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "layout": "horizontal",
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
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
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
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
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
 "paddingLeft": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "layout": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C"
},
{
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
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
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal",
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
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "class": "HTMLText",
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
 "borderRadius": 0,
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
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
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
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorRatios": [
  0
 ],
 "bottom": "0%",
 "borderSize": 0,
 "class": "WebFrame",
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
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
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
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
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
 "paddingLeft": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "layout": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C"
},
{
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
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
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal",
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
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "class": "HTMLText",
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
 "borderRadius": 0,
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
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
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
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "class": "HTMLText",
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
 "borderRadius": 0,
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
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
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
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
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
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
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
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "top": "0%",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
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
 "playbackBarHeadShadowHorizontalLength": 0,
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
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "20%",
 "propagateClick": false,
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "bottom": "20%",
 "borderSize": 0,
 "class": "IconButton",
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
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "20%",
 "propagateClick": false,
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "bottom": "20%",
 "borderSize": 0,
 "class": "IconButton",
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
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
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
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
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
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "top": "0%",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
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
 "playbackBarHeadShadowHorizontalLength": 0,
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
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "20%",
 "propagateClick": false,
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "bottom": "20%",
 "borderSize": 0,
 "class": "IconButton",
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
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "20%",
 "propagateClick": false,
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "bottom": "20%",
 "borderSize": 0,
 "class": "IconButton",
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
 "borderRadius": 0,
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
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
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
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "class": "Image",
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
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "paddingLeft": 0,
 "propagateClick": false,
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
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000"
},
{
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
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
 "paddingLeft": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "layout": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C"
},
{
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
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
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal",
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
 "paddingLeft": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.81vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.62vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
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
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconWidth": 32,
 "propagateClick": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": "9%",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "class": "Button",
 "fontStyle": "normal",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
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
 "textDecoration": "none",
 "iconBeforeLabel": true
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
 "propagateClick": false,
 "height": "8%",
 "minWidth": 70,
 "mode": "push",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "transparencyActive": true,
 "borderSize": 0,
 "class": "IconButton",
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
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "80%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "height": "30%",
 "minWidth": 1,
 "overflow": "scroll",
 "borderSize": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "layout": "absolute",
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
 "propagateClick": false,
 "height": "8%",
 "minWidth": 70,
 "mode": "push",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "transparencyActive": true,
 "borderSize": 0,
 "class": "IconButton",
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
 "paddingLeft": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.81vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
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
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconWidth": 32,
 "propagateClick": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": "9%",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "class": "Button",
 "fontStyle": "normal",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
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
 "textDecoration": "none",
 "iconBeforeLabel": true
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
 "paddingLeft": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.81vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
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
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconWidth": 32,
 "propagateClick": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 59,
 "fontSize": 34,
 "label": "lorem ipsum",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "class": "Button",
 "fontStyle": "normal",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
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
 "textDecoration": "none",
 "iconBeforeLabel": true
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
 "paddingLeft": 0,
 "propagateClick": false,
 "height": "45%",
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.81vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.08vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
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
 "paddingLeft": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "80%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "layout": "horizontal",
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
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "class": "Image",
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
 "paddingLeft": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.88vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1"
}],
 "class": "Player",
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
 "mobileMipmappingEnabled": false,
 "layout": "absolute"
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

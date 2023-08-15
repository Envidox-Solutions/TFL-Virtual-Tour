(function(){
    var script = {
 "start": "this.playAudioList([this.audio_ECEB42E3_F918_756A_41E6_56B4AA561558, this.audio_EDF3C5C5_F91F_9FA9_41E8_57FD876BEFAE]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "height": "100%",
 "id": "rootPlayer",
 "paddingBottom": 0,
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
  "this.Image_DEF11F7B_CA48_E688_41E8_A70F29C19D33",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 20,
 "verticalAlign": "top",
 "width": "100%",
 "definitions": [{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.91,
  "pitch": 0
 },
 "id": "camera_EF81E93B_FAEB_94DA_41E8_4DDBDE78FCE7"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.61,
  "pitch": 0
 },
 "id": "camera_E472E7E6_FAEB_9B6A_41DE_B3128AE634AB"
},
{
 "thumbnailUrl": "media/album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_0_t.jpg",
 "duration": 5000,
 "label": "IMG_3996",
 "id": "album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_0",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_0.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 3858
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -62.39,
  "pitch": 0
 },
 "id": "camera_E2D36EBC_FAE8_6DD4_41CD_AF735AEB78DF"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 63.24,
  "pitch": 0
 },
 "id": "camera_E2C35E9E_FAE8_6DDA_41E2_F2C8F277B66D"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.07,
  "pitch": 0
 },
 "id": "camera_E2F11E7A_FAE8_6D5A_41EC_50C1507359E8"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.65,
  "pitch": 0
 },
 "id": "camera_E09A6B8B_FAE8_6BBA_41CB_B26C90B4FB77"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_camera"
},
{
 "thumbnailUrl": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_112507_00_014_PureShot",
 "id": "panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247",
   "backwardYaw": 123.37,
   "yaw": -7.72,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601",
   "backwardYaw": 167.95,
   "yaw": 172.1,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_CA91C2AD_C5F5_D1B4_41E7_439AA1B5E666",
  "this.overlay_D5CFE8BA_C5F5_719C_41E5_0AF30E6740E3",
  "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF62C332_C435_062F_41D5_817A78857EF1_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.84,
  "pitch": 0
 },
 "id": "camera_E1721D48_FAE8_6CA6_41DD_64EBB7F6BC33"
},
{
 "thumbnailUrl": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_3_t.jpg",
 "duration": 5000,
 "label": "IMG_4102",
 "id": "album_E08A6319_F499_4F6B_41C3_72B5988DC951_3",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_3.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "thumbnailUrl": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_145605_00_041_PureShot",
 "id": "panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE",
   "backwardYaw": 176.02,
   "yaw": 19.6,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF",
   "backwardYaw": 0.79,
   "yaw": -143.35,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D",
   "backwardYaw": -179.68,
   "yaw": -54.01,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E5AAF0D4_C677_3195_41CB_037D0FA5DEF0",
  "this.overlay_D892AA56_C677_3094_41D3_6C596A5B9479",
  "this.overlay_D81A734A_C675_50FD_41CE_B36A0867E1AF",
  "this.overlay_C59117C7_CA58_65F8_41DB_DE23BA91CD5D",
  "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_145412_00_040_PureShot",
 "id": "panorama_D94D78C1_C65D_F1EF_41C5_921930906B67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF",
   "backwardYaw": 95.42,
   "yaw": -86.52,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D85E439B_C66B_379C_41DF_3E29FFFDE65C",
  "this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_t.jpg",
 "class": "Panorama",
 "label": "3",
 "id": "panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064",
   "backwardYaw": -71.49,
   "yaw": 5.39,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817",
   "backwardYaw": -7.47,
   "yaw": -173.55,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D4A49EBB_C437_C680_41E1_B68F814B1BB8",
  "this.overlay_D5A122AD_C43E_5E80_41E7_6626B48DD882",
  "this.overlay_E326C509_C6FD_D07C_41E3_7F91D1A89040",
  "this.overlay_EEF39452_C6FB_50ED_41E3_7D60CAAA6402",
  "this.overlay_EB8C5BCA_C6F4_D7FD_41D9_1AD0799FAA27",
  "this.overlay_D86A13B0_CAB3_11F7_41E6_2DFEE1C2F144",
  "this.overlay_D8C5EC3B_CAB1_F6E9_41E3_CB3F5666CB6D",
  "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_tcap0",
  "this.overlay_E4662654_F48B_C9F9_41E8_C42CC9BC7464",
  "this.popup_E5D78304_F48B_4F59_41BF_2188ECCB48B7"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_2_t.jpg",
 "duration": 5000,
 "label": "IMG_3989",
 "id": "album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_2",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_2.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer"
},
{
 "thumbnailUrl": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_151253_00_046_PureShot",
 "id": "panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D",
   "backwardYaw": -88.39,
   "yaw": 117.61,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E2C608DA_C655_319C_41E7_56D7F2ACE9D1",
  "this.overlay_E5AA5CE9_C655_51BF_41E0_8DBBB6596FF4",
  "this.overlay_DAD64927_CA48_EAB8_41E3_663D816CB2C7",
  "this.overlay_DB992F6D_CA48_E68B_41E5_913D45949674",
  "this.overlay_DB9D91A7_CA48_FDB8_4198_764EAC5F6930",
  "this.overlay_D81A9B4F_CA48_2E89_41E0_C551DF4C0E16",
  "this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.67,
  "pitch": 0
 },
 "id": "camera_E1F23C90_FAE8_6DA6_41EC_E297D3F50F4A"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.34,
  "pitch": 0
 },
 "id": "camera_E2E61E56_FAE8_6CAA_41A1_40EF8A3FA94B"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.62,
  "pitch": 0,
  "hfov": 120
 },
 "id": "camera_EF962979_FAEB_9766_41E9_61A4F7E0558E"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EE98C877_C655_7093_41D0_4977209804A9_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.82,
  "pitch": 0,
  "hfov": 120
 },
 "id": "camera_E2AD5EE5_FAE8_6D6E_41E0_7C76FF8DAEDF"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_t.jpg",
 "overlays": [
  "this.overlay_DADE2A61_CAB1_1299_41BF_CE46CA3E36D6",
  "this.overlay_DA8FC657_CAB1_32B8_41E4_47B0622A375F",
  "this.panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_tcap0"
 ],
 "partial": false,
 "hfovMin": "135%",
 "class": "Panorama",
 "label": "IMG_20230801_113448_00_017_PureShot",
 "id": "panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_113943_00_019_PureShot",
 "id": "panorama_CF746CB7_C435_0215_41D3_84DE8EB51314",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B",
   "backwardYaw": 179.66,
   "yaw": -2.37,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247",
   "backwardYaw": 14.93,
   "yaw": 179.52,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D4AE1CA6_C5EB_51B4_41D4_F964955AEAD3",
  "this.overlay_D447FEA6_C5EB_71B5_41E0_1B287DB1F05B",
  "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "IMG_20230801_175155_00_065_PureShot",
 "id": "panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D",
   "backwardYaw": 138.61,
   "yaw": -63.18,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE",
   "backwardYaw": -1.41,
   "yaw": -166.48,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601",
   "backwardYaw": -10.74,
   "yaw": 14.38,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DDFA44E3_C5D6_7A80_41DE_D4FE962F2B14",
  "this.overlay_DC6FFBB5_C5D6_CE80_41E5_DEE5D9EDF290",
  "this.overlay_E0C5C8B6_C654_F195_41E7_213F65F9B907",
  "this.overlay_E38715F4_C6F5_5394_41D2_CC2656509E7A",
  "this.overlay_D8F3B9D7_CA91_71B9_41CB_38E9343A43EF",
  "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_tcap0",
  "this.popup_E5A23FCD_F499_76EB_41E6_61EC134577AF"
 ],
 "hfovMin": "168%",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C_0_t.jpg",
 "duration": 5000,
 "label": "IMG_4163",
 "id": "album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C_0",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C_0.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.03,
  "pitch": 0
 },
 "id": "camera_EF8F4927_FAEB_94EA_41D5_3790BD5FA978"
},
{
 "thumbnailUrl": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_140902_00_033",
 "id": "panorama_EE98C877_C655_7093_41D0_4977209804A9",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C",
   "backwardYaw": -0.04,
   "yaw": 179.67,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD",
   "backwardYaw": 178.92,
   "yaw": -105.12,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0",
   "backwardYaw": -101.97,
   "yaw": 127.81,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E060FE94_C62C_F195_41E3_35CB803DEB83",
  "this.overlay_EADB0E21_C62F_F0AC_41E7_320FDD794226",
  "this.overlay_EFD731BD_C65C_F394_41DD_33F7998D0021",
  "this.overlay_E136DEB8_C65D_719C_41E0_181CFA5E3ED5",
  "this.overlay_EDF7B65C_C65B_D094_41C6_EE336E05D8F4",
  "this.overlay_FAFF2E02_CAC9_E678_41DC_6313A9651172",
  "this.panorama_EE98C877_C655_7093_41D0_4977209804A9_tcap0",
  "this.popup_E0A61093_F498_C97F_41ED_1BCB3430C04D"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_145258_00_039_PureShot",
 "id": "panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B",
   "backwardYaw": 39.09,
   "yaw": -179.76,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67",
   "backwardYaw": -86.52,
   "yaw": 95.42,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83",
   "backwardYaw": -143.35,
   "yaw": 0.79,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DD136A62_C66C_F0AD_41D1_1AF2091F4CFD",
  "this.overlay_E75D9960_C66D_D0AD_41D7_2F3E1DF1C035",
  "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_tcap0",
  "this.overlay_E6D7447B_C66C_D093_41E3_19152E460DB3"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.37,
  "pitch": 0
 },
 "id": "camera_EF4D5A07_FAEB_94A9_41E7_878DEE8283B3"
},
{
 "thumbnailUrl": "media/album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_t.png",
 "playList": "this.album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_AlbumPlayList",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_3987",
 "id": "album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -160.4,
  "pitch": 0
 },
 "id": "camera_E191DD21_FAE8_6CE9_41CA_FCF1E13EF3D0"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -84.58,
  "pitch": 0
 },
 "id": "camera_E29E8F50_FAE8_6CA6_41E4_0FFD57DDB456"
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_ECEB42E3_F918_756A_41E6_56B4AA561558.mp3",
  "oggUrl": "media/audio_ECEB42E3_F918_756A_41E6_56B4AA561558.ogg"
 },
 "data": {
  "label": "30 Minute Deep Sleep Music \u2605\ufe0e Fall Asleep Instantly \u2605\ufe0e Delta Waves(MP3_320K)"
 },
 "class": "MediaAudio",
 "id": "audio_ECEB42E3_F918_756A_41E6_56B4AA561558",
 "autoplay": true
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -57.45,
  "pitch": 0
 },
 "id": "camera_E0B38B64_FAE8_6B6F_41DD_AE168120E5EB"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 108.51,
  "pitch": 0
 },
 "id": "camera_EF6199B7_FAEB_97EA_41D0_337E694B4C36"
},
{
 "closeButtonBorderSize": 0,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "closeButtonPaddingBottom": 5,
 "id": "window_FAEC8937_F6E8_9066_41D7_6EA02C03F368",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonBorderRadius": 0,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundOpacity": 0,
 "shadow": true,
 "closeButtonPressedIconColor": "#888888",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "verticalAlign": "middle",
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "minWidth": 20,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "bodyPaddingTop": 0,
 "gap": 10,
 "backgroundColorRatios": [],
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "closeButtonPressedBorderColor": "#000000",
 "headerPaddingBottom": 5,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonIconLineWidth": 5,
 "backgroundOpacity": 1,
 "children": [
  "this.viewer_uidE3125710_FAEB_9CA6_41E2_18F409FF7134"
 ],
 "layout": "vertical",
 "closeButtonRollOverIconLineWidth": 5,
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowHorizontalLength": 3,
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 0,
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "data": {
  "name": "Window558"
 },
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.48,
  "pitch": 0
 },
 "id": "camera_EF9BF94E_FAEB_94BB_41D4_2B01A82AFA1E"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.96,
  "pitch": 0
 },
 "id": "camera_EF512A2F_FAEB_94FA_41E6_1F70E23409D6"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.37,
  "pitch": 0
 },
 "id": "camera_E15F2D80_FAE8_6FA7_41C3_79DA77DD81F6"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.4,
  "pitch": 0
 },
 "id": "camera_EF2EBA48_FAEB_94A6_41EB_E1270F395392"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.38,
  "pitch": 0
 },
 "id": "camera_E1BA0CE2_FAE8_6D6A_41C4_98F93B7A9D16"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.08,
  "pitch": 0
 },
 "id": "camera_E4268852_FAEB_94AA_41E0_A64A41A1158F"
},
{
 "thumbnailUrl": "media/album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_t.png",
 "playList": "this.album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_AlbumPlayList",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_4063",
 "id": "album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.21,
  "pitch": 0
 },
 "id": "camera_E08E5B77_FAE8_6B6A_4198_E4DFFC1A0E9E"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E628B83B_F48B_D9AF_41E2_19D67AEECF64",
 "yaw": -21.96,
 "popupDistance": 100,
 "hfov": 2.05,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E628B83B_F48B_D9AF_41E2_19D67AEECF64_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -10.13,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_113037_00_016_PureShot",
 "id": "panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247",
   "backwardYaw": -75.33,
   "yaw": 179.65,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_C58C6030_CA93_2EF7_41DC_E56BD42D75AF",
  "this.overlay_DA60FE78_CA93_3377_41E3_2C2758E527C8",
  "this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_camera"
},
{
 "thumbnailUrl": "media/album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_3_t.jpg",
 "duration": 5000,
 "label": "IMG_3990",
 "id": "album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_3",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_3.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "thumbnailUrl": "media/album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_2_t.jpg",
 "duration": 5000,
 "label": "IMG_4000",
 "id": "album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_2",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_2.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_E4E28721_FAEB_9CE6_41E6_26C86809757F"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E7335E2D_F4BB_59AB_41B4_FF2585793FD4",
 "yaw": -108.78,
 "popupDistance": 100,
 "hfov": 5.46,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E7335E2D_F4BB_59AB_41B4_FF2585793FD4_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -6.23,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_0_t.jpg",
 "duration": 5000,
 "label": "IMG_4096",
 "id": "album_E08A6319_F499_4F6B_41C3_72B5988DC951_0",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_0.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 6000
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E7049A75_F4B9_79BB_41C6_9778C559B3F0",
 "yaw": -161.48,
 "popupDistance": 100,
 "hfov": 8,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E7049A75_F4B9_79BB_41C6_9778C559B3F0_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -7.52,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_112132_00_013_PureShot",
 "id": "panorama_CFD38984_C435_02EB_41E4_829FA71604B8",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601",
   "backwardYaw": 121.97,
   "yaw": 116.79,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8_tcap0",
  "this.overlay_CB7DF849_C5FF_30FC_41AD_28A023C5518D"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.37,
  "pitch": 0
 },
 "id": "camera_EF77C9F4_FAEB_976E_41C1_812441407275"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_E3063703_FAEB_9CAA_41E9_9965ADB06C5A, [this.htmltext_E306A704_FAEB_9CAE_41E2_E68971609561,this.component_E307C705_FAEB_9CAE_41DC_A1DE1373BBAD,this.component_E307A705_FAEB_9CAE_41B9_015CBC1FFA5D], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_E3064703_FAEB_9CAA_41EC_ED20681C9651"
 ],
 "id": "playList_E301B703_FAEB_9CAA_41EB_8D40C1946403"
},
{
 "class": "ImageResource",
 "id": "ImageResource_E1E78AEE_F499_3EA9_418A_95D6422AE86A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7335E2D_F4BB_59AB_41B4_FF2585793FD4_0_0.jpg",
   "width": 6000,
   "height": 4000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7335E2D_F4BB_59AB_41B4_FF2585793FD4_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7335E2D_F4BB_59AB_41B4_FF2585793FD4_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7335E2D_F4BB_59AB_41B4_FF2585793FD4_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7335E2D_F4BB_59AB_41B4_FF2585793FD4_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ]
},
{
 "thumbnailUrl": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_t.png",
 "playList": "this.album_E08A6319_F499_4F6B_41C3_72B5988DC951_AlbumPlayList",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_4096",
 "id": "album_E08A6319_F499_4F6B_41C3_72B5988DC951"
},
{
 "thumbnailUrl": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_163639_00_053_PureShot",
 "id": "panorama_D0F27392_C62B_506C_41A8_D96417AA39E4",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF",
   "backwardYaw": 141.29,
   "yaw": 130.24,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D9385F48_CAF1_1297_41D3_9ACA81EECE15",
  "this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.33,
  "pitch": 0
 },
 "id": "camera_E4845795_FAEB_9BA9_41E8_58EB54206DE4"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.61,
  "pitch": 0
 },
 "id": "camera_E03CAC28_FAE8_6CE6_418B_CE877937FC52"
},
{
 "thumbnailUrl": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_2_t.jpg",
 "duration": 5000,
 "label": "IMG_4101",
 "id": "album_E08A6319_F499_4F6B_41C3_72B5988DC951_2",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_2.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.26,
  "pitch": 0
 },
 "id": "camera_EF09AA85_FAEB_95AE_41DA_7FDAC97B1BAD"
},
{
 "class": "ImageResource",
 "id": "ImageResource_E1E3AAEB_F499_3EAF_41D1_F0AE0C0643AE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7612CBB_F488_FAAF_41EA_3385260D52D8_0_0.jpg",
   "width": 6000,
   "height": 4000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7612CBB_F488_FAAF_41EA_3385260D52D8_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7612CBB_F488_FAAF_41EA_3385260D52D8_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7612CBB_F488_FAAF_41EA_3385260D52D8_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7612CBB_F488_FAAF_41EA_3385260D52D8_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.45,
  "pitch": 0
 },
 "id": "camera_E00EEC41_FAE8_6CA6_41D7_7414C7C7DBDE"
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_FA68A084_F489_C959_41E8_93A2D294FC76",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "minWidth": 20,
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Thanima Farm Life",
 "height": 600,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#000000",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "2vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.image_uidE33376EC_FAEB_9D7F_41E7_487687BEB965_0",
  "this.htmlText_FA689084_F489_C959_41DA_1373A89B0D11"
 ],
 "shadowHorizontalLength": 3,
 "headerPaddingLeft": 10,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window2805"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.88,
  "pitch": 0
 },
 "id": "camera_E14D0D5C_FAE8_6F5E_41D0_71642F2D9FD8"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.28,
  "pitch": 0
 },
 "id": "camera_E1CCFCA3_FAE8_6DEA_41D5_BA2A624D376E"
},
{
 "thumbnailUrl": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_150429_00_044_PureShot",
 "id": "panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9",
   "backwardYaw": 14.38,
   "yaw": -10.74,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8",
   "backwardYaw": 116.79,
   "yaw": 121.97,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607",
   "backwardYaw": 172.1,
   "yaw": 167.95,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DB3E406D_C452_6C12_4190_C8A116F0EF72",
  "this.overlay_DE30B1F6_C456_2FFF_41E6_64662190C7D2",
  "this.overlay_DF3705DB_C452_D436_41BD_0FAA6EBC6AE7",
  "this.overlay_DABE427D_C44E_6CED_41D3_0B455923880A",
  "this.overlay_D8CFA2B0_CA90_F3F7_419E_81D617C1060C",
  "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.63,
  "pitch": 0
 },
 "id": "camera_E048ABD8_FAE8_6BA6_41EE_5C5D96265679"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -49.76,
  "pitch": 0
 },
 "id": "camera_E01ACC55_FAE8_6CAE_41EA_94EA8ED73B0C"
},
{
 "thumbnailUrl": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_175306_00_067_PureShot-2",
 "id": "panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4",
   "backwardYaw": -116.76,
   "yaw": -4.84,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462",
   "backwardYaw": 117.61,
   "yaw": -88.39,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9",
   "backwardYaw": -63.18,
   "yaw": 138.61,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EE0332B6_C65F_3194_41B3_8BB1236F889C",
  "this.overlay_E4BC5987_C65D_D073_41C4_DDEE81D66B8C",
  "this.overlay_E1A9B6FE_C65C_D195_41DB_4EAE575F7582",
  "this.overlay_C5B7E396_CA58_5D9B_41E4_F8B9719F344E",
  "this.overlay_DA43B10D_CA58_FA88_41E8_5ECE69EE7108",
  "this.overlay_DA4139CE_CA58_2D88_41B0_BA47DB4A622E",
  "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_162109_00_051_PureShot",
 "id": "panorama_DF268CDD_C63C_D197_41E4_62400CB177AD",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9",
   "backwardYaw": -105.12,
   "yaw": 178.92,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EE6A5C23_C65D_50B3_41E0_7AB003B9E8CF",
  "this.overlay_EBC74C5A_C66D_309C_41D5_012CB9240397",
  "this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_tcap0",
  "this.popup_E7AF1CAE_F4B8_DAA9_41DC_717D8331895C"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_E5316BD3_F489_5EFE_41E5_AFAF651E9631",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_E33666F2_FAEB_9D6A_41E7_11A14A9087DF"
},
{
 "thumbnailUrl": "media/album_E0813509_F48B_CB6B_41C3_81F23349ADA0_t.png",
 "playList": "this.album_E0813509_F48B_CB6B_41C3_81F23349ADA0_AlbumPlayList",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_4149",
 "id": "album_E0813509_F48B_CB6B_41C3_81F23349ADA0"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.59,
  "pitch": 0
 },
 "id": "camera_EF30EA6E_FAEB_957B_41E9_07490CCAC135"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_camera"
},
{
 "thumbnailUrl": "media/album_E0813509_F48B_CB6B_41C3_81F23349ADA0_0_t.jpg",
 "duration": 5000,
 "label": "IMG_4149",
 "id": "album_E0813509_F48B_CB6B_41C3_81F23349ADA0_0",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E0813509_F48B_CB6B_41C3_81F23349ADA0_0.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "class": "ImageResource",
 "id": "ImageResource_E044ABEE_F489_5EA6_41E3_77560A22D026",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5D78304_F48B_4F59_41BF_2188ECCB48B7_0_0.jpg",
   "width": 3426,
   "height": 5888
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5D78304_F48B_4F59_41BF_2188ECCB48B7_0_1.jpg",
   "width": 2383,
   "height": 4096
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5D78304_F48B_4F59_41BF_2188ECCB48B7_0_2.jpg",
   "width": 1191,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5D78304_F48B_4F59_41BF_2188ECCB48B7_0_3.jpg",
   "width": 595,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5D78304_F48B_4F59_41BF_2188ECCB48B7_0_4.jpg",
   "width": 297,
   "height": 512
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.32,
  "pitch": 0
 },
 "id": "camera_E0E94ABF_FAEB_95DA_41D9_30FE585CB107"
},
{
 "thumbnailUrl": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_173548_00_062_PureShot-2",
 "id": "panorama_DC174442_C65D_D0EC_41C5_1275482D010D",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1",
   "backwardYaw": -179.13,
   "yaw": 11.22,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321",
   "backwardYaw": -0.17,
   "yaw": 74.63,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83",
   "backwardYaw": -54.01,
   "yaw": -179.68,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E24F6CFD_C67C_F194_41E5_447469BE970F",
  "this.overlay_E5A7F7D9_C674_DF9C_41DF_D450C967BDBB",
  "this.overlay_E351F1C3_C677_F3F3_41E7_289FB4A5FF11",
  "this.overlay_D9D3D829_C675_50BF_41E0_9E863ABB5C68",
  "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D_tcap0",
  "this.popup_E1B3F83E_F499_D9A9_41E4_293CFE5AB2C5"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.63,
  "pitch": 0
 },
 "id": "camera_E0E6DAD6_FAEB_95AA_41E4_2A94714F9023"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E7AB7868_F4B9_39A9_41EA_6ABCEB9CEBD1",
 "yaw": 139.35,
 "popupDistance": 100,
 "hfov": 3.94,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E7AB7868_F4B9_39A9_41EA_6ABCEB9CEBD1_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -2.8,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.52,
  "pitch": 0,
  "hfov": 120
 },
 "id": "camera_E0637BB1_FAE8_6BE9_41EE_78D39F0EDA7F"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidE3125710_FAEB_9CA6_41E2_18F409FF7134VideoPlayer)",
   "media": "this.video_E016C800_F49B_3959_41C0_1EEBFDB74680",
   "start": "this.viewer_uidE3125710_FAEB_9CA6_41E2_18F409FF7134VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_FB857168_F6E8_F0EA_41D8_990E2AA412B9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_FB857168_F6E8_F0EA_41D8_990E2AA412B9, 0)",
   "class": "VideoPlayListItem",
   "player": "this.viewer_uidE3125710_FAEB_9CA6_41E2_18F409FF7134VideoPlayer"
  }
 ],
 "id": "PlayList_FB857168_F6E8_F0EA_41D8_990E2AA412B9"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.28,
  "pitch": 0
 },
 "id": "camera_E1173E31_FAE8_6CE9_41C1_1947C4303171"
},
{
 "thumbnailUrl": "media/album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_1_t.jpg",
 "duration": 5000,
 "label": "IMG_3998",
 "id": "album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_1",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_1.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_E1CE9892_F499_3979_41EB_AB209216667B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5A23FCD_F499_76EB_41E6_61EC134577AF_0_0.jpg",
   "width": 6000,
   "height": 4000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5A23FCD_F499_76EB_41E6_61EC134577AF_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5A23FCD_F499_76EB_41E6_61EC134577AF_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5A23FCD_F499_76EB_41E6_61EC134577AF_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5A23FCD_F499_76EB_41E6_61EC134577AF_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ]
},
{
 "thumbnailUrl": "media/album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_2_t.jpg",
 "duration": 5000,
 "label": "IMG_4002",
 "id": "album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_2",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_2.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "thumbnailUrl": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_121754_00_028_PureShot",
 "id": "panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442",
   "backwardYaw": 122.55,
   "yaw": -76.43,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C",
   "backwardYaw": 179.79,
   "yaw": -2.16,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704",
   "backwardYaw": -13.35,
   "yaw": 179.72,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DE2227C7_C62D_5FF4_41D5_2B2249C01E97",
  "this.overlay_DEAF18EE_C62C_D1B5_41DE_619D024C0BE8",
  "this.overlay_D9B3E507_CAF1_3699_41E1_EE02EDD6EBAD",
  "this.overlay_D9E2AC60_CAF1_3697_41E7_7B20151EE8E1",
  "this.overlay_DE3DB2E9_CAEF_1368_41E3_E9BE5DE34163",
  "this.overlay_DE1BDDB8_CA91_11E8_41D3_A28B17451055",
  "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_tcap0",
  "this.popup_E7335E2D_F4BB_59AB_41B4_FF2585793FD4"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.83,
  "pitch": 0
 },
 "id": "camera_E0C61B14_FAEB_94AE_41E7_915B684D9574"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 125.99,
  "pitch": 0
 },
 "id": "camera_E0D27B26_FAEB_94EA_41EE_B743CDF982E7"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.05,
  "pitch": 0
 },
 "id": "camera_E0FDDAEC_FAEB_957E_41E7_986720630FA1"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.39,
  "pitch": 0
 },
 "id": "camera_E28EAF2D_FAE8_6CFE_41E9_62FAE6396BF1"
},
{
 "thumbnailUrl": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_175519_00_068_PureShot-2",
 "id": "panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D",
   "backwardYaw": -4.84,
   "yaw": -116.76,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_C5A44F10_CA58_2698_41E1_0DBD439CD968",
  "this.overlay_DA23C4B8_CA48_5B88_41E3_09A416A65754",
  "this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.51,
  "pitch": 0
 },
 "id": "camera_E05ADBEB_FAE8_6B79_41C5_9830C07BA484"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_E7124980_F499_DB59_41E1_46DC8BD8C260",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E4E19724_FAEB_9CEF_41A6_D72B6EF00C97, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E4E19724_FAEB_9CEF_41A6_D72B6EF00C97, 0)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E4E19724_FAEB_9CEF_41A6_D72B6EF00C97"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.33,
  "pitch": 0
 },
 "id": "camera_E1614D35_FAE8_6CEE_41A4_CA8312FF5B6B"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.5,
  "pitch": 0
 },
 "id": "camera_E12E4DA4_FAE8_6FEE_41EE_51C66E84E720"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -105.37,
  "pitch": 0
 },
 "id": "camera_E46E77BD_FAEB_9BDE_41E7_F40943A076CC"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E5D28FA3_F499_775F_41EA_ED8F25F1135B",
 "yaw": 25.1,
 "popupDistance": 100,
 "hfov": 3.19,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E5D28FA3_F499_775F_41EA_ED8F25F1135B_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -8.69,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 36.65,
  "pitch": 0
 },
 "id": "camera_EF9C4964_FAEB_976F_41BE_B4D8D185199B"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E7612CBB_F488_FAAF_41EA_3385260D52D8",
 "yaw": 105.87,
 "popupDistance": 100,
 "hfov": 4.8,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E7612CBB_F488_FAAF_41EA_3385260D52D8_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -19.06,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_115749_00_021_PureShot",
 "id": "panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B",
   "backwardYaw": -2.06,
   "yaw": -165.49,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3",
   "backwardYaw": 178.14,
   "yaw": 11.63,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D6BB1411_C5D5_F06F_41DC_84076632C3EF",
  "this.overlay_D6E52BED_C5D5_37B4_41D9_494B45F8A23D",
  "this.overlay_D66349BF_C5D4_F394_41DF_5AE50A536EB6",
  "this.overlay_D622017D_C5DC_D097_41E4_E3A846F99AB8",
  "this.overlay_D957D4FF_CAF3_1769_41D4_5E26E11B789C",
  "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_tcap0",
  "this.popup_E628B83B_F48B_D9AF_41E2_19D67AEECF64"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E5A23FCD_F499_76EB_41E6_61EC134577AF",
 "yaw": -17.42,
 "popupDistance": 100,
 "hfov": 4.15,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E5A23FCD_F499_76EB_41E6_61EC134577AF_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -11.84,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_175858_00_069_PureShot",
 "id": "panorama_D586DBB1_C432_CE80_41E7_856DF01E4064",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE",
   "backwardYaw": 179.67,
   "yaw": 91.04,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F",
   "backwardYaw": 5.39,
   "yaw": -71.49,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D2FCEF54_C472_4782_41BB_5808F1697666",
  "this.overlay_D2475404_C476_D981_41E3_33485B94FED6",
  "this.overlay_EB6B4D26_C6F5_F0B5_41C9_D4CABC67AD05",
  "this.overlay_E00F195C_C6F7_3094_41B0_8AD5AC00D540",
  "this.overlay_D8C5E23E_CA91_12E8_41E0_1BA8B83DCE71",
  "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.61,
  "pitch": 0
 },
 "id": "camera_E49377AA_FAEB_9BFA_41C1_EFCDDCD6E541"
},
{
 "thumbnailUrl": "media/video_E016C800_F49B_3959_41C0_1EEBFDB74680_t.jpg",
 "class": "Video",
 "label": "WhatsApp Video 2023-08-03 at 6.59.37 PM",
 "scaleMode": "fit_inside",
 "width": 480,
 "loop": false,
 "id": "video_E016C800_F49B_3959_41C0_1EEBFDB74680",
 "height": 848,
 "video": {
  "class": "VideoResource",
  "mp4Url": "media/video_E016C800_F49B_3959_41C0_1EEBFDB74680.mp4",
  "width": 480,
  "height": 848
 }
},
{
 "thumbnailUrl": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_1_t.jpg",
 "duration": 5000,
 "label": "IMG_4097",
 "id": "album_E08A6319_F499_4F6B_41C3_72B5988DC951_1",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_1.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 6000
},
{
 "class": "ImageResource",
 "id": "ImageResource_E1C8B891_F499_397B_41CB_4BC54B5BFDF0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5D28FA3_F499_775F_41EA_ED8F25F1135B_0_0.jpg",
   "width": 6000,
   "height": 4000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5D28FA3_F499_775F_41EA_ED8F25F1135B_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5D28FA3_F499_775F_41EA_ED8F25F1135B_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5D28FA3_F499_775F_41EA_ED8F25F1135B_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E5D28FA3_F499_775F_41EA_ED8F25F1135B_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_E1ED3AF4_F499_3EB9_41EE_0F5DB0C0C332",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7AF1CAE_F4B8_DAA9_41DC_717D8331895C_0_0.jpg",
   "width": 6000,
   "height": 4000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7AF1CAE_F4B8_DAA9_41DC_717D8331895C_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7AF1CAE_F4B8_DAA9_41DC_717D8331895C_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7AF1CAE_F4B8_DAA9_41DC_717D8331895C_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7AF1CAE_F4B8_DAA9_41DC_717D8331895C_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_173151_00_061_PureShot-2",
 "id": "panorama_DC2CA898_C65D_319C_41E0_7EC16026556B",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D",
   "backwardYaw": 171.63,
   "yaw": 44.62,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D",
   "backwardYaw": 171.63,
   "yaw": -63.33,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6",
   "backwardYaw": -111.04,
   "yaw": 80.06,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6",
   "backwardYaw": -111.04,
   "yaw": -97.72,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1",
   "backwardYaw": 3.6,
   "yaw": 173.72,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E0D462AE_C66C_D1B4_41D2_91765E457576",
  "this.overlay_E18B8299_C66C_D19C_41CD_A7FDF6DAC855",
  "this.overlay_E35BA5EC_C66F_73B5_41D5_73E146DD9516",
  "this.overlay_E6E15816_C66C_F095_41E1_661D238FE9D4",
  "this.overlay_E6E28F40_C66D_50EC_41D6_45284A185E4E",
  "this.overlay_E3F7223A_C66D_509C_41E8_A846B08DAB4F",
  "this.overlay_F8C24246_CAC8_DEF8_41DE_D128D843D301",
  "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "closeButtonBorderSize": 0,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "closeButtonPaddingBottom": 5,
 "id": "window_FAEE7938_F6E8_906A_41ED_EF57DA86B3B3",
 "closeButtonBackgroundOpacity": 0.3,
 "closeButtonBorderRadius": 0,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundOpacity": 0,
 "shadow": true,
 "closeButtonPressedIconColor": "#888888",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "closeButtonPressedIconLineWidth": 5,
 "modal": true,
 "verticalAlign": "middle",
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "minWidth": 20,
 "closeButtonIconWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 5,
 "bodyPaddingTop": 0,
 "gap": 10,
 "backgroundColorRatios": [],
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "closeButtonPressedBorderColor": "#000000",
 "headerPaddingBottom": 5,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "closeButtonBorderColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonIconLineWidth": 5,
 "backgroundOpacity": 1,
 "children": [
  "this.viewer_uidE3152717_FAEB_9CAA_41EB_C9A3016D28FB"
 ],
 "layout": "vertical",
 "closeButtonRollOverIconLineWidth": 5,
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#666666",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowHorizontalLength": 3,
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 0,
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 5,
 "data": {
  "name": "Window559"
 },
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingTop": 10,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "contentOpaque": false,
 "closeButtonPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "thumbnailUrl": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_140617_00_032_PureShot",
 "id": "panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9",
   "backwardYaw": 179.67,
   "yaw": -0.04,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C",
   "backwardYaw": -2.16,
   "yaw": 179.79,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DF0B74E5_C637_71B7_41E1_DCB3E7439DCD",
  "this.overlay_DFAF42B6_C637_F194_41C3_0B28B13C9F85",
  "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_tcap0",
  "this.overlay_E652B626_F4B8_C9A6_41E1_C7E6FBCBABC4",
  "this.popup_E70C4518_F4BB_4B6A_41E8_9AFA161C6A26"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_1_t.jpg",
 "duration": 5000,
 "label": "IMG_3999",
 "id": "album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_1",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_1.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DC174442_C65D_D0EC_41C5_1275482D010D_camera"
},
{
 "rotationY": 0,
 "yaw": 11.22,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E1B3F83E_F499_D9A9_41E4_293CFE5AB2C5",
 "autoplay": true,
 "popupDistance": 100,
 "hfov": 10.29,
 "loop": false,
 "pitch": 1.05,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "video": {
  "class": "VideoResource",
  "mp4Url": "media/video_E7124980_F499_DB59_41E1_46DC8BD8C260.mp4",
  "width": 480,
  "height": 848
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_E1E0FAEC_F499_3EA9_41E8_78953DBFA1D0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7AB7868_F4B9_39A9_41EA_6ABCEB9CEBD1_0_0.jpg",
   "width": 6000,
   "height": 4000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7AB7868_F4B9_39A9_41EA_6ABCEB9CEBD1_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7AB7868_F4B9_39A9_41EA_6ABCEB9CEBD1_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7AB7868_F4B9_39A9_41EA_6ABCEB9CEBD1_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7AB7868_F4B9_39A9_41EA_6ABCEB9CEBD1_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.78,
  "pitch": 0
 },
 "id": "camera_E1D9FCB6_FAE8_6DEA_41C7_40971BF8C2E7"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -41.39,
  "pitch": 0
 },
 "id": "camera_EF25CA5C_FAEB_955E_41E6_BC324D8F4008"
},
{
 "thumbnailUrl": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_145825_00_042_PureShot",
 "id": "panorama_DD14356E_C65D_30B5_41D1_41E6217914AE",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83",
   "backwardYaw": 19.6,
   "yaw": 176.02,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E6C8BF34_C674_F094_41C4_CFF1889D8182",
  "this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_tcap0",
  "this.overlay_E78F5EA3_F489_395E_41E4_0CAF0D47B384"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.69,
  "pitch": 0
 },
 "id": "camera_E1E64C7C_FAE8_6D5E_41EA_3FCE531E518C"
},
{
 "thumbnailUrl": "media/album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_2_t.jpg",
 "duration": 5000,
 "label": "IMG_4070",
 "id": "album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_2",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_2.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179,
  "pitch": 0
 },
 "id": "camera_E1B55CF9_FAE8_6D66_41C0_03AFEB05B16C"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 120
 },
 "id": "panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.35,
  "pitch": 0
 },
 "id": "camera_E10ADDEE_FAE8_6F7A_41D6_311F96941C37"
},
{
 "thumbnailUrl": "media/photo_FB7552E3_F489_4EDE_41E4_74A364C5ED11_t.jpg",
 "duration": 5000,
 "label": "IMG_4172",
 "id": "photo_FB7552E3_F489_4EDE_41E4_74A364C5ED11",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_FB7552E3_F489_4EDE_41E4_74A364C5ED11.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 6000
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "media": "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "media": "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "media": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "media": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "media": "this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "media": "this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "media": "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "media": "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_camera"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_E0813509_F48B_CB6B_41C3_81F23349ADA0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 42, 0)",
   "media": "this.video_E016C800_F49B_3959_41C0_1EEBFDB74680",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 42, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 42)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.35,
  "pitch": 0
 },
 "id": "camera_E07F4BC5_FAE8_6BAE_41B1_71E8E357DA9F"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.96,
  "pitch": 0
 },
 "id": "camera_E0913B9E_FAE8_6BDA_41DE_C7DFAB375F85"
},
{
 "thumbnailUrl": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_140339_00_031_PureShot",
 "id": "panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C",
   "backwardYaw": -76.43,
   "yaw": 122.55,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DE720DBC_CA93_11EF_41B6_F9D7E8FF7F31",
  "this.overlay_DE34627C_CA93_736F_41B0_57EDE2C12EDB",
  "this.overlay_DEEA4EAD_CA93_33E9_41E7_7BF02C19FBF2",
  "this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_tcap0",
  "this.popup_E7A04A01_F4BB_595A_4183_425F6688E47C",
  "this.popup_E7049A75_F4B9_79BB_41C6_9778C559B3F0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_0_t.jpg",
 "duration": 5000,
 "label": "IMG_3987",
 "id": "album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_0",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_0.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.24,
  "pitch": 0
 },
 "id": "camera_E056CBFE_FAE8_6B5A_41D9_BEEC0782DC80"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.48,
  "pitch": 0
 },
 "id": "camera_E105DE12_FAE8_6CAA_41ED_10EC74EA8E19"
},
{
 "thumbnailUrl": "media/album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_1_t.jpg",
 "duration": 5000,
 "label": "IMG_4069",
 "id": "album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_1",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_1.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -58.03,
  "pitch": 0
 },
 "id": "camera_E1397DC9_FAE8_6FA6_41DB_8063A0D24D8A"
},
{
 "thumbnailUrl": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_114341_00_020_PureShot",
 "id": "panorama_CF62C613_C435_01ED_41E2_99F63CE4918B",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314",
   "backwardYaw": -2.37,
   "yaw": 179.66,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332",
   "backwardYaw": -165.49,
   "yaw": -2.06,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF",
   "backwardYaw": -179.76,
   "yaw": 39.09,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D7B7F13E_C5EF_F094_41E3_4FD2B577003F",
  "this.overlay_D7EFDD23_C5ED_70B3_41D3_BE70D16BFE09",
  "this.overlay_D6559738_C5EB_709C_41E7_872971E0D21B",
  "this.overlay_D6F65F43_C5D7_50EC_41C0_17999BCDA017",
  "this.overlay_D18F6619_C5D7_D09F_41D0_A2E9B71311D2",
  "this.overlay_D8DB7DA7_CAF3_1199_41DC_682262961E99",
  "this.overlay_D90461D9_CAF7_31A8_41E3_4FF345997AFD",
  "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "rotationY": 0,
 "yaw": 137.16,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E0A61093_F498_C97F_41ED_1BCB3430C04D",
 "autoplay": true,
 "popupDistance": 100,
 "hfov": 2.75,
 "loop": false,
 "pitch": 6.21,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "video": {
  "class": "VideoResource",
  "mp4Url": "media/video_E016C800_F49B_3959_41C0_1EEBFDB74680.mp4",
  "width": 480,
  "height": 848
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidE3152717_FAEB_9CAA_41EB_C9A3016D28FBVideoPlayer)",
   "media": "this.video_E7124980_F499_DB59_41E1_46DC8BD8C260",
   "start": "this.viewer_uidE3152717_FAEB_9CAA_41EB_C9A3016D28FBVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_FB84A168_F6E8_F0EA_41E6_4A2D8B371E1C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_FB84A168_F6E8_F0EA_41E6_4A2D8B371E1C, 0)",
   "class": "VideoPlayListItem",
   "player": "this.viewer_uidE3152717_FAEB_9CAA_41EB_C9A3016D28FBVideoPlayer"
  }
 ],
 "id": "PlayList_FB84A168_F6E8_F0EA_41E6_4A2D8B371E1C"
},
{
 "thumbnailUrl": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_112756_00_015_PureShot",
 "id": "panorama_CF687FF7_C435_3E15_41B2_E3B73716D247",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4",
   "backwardYaw": 179.65,
   "yaw": -75.33,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314",
   "backwardYaw": 179.52,
   "yaw": 14.93,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607",
   "backwardYaw": -7.72,
   "yaw": 123.37,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D5E79D01_C5F7_306C_41C1_C6928652C747",
  "this.overlay_D586E657_C5F7_7093_41C5_C25AA509907C",
  "this.overlay_D4B9B866_C5F4_F0B5_41E5_D0B148AAA420",
  "this.overlay_D915FB5F_CA91_32A8_41B6_69CE2618FE20",
  "this.overlay_D9543B5F_CAF1_72A9_41E4_A0A67E4E7FAE",
  "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_EDF3C5C5_F91F_9FA9_41E8_57FD876BEFAE.mp3",
  "oggUrl": "media/audio_EDF3C5C5_F91F_9FA9_41E8_57FD876BEFAE.ogg"
 },
 "data": {
  "label": "421683__lamamakesmusic__atmo-forest-birds-spring-01_01"
 },
 "class": "MediaAudio",
 "id": "audio_EDF3C5C5_F91F_9FA9_41E8_57FD876BEFAE",
 "autoplay": true
},
{
 "thumbnailUrl": "media/video_E7124980_F499_DB59_41E1_46DC8BD8C260_t.jpg",
 "class": "Video",
 "label": "WhatsApp Video 2023-08-03 at 6.59.36 PM",
 "scaleMode": "fit_inside",
 "width": 480,
 "loop": false,
 "id": "video_E7124980_F499_DB59_41E1_46DC8BD8C260",
 "height": 848,
 "video": {
  "class": "VideoResource",
  "mp4Url": "media/video_E7124980_F499_DB59_41E1_46DC8BD8C260.mp4",
  "width": 480,
  "height": 848
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_E08A6319_F499_4F6B_41C3_72B5988DC951",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_E4E62725_FAEB_9CEE_41E8_0685D4E3C0AA"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.16,
  "pitch": 0
 },
 "id": "camera_EF72D9E0_FAEB_9766_41EC_7E4577E80638"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_camera"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E5D78304_F48B_4F59_41BF_2188ECCB48B7",
 "yaw": -36.84,
 "popupDistance": 100,
 "hfov": 3.37,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E5D78304_F48B_4F59_41BF_2188ECCB48B7_0_3.jpg",
    "width": 595,
    "height": 1024
   }
  ]
 },
 "pitch": -9.85,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.9,
  "pitch": 0
 },
 "id": "camera_EF6D499F_FAEB_97DA_41D0_F078F4F8E986"
},
{
 "thumbnailUrl": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_172848_00_060_PureShot",
 "id": "panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B",
   "backwardYaw": 173.72,
   "yaw": 3.6,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D",
   "backwardYaw": 11.22,
   "yaw": -179.13,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E321FF80_C66B_306C_41C3_9841F53B664B",
  "this.overlay_E575355C_C66B_5094_41DC_F77047FEA319",
  "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_0_t.jpg",
 "duration": 5000,
 "label": "IMG_3997",
 "id": "album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_0",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_0.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "thumbnailUrl": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_150115_00_043_PureShot",
 "id": "panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D",
   "backwardYaw": 74.63,
   "yaw": -0.17,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE",
   "backwardYaw": 30.92,
   "yaw": 179.65,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EED0D6D7_C66B_F194_41D5_CB50880608FB",
  "this.overlay_EE45E763_C66B_D0AC_41DF_7D31E6217050",
  "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.86,
  "pitch": 0
 },
 "id": "camera_E447E80D_FAEB_94BE_41D4_13AB67AD759A"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.87,
  "pitch": 0
 },
 "id": "camera_E0C8FB00_FAEB_94A6_41DF_C28A6A9FA867"
},
{
 "thumbnailUrl": "media/album_E0813509_F48B_CB6B_41C3_81F23349ADA0_2_t.jpg",
 "duration": 5000,
 "label": "IMG_4155",
 "id": "album_E0813509_F48B_CB6B_41C3_81F23349ADA0_2",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E0813509_F48B_CB6B_41C3_81F23349ADA0_2.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 6000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -52.19,
  "pitch": 0
 },
 "id": "camera_E0A80B3B_FAEB_94DA_41D5_1471B407766F"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.08,
  "pitch": 0
 },
 "id": "camera_E467C7D2_FAEB_9BAA_41C8_D434552A4846"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_camera"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "thumbnailUrl": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_t.jpg",
 "class": "Panorama",
 "label": "1",
 "id": "panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817",
   "backwardYaw": 175.33,
   "yaw": -9.39,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_CB6011AA_C436_DA81_41DC_2326D73B2D16",
  "this.overlay_E16A4BAC_C66D_37B5_41C1_23B57863A2DF",
  "this.overlay_D860A25F_CAAF_12A8_41E6_7CA000364B90",
  "this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_camera"
},
{
 "thumbnailUrl": "media/album_E7764909_F489_DB6A_41D8_7D9626A9DE97_t.png",
 "playList": "this.album_E7764909_F489_DB6A_41D8_7D9626A9DE97_AlbumPlayList",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_4120",
 "id": "album_E7764909_F489_DB6A_41D8_7D9626A9DE97"
},
{
 "thumbnailUrl": "media/album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_0_t.jpg",
 "duration": 5000,
 "label": "IMG_4063",
 "id": "album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_0",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_0.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_camera"
},
{
 "thumbnailUrl": "media/album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C_t.png",
 "playList": "this.album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C_AlbumPlayList",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_4163",
 "id": "album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C"
},
{
 "thumbnailUrl": "media/album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C_1_t.jpg",
 "duration": 5000,
 "label": "IMG_4164",
 "id": "album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C_1",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C_1.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_E62B905B_F49B_49EE_41A7_28317729F512",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "minWidth": 20,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Exotic Bird Park",
 "height": 600,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "titleFontColor": "#000000",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "2vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.container_E302E6FE_FAEB_9D5A_41D4_0386CCD45DC6",
  "this.htmlText_E655B05B_F49B_49EE_41D0_B51B48049BE9"
 ],
 "shadowHorizontalLength": 3,
 "headerPaddingLeft": 10,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "close": "this.playList_E30D86FE_FAEB_9D5A_41E3_C762AE1C084C.set('selectedIndex', -1);",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window9047"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E70C4518_F4BB_4B6A_41E8_9AFA161C6A26",
 "yaw": -29.07,
 "popupDistance": 100,
 "hfov": 5.08,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E70C4518_F4BB_4B6A_41E8_9AFA161C6A26_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 0.7,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_121518_00_026_PureShot",
 "id": "panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1",
   "backwardYaw": -1,
   "yaw": 170.39,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C",
   "backwardYaw": 179.72,
   "yaw": -13.35,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D198D684_C62F_D075_41DE_79D8A3859959",
  "this.overlay_D1FE4F8D_C62F_3077_41D9_21E0D800487C",
  "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_161824_00_050_PureShot",
 "id": "panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9",
   "backwardYaw": 127.81,
   "yaw": -101.97,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D80FA5D0_CABF_31B8_41BC_91810CFFAC51",
  "this.overlay_DBD8F349_CABF_72A8_41D6_7BC74E690C0F",
  "this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.96,
  "pitch": 0
 },
 "id": "camera_EF5A0A1C_FAEB_94DE_41E6_9B93AF2E422E"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.94,
  "pitch": 0
 },
 "id": "camera_E44877FA_FAEB_9B5A_41D7_582424A041B7"
},
{
 "class": "ImageResource",
 "id": "ImageResource_E1EABAF0_F499_3EB9_41E5_41C6768B10E1",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E70C4518_F4BB_4B6A_41E8_9AFA161C6A26_0_0.jpg",
   "width": 6000,
   "height": 4000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E70C4518_F4BB_4B6A_41E8_9AFA161C6A26_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E70C4518_F4BB_4B6A_41E8_9AFA161C6A26_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E70C4518_F4BB_4B6A_41E8_9AFA161C6A26_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E70C4518_F4BB_4B6A_41E8_9AFA161C6A26_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CFD38984_C435_02EB_41E4_829FA71604B8_camera"
},
{
 "thumbnailUrl": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_4_t.jpg",
 "duration": 5000,
 "label": "IMG_4103",
 "id": "album_E08A6319_F499_4F6B_41C3_72B5988DC951_4",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_4.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 103.57,
  "pitch": 0
 },
 "id": "camera_E45CA822_FAEB_94EA_41E9_995C53EC7710"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_camera"
},
{
 "thumbnailUrl": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_5_t.jpg",
 "duration": 5000,
 "label": "IMG_4108",
 "id": "album_E08A6319_F499_4F6B_41C3_72B5988DC951_5",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E08A6319_F499_4F6B_41C3_72B5988DC951_5.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "thumbnailUrl": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_120837_00_023_PureShot",
 "id": "panorama_CF7E98D1_C435_026D_41C1_664EA10986C3",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332",
   "backwardYaw": 11.63,
   "yaw": 178.14,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF",
   "backwardYaw": -165.5,
   "yaw": -0.31,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D62DBF76_C5DD_5094_41E5_4DF0AD5078C7",
  "this.overlay_D1B51457_C5DD_D094_41D5_5277586F8044",
  "this.overlay_E1166DD1_C6EF_73EF_41E8_B5A50537FC63",
  "this.overlay_D9356226_CAF1_1298_41DE_F62B7B858803",
  "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_150901_00_045_PureShot",
 "id": "panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064",
   "backwardYaw": 91.04,
   "yaw": 179.67,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9",
   "backwardYaw": -166.48,
   "yaw": -1.41,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321",
   "backwardYaw": 179.65,
   "yaw": 30.92,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D3A4C228_C44E_7981_41DD_762A27934F8F",
  "this.overlay_DD7F5046_C5DE_3981_41E2_E4FF1B83BEF5",
  "this.overlay_E39FD859_C6F5_309C_41D3_ED6C01FFEC8B",
  "this.overlay_D9723675_CA93_3379_41E4_2D3F31042996",
  "this.overlay_DEA60039_CA93_2EE8_41B6_F66EA2D57003",
  "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_tcap0",
  "this.popup_E5D28FA3_F499_775F_41EA_ED8F25F1135B"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_camera"
},
{
 "thumbnailUrl": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_t.jpg",
 "class": "Panorama",
 "label": "3",
 "id": "panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B",
   "backwardYaw": 80.06,
   "yaw": -111.04,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D3973503_CAB8_DA79_41DE_212207A15BD9",
  "this.overlay_D2382EA3_CAB9_E7B8_41E3_4E45EAAB805B",
  "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_tcap0"
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.94,
  "pitch": 0
 },
 "id": "camera_E1A8ACCA_FAE8_6DBA_41E0_0A45BF60937E"
},
{
 "thumbnailUrl": "media/album_E7764909_F489_DB6A_41D8_7D9626A9DE97_0_t.jpg",
 "duration": 5000,
 "label": "IMG_4120",
 "id": "album_E7764909_F489_DB6A_41D8_7D9626A9DE97_0",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E7764909_F489_DB6A_41D8_7D9626A9DE97_0.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 6000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_camera"
},
{
 "thumbnailUrl": "media/album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_t.png",
 "playList": "this.album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_AlbumPlayList",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_3996",
 "id": "album_E5316BD3_F489_5EFE_41E5_AFAF651E9631"
},
{
 "thumbnailUrl": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_t.jpg",
 "class": "Panorama",
 "label": "2 (3)-2",
 "id": "panorama_CF9C0A5C_C437_061B_41DC_4726402C8817",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977",
   "backwardYaw": -9.39,
   "yaw": 175.33,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F",
   "backwardYaw": -173.55,
   "yaw": -7.47,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_CB8357AD_C433_C680_41DF_DE3D9CB1F3FB",
  "this.overlay_D41039E8_C432_4A80_41E8_27A322EFFCBD",
  "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_E1FCBAE9_F499_3EAB_41E2_F74D36A8F22D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E628B83B_F48B_D9AF_41E2_19D67AEECF64_0_0.jpg",
   "width": 6000,
   "height": 4000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E628B83B_F48B_D9AF_41E2_19D67AEECF64_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E628B83B_F48B_D9AF_41E2_19D67AEECF64_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E628B83B_F48B_D9AF_41E2_19D67AEECF64_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E628B83B_F48B_D9AF_41E2_19D67AEECF64_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_121258_00_025_PureShot",
 "id": "panorama_CF62C332_C435_062F_41D5_817A78857EF1",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704",
   "backwardYaw": 170.39,
   "yaw": -1,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF",
   "backwardYaw": 1.61,
   "yaw": 179.52,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D1179F93_C62D_506C_41BC_D72BE5AF44AC",
  "this.overlay_D19734E3_C62D_D1B3_41E5_F870D1090109",
  "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1_tcap0"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "media": "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "media": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "media": "this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "media": "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "media": "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "media": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "media": "this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "media": "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "media": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EE98C877_C655_7093_41D0_4977209804A9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "media": "this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "media": "this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "media": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "media": "this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "media": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "media": "this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "media": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "media": "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "media": "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "media": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "media": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "media": "this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "media": "this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "media": "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "media": "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_camera"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_E0813509_F48B_CB6B_41C3_81F23349ADA0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 42)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42, 0)",
   "media": "this.video_E016C800_F49B_3959_41C0_1EEBFDB74680",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42)",
   "class": "VideoPlayListItem",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "thumbnailUrl": "media/album_E7764909_F489_DB6A_41D8_7D9626A9DE97_1_t.jpg",
 "duration": 5000,
 "label": "IMG_4121",
 "id": "album_E7764909_F489_DB6A_41D8_7D9626A9DE97_1",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E7764909_F489_DB6A_41D8_7D9626A9DE97_1.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 6000
},
{
 "class": "ImageResource",
 "id": "ImageResource_E1E4DAEE_F499_3EA9_41C0_64D02EFC9013",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7A04A01_F4BB_595A_4183_425F6688E47C_0_0.jpg",
   "width": 6000,
   "height": 4000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7A04A01_F4BB_595A_4183_425F6688E47C_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7A04A01_F4BB_595A_4183_425F6688E47C_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7A04A01_F4BB_595A_4183_425F6688E47C_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7A04A01_F4BB_595A_4183_425F6688E47C_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.48,
  "pitch": 0
 },
 "id": "camera_E014FC68_FAE8_6D67_41CF_EA6D4F419594"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_E7764909_F489_DB6A_41D8_7D9626A9DE97",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_E4E67725_FAEB_9CEE_41D6_BDF9A428CF6E"
},
{
 "class": "ImageResource",
 "id": "ImageResource_E1E4AAEF_F499_3EA7_41EC_342C75DF127D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7049A75_F4B9_79BB_41C6_9778C559B3F0_0_0.jpg",
   "width": 6000,
   "height": 4000
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7049A75_F4B9_79BB_41C6_9778C559B3F0_0_1.jpg",
   "width": 4096,
   "height": 2730
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7049A75_F4B9_79BB_41C6_9778C559B3F0_0_2.jpg",
   "width": 2048,
   "height": 1365
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7049A75_F4B9_79BB_41C6_9778C559B3F0_0_3.jpg",
   "width": 1024,
   "height": 682
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_E7049A75_F4B9_79BB_41C6_9778C559B3F0_0_4.jpg",
   "width": 512,
   "height": 341
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.53,
  "pitch": 0
 },
 "id": "camera_EF7859CC_FAEB_97BF_41B3_B7D086742AFF"
},
{
 "thumbnailUrl": "media/album_E0813509_F48B_CB6B_41C3_81F23349ADA0_1_t.jpg",
 "duration": 5000,
 "label": "IMG_4150",
 "id": "album_E0813509_F48B_CB6B_41C3_81F23349ADA0_1",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E0813509_F48B_CB6B_41C3_81F23349ADA0_1.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "thumbnailUrl": "media/album_E7764909_F489_DB6A_41D8_7D9626A9DE97_2_t.jpg",
 "duration": 5000,
 "label": "IMG_4122",
 "id": "album_E7764909_F489_DB6A_41D8_7D9626A9DE97_2",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E7764909_F489_DB6A_41D8_7D9626A9DE97_2.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.67,
  "pitch": 0
 },
 "id": "camera_E0A47B4D_FAEB_94BE_41E3_627642718BCD"
},
{
 "thumbnailUrl": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_t.jpg",
 "class": "Panorama",
 "label": "1",
 "id": "panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B",
   "backwardYaw": 44.62,
   "yaw": 171.63,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DDC98D77_CA48_2A98_41E5_0E5B81EDA90A",
  "this.overlay_D27DE70F_CA48_2688_41C9_92515E275248",
  "this.overlay_DD9B8D53_CA48_2A98_41CD_A2BF3A5714AE",
  "this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_tcap0"
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_1_t.jpg",
 "duration": 5000,
 "label": "IMG_3988",
 "id": "album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_1",
 "width": 6000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_1.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 4000
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E7AF1CAE_F4B8_DAA9_41DC_717D8331895C",
 "yaw": -37.99,
 "popupDistance": 100,
 "hfov": 4.92,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E7AF1CAE_F4B8_DAA9_41DC_717D8331895C_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -0.47,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "thumbnailUrl": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_t.jpg",
 "class": "Panorama",
 "label": "IMG_20230801_163500_00_052_PureShot",
 "id": "panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
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
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4",
   "backwardYaw": 130.24,
   "yaw": 141.29,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF62C332_C435_062F_41D5_817A78857EF1",
   "backwardYaw": 179.52,
   "yaw": 1.61,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3",
   "backwardYaw": -0.31,
   "yaw": -165.5,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D0E8D0BB_C5D5_519C_41CD_A68B454E5700",
  "this.overlay_D080C993_C5D5_5393_41CE_A5FFA2FBF663",
  "this.overlay_D3257D6B_C5D5_50BC_41E3_044D682AB07D",
  "this.overlay_D8C5B8CF_CAB7_1FA8_41E2_9284A0EE7C43",
  "this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_tcap0",
  "this.overlay_E675AB1C_F489_3F6A_41E4_F8A8BBEEDA74",
  "this.popup_E7612CBB_F488_FAAF_41EA_3385260D52D8",
  "this.overlay_E615F928_F487_3BA9_41ED_A8373D0720C9",
  "this.popup_E7AB7868_F4B9_39A9_41EA_6ABCEB9CEBD1"
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "showEasing": "cubic_in",
 "id": "popup_E7A04A01_F4BB_595A_4183_425F6688E47C",
 "yaw": 7.85,
 "popupDistance": 100,
 "hfov": 8.35,
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_E7A04A01_F4BB_595A_4183_425F6688E47C_0_3.jpg",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 0.44,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_camera"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_E302E6FE_FAEB_9D5A_41D4_0386CCD45DC6, [this.htmltext_E30296FF_FAEB_9D59_4197_07C9D31EDDEA,this.component_E303F700_FAEB_9CA6_41ED_0C7F557894C3,this.component_E303D701_FAEB_9CA6_41DE_5326270B9CBD], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_E30256FE_FAEB_9D5A_41E4_E82C1FAA6336"
 ],
 "id": "playList_E30D86FE_FAEB_9D5A_41E3_C762AE1C084C"
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_E74C439C_F487_4F69_41A4_0C6B3A400023",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "minWidth": 20,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Kennel",
 "height": 600,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "titleFontColor": "#000000",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "2vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.container_E3063703_FAEB_9CAA_41E9_9965ADB06C5A",
  "this.htmlText_E74AA39D_F487_4F6B_41D6_CBC4962F3FA5"
 ],
 "shadowHorizontalLength": 3,
 "headerPaddingLeft": 10,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "close": "this.playList_E301B703_FAEB_9CAA_41EB_8D40C1946403.set('selectedIndex', -1);",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window10852"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -63.21,
  "pitch": 0
 },
 "id": "camera_EF6B698C_FAEB_97BE_41E9_9309F706DE58"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.21,
  "pitch": 0
 },
 "id": "camera_EF122AAB_FAEB_95FA_41D3_64D8C229E7E2"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.61,
  "pitch": 0
 },
 "id": "camera_E2BCCF08_FAE8_6CA7_41EA_B71A79F2AFF2"
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ],
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.98,
  "pitch": 0
 },
 "id": "camera_EF04DA98_FAEB_95A6_41D9_F698FEBDE3D1"
},
{
 "thumbnailUrl": "media/album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_t.png",
 "playList": "this.album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_AlbumPlayList",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_3997",
 "id": "album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.28,
  "pitch": 0
 },
 "id": "camera_E1847D0D_FAE8_6CBE_41E1_9D2DCC465A04"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.96,
  "pitch": 0
 },
 "id": "camera_E42B883D_FAEB_94DE_41EE_F1A82C817B98"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.71,
  "pitch": 0
 },
 "id": "camera_E020EC11_FAE8_6CA9_41E6_F77B04E5C873"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_E4EC971F_FAEB_9CDA_41E7_5F8528E4BF89"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minWidth": 100,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": "9px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 7,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 0,
 "minHeight": 50,
 "playbackBarHeadBorderSize": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Bebas Neue",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#009933",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
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
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "data": {
  "name": "--SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "layout": "absolute",
 "paddingBottom": 0,
 "width": 115.05,
 "shadow": false,
 "scrollBarWidth": 10,
 "right": "0%",
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 641,
 "top": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Label_ED4090E9_CAC8_3B88_41B5_AA7FECE2A264"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "layout": "absolute",
 "paddingBottom": 0,
 "width": 579.4,
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 142.6,
 "top": 15,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "left": "0%",
 "layout": "absolute",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "paddingBottom": 0,
 "backgroundOpacity": 0.64,
 "shadow": false,
 "right": "0%",
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "bottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 118,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "--INFO photo"
 },
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "--INFO photoalbum"
 },
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "--PANORAMA LIST"
 },
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "--LOCATION"
 },
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "--FLOORPLAN"
 },
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "--PHOTOALBUM"
 },
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "--REALTOR"
 },
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#04A3E1",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "Image_DEF11F7B_CA48_E688_41E8_A70F29C19D33",
 "left": "0.03%",
 "maxHeight": 1000,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "10.534%",
 "url": "skin/Image_DEF11F7B_CA48_E688_41E8_A70F29C19D33.png",
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "7.26%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "13.314%",
 "class": "Image",
 "maxWidth": 1000,
 "horizontalAlign": "center",
 "data": {
  "name": "Image15108"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "paddingBottom": 0,
 "backgroundOpacity": 0.55,
 "shadow": false,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "minWidth": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": 0,
 "class": "UIComponent",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "UIComponent10949"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "minWidth": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": 0,
 "class": "ZoomImage",
 "backgroundColorRatios": [],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "ZoomImage10950"
 },
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton10951"
 },
 "id": "closeButtonPopupPanorama",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "layout": "horizontal",
 "pressedIconColor": "#888888",
 "paddingBottom": 5,
 "iconWidth": 20,
 "backgroundOpacity": 0.3,
 "shadowSpread": 1,
 "iconHeight": 20,
 "shadow": false,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "iconColor": "#000000",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 0,
 "propagateClick": false,
 "fontStyle": "normal",
 "rollOverIconColor": "#666666",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 5,
 "fontWeight": "normal",
 "mode": "push",
 "paddingRight": 5,
 "top": 10,
 "class": "CloseButton",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 5,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "iconLineWidth": 5
},
{
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "paddingBottom": 0,
 "width": 58,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed_rollover.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "paddingBottom": 0,
 "width": 58,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed_rollover.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247, this.camera_E0E6DAD6_FAEB_95AA_41E4_2A94714F9023); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB5EF8C_F4C2_D79A_41C7_E58294CF241D",
   "pitch": -28.81,
   "yaw": -7.72,
   "hfov": 21.16,
   "distance": 100
  }
 ],
 "id": "overlay_CA91C2AD_C5F5_D1B4_41E7_439AA1B5E666",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -28.81,
   "hfov": 21.16
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601, this.camera_E0FDDAEC_FAEB_957E_41E7_986720630FA1); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB54F8C_F4C2_D79A_41C7_8932C51DA79F",
   "pitch": -22.29,
   "yaw": 172.1,
   "hfov": 22.35,
   "distance": 100
  }
 ],
 "id": "overlay_D5CFE8BA_C5F5_719C_41E5_0AF30E6740E3",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -22.29,
   "hfov": 22.35
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF, this.camera_EF122AAB_FAEB_95FA_41D3_64D8C229E7E2); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB491FAC_F4C2_D79A_41D9_CC3291D74F96",
   "pitch": -27.85,
   "yaw": -143.35,
   "hfov": 21.36,
   "distance": 50
  }
 ],
 "id": "overlay_E5AAF0D4_C677_3195_41CB_037D0FA5DEF0",
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -143.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -27.85,
   "hfov": 21.36
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D, this.camera_E0E94ABF_FAEB_95DA_41D9_30FE585CB107); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB488FAC_F4C2_D79A_41E0_F7724D5FBD5C",
   "pitch": -21.04,
   "yaw": -54.01,
   "hfov": 16.86,
   "distance": 50
  }
 ],
 "id": "overlay_D892AA56_C677_3094_41D3_6C596A5B9479",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -21.04,
   "hfov": 16.86
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DD14356E_C65D_30B5_41D1_41E6217914AE, this.camera_EF04DA98_FAEB_95A6_41D9_F698FEBDE3D1); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 19.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.23,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_2_0.png",
      "width": 173,
      "height": 173
     }
    ]
   },
   "pitch": -6.23
  }
 ],
 "id": "overlay_D81A734A_C675_50FD_41CE_B36A0867E1AF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.23,
   "hfov": 10.23
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "POOL"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_3_0.png",
      "width": 150,
      "height": 96
     }
    ]
   },
   "pitch": -12.76,
   "yaw": 20.7,
   "hfov": 8.72,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C59117C7_CA58_65F8_41DB_DE23BA91CD5D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_3_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": -12.76,
   "hfov": 8.72
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF, this.camera_E29E8F50_FAE8_6CA6_41E4_0FFD57DDB456); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB499FAB_F4C2_D79E_41CC_4755FCFFBE12",
   "pitch": -30.73,
   "yaw": -86.52,
   "hfov": 20.76,
   "distance": 100
  }
 ],
 "id": "overlay_D85E439B_C66B_379C_41DF_3E29FFFDE65C",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -30.73,
   "hfov": 20.76
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064, this.camera_EF6199B7_FAEB_97EA_41D0_337E694B4C36); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBAC3F82_F4C2_D78E_41DB_26489EC47D42",
   "pitch": -17.14,
   "yaw": 5.39,
   "hfov": 23.08,
   "distance": 100
  }
 ],
 "id": "overlay_D4A49EBB_C437_C680_41E1_B68F814B1BB8",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.14,
   "hfov": 23.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817, this.camera_EF7859CC_FAEB_97BF_41B3_B7D086742AFF); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBAC6F83_F4C2_D78E_41A6_0C7D373EB0D4",
   "pitch": -35.06,
   "yaw": -173.55,
   "hfov": 21.8,
   "distance": 100
  }
 ],
 "id": "overlay_D5A122AD_C43E_5E80_41E7_6626B48DD882",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -35.06,
   "hfov": 21.8
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 69.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_2_0.png",
      "width": 155,
      "height": 302
     }
    ]
   },
   "pitch": -4.4,
   "roll": 0
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E326C509_C6FD_D07C_41E3_7F91D1A89040",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_2_1_0_map.gif",
      "width": 77,
      "height": 151
     }
    ]
   },
   "pitch": -4.4,
   "hfov": 9.2
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 69.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.23,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_3_0.png",
      "width": 71,
      "height": 52
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
 "id": "overlay_EEF39452_C6FB_50ED_41E3_7D60CAAA6402",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_3_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -4.64,
   "hfov": 4.23
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_E33666F2_FAEB_9D6A_41E7_11A14A9087DF, 0, this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 72.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_4_0.png",
      "width": 80,
      "height": 90
     }
    ]
   },
   "pitch": 35.96
  }
 ],
 "id": "overlay_EB8C5BCA_C6F4_D7FD_41D9_1AD0799FAA27",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 72.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 35.96,
   "hfov": 3.87
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Front Office"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_5_0.png",
      "width": 176,
      "height": 58
     }
    ]
   },
   "pitch": -8.02,
   "yaw": 69.99,
   "hfov": 10.4,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D86A13B0_CAB3_11F7_41E6_2DFEE1C2F144",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_5_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -8.02,
   "hfov": 10.4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "SKY CYCLING"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_6_0.png",
      "width": 243,
      "height": 53
     }
    ]
   },
   "pitch": 31.98,
   "yaw": 75.76,
   "hfov": 12.23,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D8C5EC3B_CAB1_F6E9_41E3_CB3F5666CB6D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_6_0_map.gif",
      "width": 73,
      "height": 16
     }
    ]
   },
   "pitch": 31.98,
   "hfov": 12.23
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E5D78304_F48B_4F59_41BF_2188ECCB48B7, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_E044ABEE_F489_5EA6_41E3_77560A22D026, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -36.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.33,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_7_0.png",
      "width": 108,
      "height": 99
     }
    ]
   },
   "pitch": -9.85
  }
 ],
 "id": "overlay_E4662654_F48B_C9F9_41E8_C42CC9BC7464",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -36.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_7_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -9.85,
   "hfov": 6.33
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_E4E28721_FAEB_9CE6_41E6_26C86809757F, 0, this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB5E6FB6_F4C2_D7F6_41E7_5B60B7482612",
   "pitch": -4.55,
   "yaw": 0.58,
   "hfov": 6.98,
   "distance": 100
  }
 ],
 "id": "overlay_E2C608DA_C655_319C_41E7_56D7F2ACE9D1",
 "data": {
  "label": "Info Red 07"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.55,
   "hfov": 6.98
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Info Red 07"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB5D1FB6_F4C2_D7F6_41E7_D9B296F8F0DD",
   "pitch": 7,
   "yaw": -16.51,
   "hfov": 3.96,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E5AA5CE9_C655_51BF_41E0_8DBBB6596FF4",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7,
   "hfov": 3.96
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D, this.camera_E472E7E6_FAEB_9B6A_41DE_B3128AE634AB); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB5D5FB6_F4C2_D7F6_41D5_D6A6388AC895",
   "pitch": -16.8,
   "yaw": 117.61,
   "hfov": 23.12,
   "distance": 100
  }
 ],
 "id": "overlay_DAD64927_CA48_EAB8_41E3_663D816CB2C7",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -16.8,
   "hfov": 23.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "ZIP LINE"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_3_0.png",
      "width": 170,
      "height": 75
     }
    ]
   },
   "pitch": -2.65,
   "yaw": 78.14,
   "hfov": 10.1,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DB992F6D_CA48_E68B_41E5_913D45949674",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_3_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -2.65,
   "hfov": 10.1
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Sky cycling"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_4_0.png",
      "width": 165,
      "height": 58
     }
    ]
   },
   "pitch": 3.99,
   "yaw": -12.79,
   "hfov": 9.81,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DB9D91A7_CA48_FDB8_4198_764EAC5F6930",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_4_0_map.gif",
      "width": 45,
      "height": 16
     }
    ]
   },
   "pitch": 3.99,
   "hfov": 9.81
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "BOATING"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_6_0.png",
      "width": 205,
      "height": 90
     }
    ]
   },
   "pitch": -9.64,
   "yaw": 1.19,
   "hfov": 12.01,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D81A9B4F_CA48_2E89_41E0_C551DF4C0E16",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_6_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -9.64,
   "hfov": 12.01
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB2DF92_F4C2_D78E_41E4_F3D0BD7D27E8",
   "pitch": -34.46,
   "yaw": -148.12,
   "hfov": 16.17,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DADE2A61_CAB1_1299_41BF_CE46CA3E36D6",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -34.46,
   "hfov": 16.17
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_E33666F2_FAEB_9D6A_41E7_11A14A9087DF, 0, this.panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 12.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.24,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_1_HS_1_0.png",
      "width": 144,
      "height": 129
     }
    ]
   },
   "pitch": 32.27
  }
 ],
 "id": "overlay_DA8FC657_CAB1_32B8_41E4_47B0622A375F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 32.27,
   "hfov": 7.24
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B, this.camera_E2E61E56_FAE8_6CAA_41A1_40EF8A3FA94B); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB26F92_F4C2_D78E_41D0_EEFBF8259AE3",
   "pitch": -21.4,
   "yaw": -2.37,
   "hfov": 22.49,
   "distance": 100
  }
 ],
 "id": "overlay_D4AE1CA6_C5EB_51B4_41D4_F964955AEAD3",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.4,
   "hfov": 22.49
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247, this.camera_E2F11E7A_FAE8_6D5A_41EC_50C1507359E8); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB1FF93_F4C2_D78E_41E9_751813FEE59A",
   "pitch": -19,
   "yaw": 179.52,
   "hfov": 22.84,
   "distance": 100
  }
 ],
 "id": "overlay_D447FEA6_C5EB_71B5_41E0_1B287DB1F05B",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -19,
   "hfov": 22.84
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601, this.camera_EF09AA85_FAEB_95AE_41DA_7FDAC97B1BAD); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB73F8A_F4C2_D79E_41EA_007675538608",
   "pitch": -19.48,
   "yaw": 14.38,
   "hfov": 22.77,
   "distance": 100
  }
 ],
 "id": "overlay_DDFA44E3_C5D6_7A80_41DE_D4FE962F2B14",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -19.48,
   "hfov": 22.77
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE, this.camera_EF30EA6E_FAEB_957B_41E9_07490CCAC135); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB76F8A_F4C2_D79E_41E2_2A14166C53E6",
   "pitch": -21.64,
   "yaw": -166.48,
   "hfov": 24.49,
   "distance": 100
  }
 ],
 "id": "overlay_DC6FFBB5_C5D6_CE80_41E5_DEE5D9EDF290",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.64,
   "hfov": 24.49
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D, this.camera_EF25CA5C_FAEB_955E_41E6_BC324D8F4008); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB6DF8A_F4C2_D79E_41E7_DEBE4D5846DE",
   "pitch": -22.22,
   "yaw": -63.18,
   "hfov": 22.36,
   "distance": 100
  }
 ],
 "id": "overlay_E0C5C8B6_C654_F195_41E7_213F65F9B907",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -22.22,
   "hfov": 22.36
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E5A23FCD_F499_76EB_41E6_61EC134577AF, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_E1CE9892_F499_3979_41EB_AB209216667B, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -17.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_3_0.png",
      "width": 71,
      "height": 52
     }
    ]
   },
   "pitch": -11.84
  }
 ],
 "id": "overlay_E38715F4_C6F5_5394_41D2_CC2656509E7A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_3_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -11.84,
   "hfov": 4.15
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "WAY TO AUDITORIUM"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_4_0.png",
      "width": 401,
      "height": 86
     }
    ]
   },
   "pitch": -27.11,
   "yaw": -62.9,
   "hfov": 21.15,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D8F3B9D7_CA91_71B9_41CB_38E9343A43EF",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_4_0_map.gif",
      "width": 74,
      "height": 16
     }
    ]
   },
   "pitch": -27.11,
   "hfov": 21.15
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DF268CDD_C63C_D197_41E4_62400CB177AD, this.camera_E4268852_FAEB_94AA_41E0_A64A41A1158F); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB4FEFA8_F4C2_D79A_41D0_155DFB688898",
   "pitch": -15.29,
   "yaw": -105.12,
   "hfov": 23.3,
   "distance": 100
  }
 ],
 "id": "overlay_E060FE94_C62C_F195_41E3_35CB803DEB83",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -15.29,
   "hfov": 23.3
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0, this.camera_EF8F4927_FAEB_94EA_41D5_3790BD5FA978); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 127.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_1_0.png",
      "width": 79,
      "height": 64
     }
    ]
   },
   "pitch": -6.15
  }
 ],
 "id": "overlay_EADB0E21_C62F_F0AC_41E7_320FDD794226",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -6.15,
   "hfov": 4.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_E0A61093_F498_C97F_41ED_1BCB3430C04D, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, true) } else { this.showPopupMedia(this.window_FAEC8937_F6E8_9066_41D7_6EA02C03F368, this.video_E016C800_F49B_3959_41C0_1EEBFDB74680, this.PlayList_FB857168_F6E8_F0EA_41D8_990E2AA412B9, '95%', '95%', true, true) }"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 137.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_2_0.png",
      "width": 46,
      "height": 53
     }
    ]
   },
   "pitch": 6.21
  }
 ],
 "id": "overlay_EFD731BD_C65C_F394_41DD_33F7998D0021",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 6.21,
   "hfov": 2.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Bamboo Hut"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_3_0.png",
      "width": 162,
      "height": 46
     }
    ]
   },
   "pitch": 8.91,
   "yaw": 137.46,
   "hfov": 9.51,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E136DEB8_C65D_719C_41E0_181CFA5E3ED5",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_3_0_map.gif",
      "width": 56,
      "height": 16
     }
    ]
   },
   "pitch": 8.91,
   "hfov": 9.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Conference Room"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_4_0.png",
      "width": 217,
      "height": 49
     }
    ]
   },
   "pitch": -2.56,
   "yaw": 127.89,
   "hfov": 12.86,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_EDF7B65C_C65B_D094_41C6_EE336E05D8F4",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_4_0_map.gif",
      "width": 70,
      "height": 15
     }
    ]
   },
   "pitch": -2.56,
   "hfov": 12.86
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C, this.camera_E42B883D_FAEB_94DE_41EE_F1A82C817B98); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB4D1FAA_F4C2_D79E_41D2_8AF1176803BC",
   "pitch": -18.69,
   "yaw": 179.67,
   "hfov": 25.29,
   "distance": 100
  }
 ],
 "id": "overlay_FAFF2E02_CAC9_E678_41DC_6313A9651172",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_6_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -18.69,
   "hfov": 25.29
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_EE98C877_C655_7093_41D0_4977209804A9_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83, this.camera_EF9C4964_FAEB_976F_41BE_B4D8D185199B); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB4B5FAB_F4C2_D79E_41E0_1ECC2D693057",
   "pitch": -12.13,
   "yaw": 0.79,
   "hfov": 23.62,
   "distance": 100
  }
 ],
 "id": "overlay_DD136A62_C66C_F0AD_41D1_1AF2091F4CFD",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -12.13,
   "hfov": 23.62
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B, this.camera_EF81E93B_FAEB_94DA_41E8_4DDBDE78FCE7); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB4AAFAB_F4C2_D79E_41DB_6B3ECEE163EA",
   "pitch": -21.4,
   "yaw": -179.76,
   "hfov": 22.49,
   "distance": 100
  }
 ],
 "id": "overlay_E75D9960_C66D_D0AD_41D7_2F3E1DF1C035",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_1_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.4,
   "hfov": 22.49
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D94D78C1_C65D_F1EF_41C5_921930906B67, this.camera_EF9BF94E_FAEB_94BB_41D4_2B01A82AFA1E); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 95.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_1_HS_1_0.png",
      "width": 149,
      "height": 159
     }
    ]
   },
   "pitch": -6.96
  }
 ],
 "id": "overlay_E6D7447B_C66C_D093_41E3_19152E460DB3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -6.96,
   "hfov": 8.82
  }
 ]
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.37",
     "zoomFactor": 1.1,
     "y": "0.34"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_1",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.65",
     "zoomFactor": 1.1,
     "y": "0.34"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_2",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.30",
     "zoomFactor": 1.1,
     "y": "0.49"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_3",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.37",
     "zoomFactor": 1.1,
     "y": "0.70"
    },
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_E398BFEB_F488_D6AE_41DF_A66A23E84C5E_AlbumPlayList"
},
{
 "progressBorderSize": 0,
 "id": "viewer_uidE3125710_FAEB_9CA6_41E2_18F409FF7134",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minWidth": 100,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "minHeight": 50,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#009933",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "ViewerArea10947"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.64",
     "zoomFactor": 1.1,
     "y": "0.32"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_1",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.32",
     "zoomFactor": 1.1,
     "y": "0.55"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_2",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.59",
     "zoomFactor": 1.1,
     "y": "0.73"
    },
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_E0C64D16_F48B_3B79_41AB_791F5AF9ECF3_AlbumPlayList"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB32F8C_F4C2_D79B_41E5_43AD552C8EB7",
   "pitch": -26.2,
   "yaw": -0.94,
   "hfov": 25.12,
   "distance": 100
  }
 ],
 "id": "overlay_C58C6030_CA93_2EF7_41DC_E56BD42D75AF",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -26.2,
   "hfov": 25.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF687FF7_C435_3E15_41B2_E3B73716D247, this.camera_E1F23C90_FAE8_6DA6_41EC_E297D3F50F4A); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB28F8D_F4C2_D79A_41E3_9E5EC147594E",
   "pitch": -32.79,
   "yaw": 179.65,
   "hfov": 23.54,
   "distance": 100
  }
 ],
 "id": "overlay_DA60FE78_CA93_3377_41E3_2C2758E527C8",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -32.79,
   "hfov": 23.54
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CFD38984_C435_02EB_41E4_829FA71604B8_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601, this.camera_E1397DC9_FAE8_6FA6_41DB_8063A0D24D8A); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 116.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_1_HS_6_0.png",
      "width": 132,
      "height": 155
     }
    ]
   },
   "pitch": -8.48
  }
 ],
 "id": "overlay_CB7DF849_C5FF_30FC_41AD_28A023C5518D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CFD38984_C435_02EB_41E4_829FA71604B8_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -8.48,
   "hfov": 7.74
  }
 ]
},
{
 "begin": "this.updateMediaLabelFromPlayList(this.album_E7764909_F489_DB6A_41D8_7D9626A9DE97_AlbumPlayList, this.htmltext_E306A704_FAEB_9CAE_41E2_E68971609561, this.albumitem_E3064703_FAEB_9CAA_41EC_ED20681C9651); this.loopAlbum(this.playList_E301B703_FAEB_9CAA_41EB_8D40C1946403, 0)",
 "media": "this.album_E7764909_F489_DB6A_41D8_7D9626A9DE97",
 "class": "PhotoAlbumPlayListItem",
 "player": "this.viewer_uidE3066703_FAEB_9CAA_41EA_1744EBDCA552PhotoAlbumPlayer",
 "id": "albumitem_E3064703_FAEB_9CAA_41EC_ED20681C9651"
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E08A6319_F499_4F6B_41C3_72B5988DC951_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.54",
     "zoomFactor": 1.1,
     "y": "0.71"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E08A6319_F499_4F6B_41C3_72B5988DC951_1",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.58",
     "zoomFactor": 1.1,
     "y": "0.38"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E08A6319_F499_4F6B_41C3_72B5988DC951_2",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.64",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E08A6319_F499_4F6B_41C3_72B5988DC951_3",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.33",
     "zoomFactor": 1.1,
     "y": "0.48"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E08A6319_F499_4F6B_41C3_72B5988DC951_4",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.69",
     "zoomFactor": 1.1,
     "y": "0.40"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E08A6319_F499_4F6B_41C3_72B5988DC951_5",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.60",
     "zoomFactor": 1.1,
     "y": "0.32"
    },
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_E08A6319_F499_4F6B_41C3_72B5988DC951_AlbumPlayList"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF, this.camera_E020EC11_FAE8_6CA9_41E6_F77B04E5C873); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB447FA0_F4C2_D78A_41E7_1C36475E8026",
   "pitch": -21.4,
   "yaw": 130.24,
   "hfov": 22.49,
   "distance": 100
  }
 ],
 "id": "overlay_D9385F48_CAF1_1297_41D3_9ACA81EECE15",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.4,
   "hfov": 22.49
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "id": "image_uidE33376EC_FAEB_9D7F_41E7_487687BEB965_0",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "width": "100%",
 "url": "media/photo_FB7552E3_F489_4EDE_41E4_74A364C5ED11.jpg",
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "50%",
 "class": "Image",
 "horizontalAlign": "center",
 "data": {
  "name": "Image10934"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "id": "htmlText_FA689084_F489_C959_41DA_1373A89B0D11",
 "borderRadius": 0,
 "minHeight": 0,
 "width": "100%",
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "50%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText2806"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9, this.camera_EF962979_FAEB_9766_41E9_61A4F7E0558E); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB5DF8B_F4C2_D79E_41C4_A9C60AEAC80C",
   "pitch": -28.6,
   "yaw": -10.74,
   "hfov": 26.75,
   "distance": 100
  }
 ],
 "id": "overlay_DB3E406D_C452_6C12_4190_C8A116F0EF72",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -28.6,
   "hfov": 26.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607, this.camera_EF6D499F_FAEB_97DA_41D0_F078F4F8E986); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB69F8B_F4C2_D79E_41D6_4879884545C4",
   "pitch": -31,
   "yaw": 167.95,
   "hfov": 27.83,
   "distance": 100
  }
 ],
 "id": "overlay_DE30B1F6_C456_2FFF_41E6_64662190C7D2",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -31,
   "hfov": 27.83
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 122.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_2_0.png",
      "width": 223,
      "height": 634
     }
    ]
   },
   "pitch": -13.81,
   "roll": 0
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DF3705DB_C452_D436_41BD_0FAA6EBC6AE7",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_2_1_0_map.gif",
      "width": 70,
      "height": 200
     }
    ]
   },
   "pitch": -13.81,
   "hfov": 13.16
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CFD38984_C435_02EB_41E4_829FA71604B8, this.camera_EF6B698C_FAEB_97BE_41E9_9309F706DE58); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 121.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.6,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_3_0.png",
      "width": 114,
      "height": 133
     }
    ]
   },
   "pitch": -14.36
  }
 ],
 "id": "overlay_DABE427D_C44E_6CED_41D3_0B455923880A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 121.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -14.36,
   "hfov": 6.6
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "FARM RESEARCH"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_4_0.png",
      "width": 320,
      "height": 80
     }
    ]
   },
   "pitch": -7.61,
   "yaw": 123.45,
   "hfov": 18.85,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D8CFA2B0_CA90_F3F7_419E_81D617C1060C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_4_0_map.gif",
      "width": 64,
      "height": 16
     }
    ]
   },
   "pitch": -7.61,
   "hfov": 18.85
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462, this.camera_E2D36EBC_FAE8_6DD4_41CD_AF735AEB78DF); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -88.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_0_0.png",
      "width": 163,
      "height": 182
     }
    ]
   },
   "pitch": -0.17
  }
 ],
 "id": "overlay_EE0332B6_C65F_3194_41B3_8BB1236F889C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -0.17,
   "hfov": 9.7
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4, this.camera_E2C35E9E_FAE8_6DDA_41E2_F2C8F277B66D); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB501FB5_F4C2_D78A_41EE_35465C40695A",
   "pitch": -12.82,
   "yaw": -4.84,
   "hfov": 23.55,
   "distance": 100
  }
 ],
 "id": "overlay_E4BC5987_C65D_D073_41C4_DDEE81D66B8C",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -12.82,
   "hfov": 23.55
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9, this.camera_E2AD5EE5_FAE8_6D6E_41E0_7C76FF8DAEDF); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB5F9FB5_F4C2_D78A_41ED_EDA24930BA6E",
   "pitch": -22.43,
   "yaw": 138.61,
   "hfov": 22.33,
   "distance": 100
  }
 ],
 "id": "overlay_E1A9B6FE_C65C_D195_41DB_4EAE575F7582",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -22.43,
   "hfov": 22.33
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "BOAT VIEW"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_3_0.png",
      "width": 169,
      "height": 70
     }
    ]
   },
   "pitch": -6.45,
   "yaw": -87.65,
   "hfov": 9.99,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C5B7E396_CA58_5D9B_41E4_F8B9719F344E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_3_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -6.45,
   "hfov": 9.99
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_E4EC971F_FAEB_9CDA_41E7_5F8528E4BF89, 0, this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -55.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_4_0.png",
      "width": 127,
      "height": 113
     }
    ]
   },
   "pitch": -4.04
  }
 ],
 "id": "overlay_DA43B10D_CA58_FA88_41E8_5ECE69EE7108",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_4_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -4.04,
   "hfov": 7.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Boating"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_5_0.png",
      "width": 204,
      "height": 81
     }
    ]
   },
   "pitch": -8.78,
   "yaw": -53.26,
   "hfov": 11.94,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DA4139CE_CA58_2D88_41B0_BA47DB4A622E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_5_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": -8.78,
   "hfov": 11.94
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7AF1CAE_F4B8_DAA9_41DC_717D8331895C, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_E1ED3AF4_F499_3EB9_41EE_0F5DB0C0C332, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -37.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.92,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_1_HS_3_0.png",
      "width": 83,
      "height": 78
     }
    ]
   },
   "pitch": -0.47
  }
 ],
 "id": "overlay_EE6A5C23_C65D_50B3_41E0_7AB003B9E8CF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_1_HS_3_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -0.47,
   "hfov": 4.92
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EE98C877_C655_7093_41D0_4977209804A9, this.camera_E14D0D5C_FAE8_6F5E_41D0_71642F2D9FD8); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB4CDFAA_F4C2_D79E_41C4_C2261796EC96",
   "pitch": -17.99,
   "yaw": 178.92,
   "hfov": 24.87,
   "distance": 100
  }
 ],
 "id": "overlay_EBC74C5A_C66D_309C_41D5_012CB9240397",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_1_HS_4_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.99,
   "hfov": 24.87
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E0813509_F48B_CB6B_41C3_81F23349ADA0_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.71",
     "zoomFactor": 1.1,
     "y": "0.37"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E0813509_F48B_CB6B_41C3_81F23349ADA0_1",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.46",
     "zoomFactor": 1.1,
     "y": "0.58"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E0813509_F48B_CB6B_41C3_81F23349ADA0_2",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.57",
     "zoomFactor": 1.1,
     "y": "0.63"
    },
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_E0813509_F48B_CB6B_41C3_81F23349ADA0_AlbumPlayList"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "rollOver": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_E1B3F83E_F499_D9A9_41E4_293CFE5AB2C5, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, true) } else { this.showPopupMedia(this.window_FAEE7938_F6E8_906A_41ED_EF57DA86B3B3, this.video_E7124980_F499_DB59_41E1_46DC8BD8C260, this.PlayList_FB84A168_F6E8_F0EA_41E6_4A2D8B371E1C, '95%', '95%', true, true) }",
   "click": "this.startPanoramaWithCamera(this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1, this.camera_E0C8FB00_FAEB_94A6_41DF_C28A6A9FA867); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 11.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_0_0.png",
      "width": 173,
      "height": 173
     }
    ]
   },
   "pitch": 1.05
  }
 ],
 "id": "overlay_E24F6CFD_C67C_F194_41E5_447469BE970F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.05,
   "hfov": 10.29
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321, this.camera_E0C61B14_FAEB_94AE_41E7_915B684D9574); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB564FAD_F4C2_D79A_419F_E5386CD548AC",
   "pitch": -19.39,
   "yaw": 74.63,
   "hfov": 19.62,
   "distance": 50
  }
 ],
 "id": "overlay_E5A7F7D9_C674_DF9C_41DF_D450C967BDBB",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -19.39,
   "hfov": 19.62
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 159.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.32,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_2_0.png",
      "width": 140,
      "height": 136
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
 "id": "overlay_E351F1C3_C677_F3F3_41E7_289FB4A5FF11",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.76,
   "hfov": 8.32
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83, this.camera_E0D27B26_FAEB_94EA_41EE_B743CDF982E7); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB55FFAD_F4C2_D79A_41D0_89F29C7BA94D",
   "pitch": -16.59,
   "yaw": -179.68,
   "hfov": 23.15,
   "distance": 100
  }
 ],
 "id": "overlay_D9D3D829_C675_50BF_41E0_9E863ABB5C68",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_3_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -16.59,
   "hfov": 23.15
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DC174442_C65D_D0EC_41C5_1275482D010D_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uidE3125710_FAEB_9CA6_41E2_18F409FF7134",
 "id": "viewer_uidE3125710_FAEB_9CA6_41E2_18F409FF7134VideoPlayer"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C, this.camera_E08E5B77_FAE8_6B6A_4198_E4DFFC1A0E9E); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB41BFA1_F4C2_D78A_41E0_1826DD556D52",
   "pitch": -22.22,
   "yaw": -2.16,
   "hfov": 27.19,
   "distance": 100
  }
 ],
 "id": "overlay_DE2227C7_C62D_5FF4_41D5_2B2249C01E97",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -22.22,
   "hfov": 27.19
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704, this.camera_E09A6B8B_FAE8_6BBA_41CB_B26C90B4FB77); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB411FA1_F4C2_D78A_41E0_F55969B8B566",
   "pitch": -20.16,
   "yaw": 179.72,
   "hfov": 27.57,
   "distance": 100
  }
 ],
 "id": "overlay_DEAF18EE_C62C_D1B5_41DE_619D024C0BE8",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -20.16,
   "hfov": 27.57
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -76.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_1_HS_3_0.png",
      "width": 130,
      "height": 200
     }
    ]
   },
   "pitch": -6.97,
   "roll": 0
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D9B3E507_CAF1_3699_41E1_EE02EDD6EBAD",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_1_HS_3_1_0_map.gif",
      "width": 65,
      "height": 100
     }
    ]
   },
   "pitch": -6.97,
   "hfov": 7.73
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442, this.camera_E0B38B64_FAE8_6B6F_41DD_AE168120E5EB); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -76.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.77,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_1_HS_4_0.png",
      "width": 64,
      "height": 83
     }
    ]
   },
   "pitch": -6.68
  }
 ],
 "id": "overlay_D9E2AC60_CAF1_3697_41E7_7B20151EE8E1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": -6.68,
   "hfov": 3.77
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7335E2D_F4BB_59AB_41B4_FF2585793FD4, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_E1E78AEE_F499_3EA9_418A_95D6422AE86A, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -108.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.46,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_1_HS_5_0.png",
      "width": 92,
      "height": 81
     }
    ]
   },
   "pitch": -6.23
  }
 ],
 "id": "overlay_DE3DB2E9_CAEF_1368_41E3_E9BE5DE34163",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_1_HS_5_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -6.23,
   "hfov": 5.46
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "OUTDOOR GAMES"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_1_HS_6_0.png",
      "width": 180,
      "height": 60
     }
    ]
   },
   "pitch": -10.04,
   "yaw": -75.7,
   "hfov": 10.53,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE1BDDB8_CA91_11E8_41D3_A28B17451055",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_1_HS_6_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -10.04,
   "hfov": 10.53
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D, this.camera_EF72D9E0_FAEB_9766_41EC_7E4577E80638); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB5E8FB6_F4C2_D7F6_41E1_DD5E7445AF2D",
   "pitch": -9.48,
   "yaw": -116.76,
   "hfov": 17.81,
   "distance": 100
  }
 ],
 "id": "overlay_C5A44F10_CA58_2698_41E1_0DBD439CD968",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -9.48,
   "hfov": 17.81
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 73.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_1_HS_1_0.png",
      "width": 192,
      "height": 192
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
 "id": "overlay_DA23C4B8_CA48_5B88_41E3_09A416A65754",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.3,
   "hfov": 11.36
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E628B83B_F48B_D9AF_41E2_19D67AEECF64, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_E1FCBAE9_F499_3EAB_41E2_F74D36A8F22D, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -21.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_1_HS_0_0.png",
      "width": 35,
      "height": 46
     }
    ]
   },
   "pitch": -10.13
  }
 ],
 "id": "overlay_D6BB1411_C5D5_F06F_41DC_84076632C3EF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": -10.13,
   "hfov": 2.05
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3, this.camera_E447E80D_FAEB_94BE_41D4_13AB67AD759A); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBBB6F98_F4C2_D7BA_41D4_548D71AD9942",
   "pitch": -19.82,
   "yaw": 11.63,
   "hfov": 22.72,
   "distance": 100
  }
 ],
 "id": "overlay_D6E52BED_C5D5_37B4_41D9_494B45F8A23D",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -19.82,
   "hfov": 22.72
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF62C613_C435_01ED_41E2_99F63CE4918B, this.camera_E44877FA_FAEB_9B5A_41D7_582424A041B7); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBBADF98_F4C2_D7BA_41EC_8737B9B8BE1C",
   "pitch": -18.79,
   "yaw": -165.49,
   "hfov": 22.87,
   "distance": 100
  }
 ],
 "id": "overlay_D66349BF_C5D4_F394_41DF_5AE50A536EB6",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_1_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -18.79,
   "hfov": 22.87
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E74C439C_F487_4F69_41A4_0C6B3A400023, null, false); this.playList_E301B703_FAEB_9CAA_41EB_8D40C1946403.set('selectedIndex', 0); "
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -73.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.71,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_1_HS_3_0.png",
      "width": 149,
      "height": 126
     }
    ]
   },
   "pitch": -11.34
  }
 ],
 "id": "overlay_D622017D_C5DC_D097_41E4_E3A846F99AB8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_1_HS_3_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -11.34,
   "hfov": 8.71
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "kennel club"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_1_HS_4_0.png",
      "width": 280,
      "height": 84
     }
    ]
   },
   "pitch": -18.26,
   "yaw": -71.63,
   "hfov": 15.81,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D957D4FF_CAF3_1769_41D4_5E26E11B789C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_1_HS_4_0_map.gif",
      "width": 53,
      "height": 16
     }
    ]
   },
   "pitch": -18.26,
   "hfov": 15.81
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F, this.camera_E49377AA_FAEB_9BFA_41C1_EFCDDCD6E541); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBAA2F89_F4C2_D79A_41E1_76A3E2CD03ED",
   "pitch": -15.01,
   "yaw": -71.49,
   "hfov": 23.33,
   "distance": 100
  }
 ],
 "id": "overlay_D2FCEF54_C472_4782_41BB_5808F1697666",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -15.01,
   "hfov": 23.33
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE, this.camera_E4845795_FAEB_9BA9_41E8_58EB54206DE4); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBA99F89_F4C2_D79A_41C1_DC5B5079107B",
   "pitch": -17.69,
   "yaw": 91.04,
   "hfov": 23.01,
   "distance": 100
  }
 ],
 "id": "overlay_D2475404_C476_D981_41E3_33485B94FED6",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.69,
   "hfov": 23.01
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 13.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_1_HS_2_0.png",
      "width": 363,
      "height": 632
     }
    ]
   },
   "pitch": -7.95,
   "roll": 0
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_EB6B4D26_C6F5_F0B5_41C9_D4CABC67AD05",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_1_HS_2_1_0_map.gif",
      "width": 114,
      "height": 200
     }
    ]
   },
   "pitch": -7.95,
   "hfov": 21.27
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 13.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.96,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_1_HS_3_0.png",
      "width": 101,
      "height": 92
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
 "id": "overlay_E00F195C_C6F7_3094_41B0_8AD5AC00D540",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_1_HS_3_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -9.35,
   "hfov": 5.96
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Waiting Room"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_1_HS_5_0.png",
      "width": 236,
      "height": 69
     }
    ]
   },
   "pitch": -4.24,
   "yaw": 13.34,
   "hfov": 13.96,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D8C5E23E_CA91_12E8_41E0_1BA8B83DCE71",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_1_HS_5_0_map.gif",
      "width": 54,
      "height": 16
     }
    ]
   },
   "pitch": -4.24,
   "hfov": 13.96
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 118.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.9,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_0_0.png",
      "width": 116,
      "height": 149
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
 "id": "overlay_E0D462AE_C66C_D1B4_41D2_91765E457576",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": 0.06,
   "hfov": 6.9
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D, this.camera_EF77C9F4_FAEB_976E_41C1_812441407275); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 44.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_1_0.png",
      "width": 128,
      "height": 139
     }
    ]
   },
   "pitch": 0.94
  }
 ],
 "id": "overlay_E18B8299_C66C_D19C_41CD_A7FDF6DAC855",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 0.94,
   "hfov": 7.63
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6, this.camera_EF5A0A1C_FAEB_94DE_41E6_9B93AF2E422E); this.mainPlayList.set('selectedIndex', 38)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 80.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_2_0.png",
      "width": 173,
      "height": 173
     }
    ]
   },
   "pitch": 2.49
  }
 ],
 "id": "overlay_E35BA5EC_C66F_73B5_41D5_73E146DD9516",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.49,
   "hfov": 10.29
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D, this.camera_EF4D5A07_FAEB_94A9_41E7_878DEE8283B3); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -63.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_3_0.png",
      "width": 128,
      "height": 139
     }
    ]
   },
   "pitch": -1.11
  }
 ],
 "id": "overlay_E6E15816_C66C_F095_41E1_661D238FE9D4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -1.11,
   "hfov": 7.63
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -132.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.97,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_4_0.png",
      "width": 117,
      "height": 123
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
 "id": "overlay_E6E28F40_C66D_50EC_41D6_45284A185E4E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.48,
   "hfov": 6.97
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6, this.camera_EF512A2F_FAEB_94FA_41E6_1F70E23409D6); this.mainPlayList.set('selectedIndex', 38)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -97.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.97,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_5_0.png",
      "width": 117,
      "height": 123
     }
    ]
   },
   "pitch": -1.11
  }
 ],
 "id": "overlay_E3F7223A_C66D_509C_41E8_A846B08DAB4F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.11,
   "hfov": 6.97
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1, this.camera_EF2EBA48_FAEB_94A6_41EB_E1270F395392); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB510FB5_F4C2_D78A_41D6_86D5C65B2CEA",
   "pitch": -15.65,
   "yaw": 173.72,
   "hfov": 28.62,
   "distance": 100
  }
 ],
 "id": "overlay_F8C24246_CAC8_DEF8_41DE_D128D843D301",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_6_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -15.65,
   "hfov": 28.62
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "progressBorderSize": 0,
 "id": "viewer_uidE3152717_FAEB_9CAA_41EB_C9A3016D28FB",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minWidth": 100,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "minHeight": 50,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#009933",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "ViewerArea10948"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EE98C877_C655_7093_41D0_4977209804A9, this.camera_E1614D35_FAE8_6CEE_41A4_CA8312FF5B6B); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB400FA3_F4C2_D78E_41E7_5C7A494A0CD7",
   "pitch": -17.14,
   "yaw": -0.04,
   "hfov": 23.08,
   "distance": 100
  }
 ],
 "id": "overlay_DF0B74E5_C637_71B7_41E1_DCB3E7439DCD",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.14,
   "hfov": 23.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C, this.camera_E1721D48_FAE8_6CA6_41DD_64EBB7F6BC33); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB4F9FA3_F4C2_D78E_41E3_B8CFC33AA1B4",
   "pitch": -16.8,
   "yaw": 179.79,
   "hfov": 23.12,
   "distance": 100
  }
 ],
 "id": "overlay_DFAF42B6_C637_F194_41C3_0B28B13C9F85",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -16.8,
   "hfov": 23.12
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E70C4518_F4BB_4B6A_41E8_9AFA161C6A26, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_E1EABAF0_F499_3EB9_41E5_41C6768B10E1, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -29.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_1_HS_2_0.png",
      "width": 85,
      "height": 90
     }
    ]
   },
   "pitch": 0.7
  }
 ],
 "id": "overlay_E652B626_F4B8_C9A6_41E1_C7E6FBCBABC4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.7,
   "hfov": 5.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83, this.camera_E191DD21_FAE8_6CE9_41CA_FCF1E13EF3D0); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 176.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.14,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_1_HS_0_0.png",
      "width": 173,
      "height": 173
     }
    ]
   },
   "pitch": 10.11
  }
 ],
 "id": "overlay_E6C8BF34_C674_F094_41C4_CFF1889D8182",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.11,
   "hfov": 10.14
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_1_HS_1_0.png",
      "width": 99,
      "height": 108
     }
    ]
   },
   "pitch": -18.93
  }
 ],
 "id": "overlay_E78F5EA3_F489_395E_41E4_0CAF0D47B384",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DD14356E_C65D_30B5_41D1_41E6217914AE_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -18.93,
   "hfov": 5.58
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7A04A01_F4BB_595A_4183_425F6688E47C, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_E1E4DAEE_F499_3EA9_41C0_64D02EFC9013, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_1_HS_1_0.png",
      "width": 140,
      "height": 154
     }
    ]
   },
   "pitch": 0.44
  }
 ],
 "id": "overlay_DE720DBC_CA93_11EF_41B6_F9D7E8FF7F31",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 0.44,
   "hfov": 8.35
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7049A75_F4B9_79BB_41C6_9778C559B3F0, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_E1E4AAEF_F499_3EA7_41EC_342C75DF127D, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -161.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_1_HS_2_0.png",
      "width": 136,
      "height": 122
     }
    ]
   },
   "pitch": -7.52
  }
 ],
 "id": "overlay_DE34627C_CA93_736F_41B0_57EDE2C12EDB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -7.52,
   "hfov": 8
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C, this.camera_E45CA822_FAEB_94EA_41E9_995C53EC7710); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB417FA2_F4C2_D78E_41D4_AF698A2EC863",
   "pitch": -13.44,
   "yaw": 122.55,
   "hfov": 23.49,
   "distance": 100
  }
 ],
 "id": "overlay_DEEA4EAD_CA93_33E9_41E7_7BF02C19FBF2",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_1_HS_3_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -13.44,
   "hfov": 23.49
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332, this.camera_E05ADBEB_FAE8_6B79_41C5_9830C07BA484); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB14F93_F4C2_D78E_41EA_7AFD87D87CC1",
   "pitch": -16.42,
   "yaw": -2.06,
   "hfov": 17.32,
   "distance": 100
  }
 ],
 "id": "overlay_D7B7F13E_C5EF_F094_41E3_4FD2B577003F",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -16.42,
   "hfov": 17.32
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314, this.camera_E048ABD8_FAE8_6BA6_41EE_5C5D96265679); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB0DF93_F4C2_D78E_41E6_F7474C9D77F6",
   "pitch": -14.76,
   "yaw": 179.66,
   "hfov": 23.04,
   "distance": 100
  }
 ],
 "id": "overlay_D7EFDD23_C5ED_70B3_41D3_BE70D16BFE09",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -14.76,
   "hfov": 23.04
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF, this.camera_E056CBFE_FAE8_6B5A_41D9_BEEC0782DC80); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB00F93_F4C2_D78E_41DA_B2E2BEDFE543",
   "pitch": -35.4,
   "yaw": 39.09,
   "hfov": 19.69,
   "distance": 50
  }
 ],
 "id": "overlay_D6559738_C5EB_709C_41E7_872971E0D21B",
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -35.4,
   "hfov": 19.69
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_E62B905B_F49B_49EE_41A7_28317729F512, null, false); this.playList_E30D86FE_FAEB_9D5A_41E3_C762AE1C084C.set('selectedIndex', 0); "
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -63.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_3_0.png",
      "width": 170,
      "height": 161
     }
    ]
   },
   "pitch": -7.86
  }
 ],
 "id": "overlay_D6F65F43_C5D7_50EC_41C0_17999BCDA017",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 15
     }
    ]
   },
   "pitch": -7.86,
   "hfov": 9.98
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -27.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_4_0.png",
      "width": 35,
      "height": 46
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
 "id": "overlay_D18F6619_C5D7_D09F_41D0_A2E9B71311D2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": -10.21,
   "hfov": 2.05
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Exotic BIRD PARK"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_5_0.png",
      "width": 292,
      "height": 74
     }
    ]
   },
   "pitch": -15.25,
   "yaw": -62.11,
   "hfov": 16.69,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D8DB7DA7_CAF3_1199_41DC_682262961E99",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_5_0_map.gif",
      "width": 63,
      "height": 16
     }
    ]
   },
   "pitch": -15.25,
   "hfov": 16.69
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "WAY TO NAALUKETTU"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_6_0.png",
      "width": 348,
      "height": 74
     }
    ]
   },
   "pitch": -39.77,
   "yaw": 35.89,
   "hfov": 15.87,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D90461D9_CAF7_31A8_41E3_4FF345997AFD",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_6_0_map.gif",
      "width": 75,
      "height": 16
     }
    ]
   },
   "pitch": -39.77,
   "hfov": 15.87
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uidE3152717_FAEB_9CAA_41EB_C9A3016D28FB",
 "id": "viewer_uidE3152717_FAEB_9CAA_41EB_C9A3016D28FBVideoPlayer"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF746CB7_C435_0215_41D3_84DE8EB51314, this.camera_E105DE12_FAE8_6CAA_41ED_10EC74EA8E19); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB4CF8C_F4C2_D79A_41E7_95C068CD9BD9",
   "pitch": -18.38,
   "yaw": 14.93,
   "hfov": 22.92,
   "distance": 100
  }
 ],
 "id": "overlay_D5E79D01_C5F7_306C_41C1_C6928652C747",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -18.38,
   "hfov": 22.92
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607, this.camera_E1173E31_FAE8_6CE9_41C1_1947C4303171); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB43F8C_F4C2_D79A_41E9_3022BF978CA0",
   "pitch": -15.63,
   "yaw": 123.37,
   "hfov": 23.26,
   "distance": 100
  }
 ],
 "id": "overlay_D586E657_C5F7_7093_41C5_C25AA509907C",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -15.63,
   "hfov": 23.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4, this.camera_E10ADDEE_FAE8_6F7A_41D6_311F96941C37); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBB39F8C_F4C2_D79A_41DC_1FA220EA9F01",
   "pitch": -27.64,
   "yaw": -75.33,
   "hfov": 21.4,
   "distance": 100
  }
 ],
 "id": "overlay_D4B9B866_C5F4_F0B5_41E5_D0B148AAA420",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_1_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -27.64,
   "hfov": 21.4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "WAY TO "
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_1_HS_3_0.png",
      "width": 323,
      "height": 135
     }
    ]
   },
   "pitch": -34.19,
   "yaw": -75.84,
   "hfov": 15.88,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D915FB5F_CA91_32A8_41B6_69CE2618FE20",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_1_HS_3_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -34.19,
   "hfov": 15.88
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Explore more"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_1_HS_4_0.png",
      "width": 317,
      "height": 82
     }
    ]
   },
   "pitch": -23.3,
   "yaw": 16.4,
   "hfov": 17.27,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D9543B5F_CAF1_72A9_41E4_A0A67E4E7FAE",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_1_HS_4_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -23.3,
   "hfov": 17.27
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B, this.camera_E1CCFCA3_FAE8_6DEA_41D5_BA2A624D376E); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 3.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.21,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_1_HS_0_0.png",
      "width": 173,
      "height": 175
     }
    ]
   },
   "pitch": -7.37
  }
 ],
 "id": "overlay_E321FF80_C66B_306C_41C3_9841F53B664B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.37,
   "hfov": 10.21
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D, this.camera_E1D9FCB6_FAE8_6DEA_41C7_40971BF8C2E7); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB53BFB3_F4C2_D78E_41E1_ACCFBBF96442",
   "pitch": -25.72,
   "yaw": -179.13,
   "hfov": 21.76,
   "distance": 100
  }
 ],
 "id": "overlay_E575355C_C66B_5094_41DC_F77047FEA319",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -25.72,
   "hfov": 21.76
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC174442_C65D_D0EC_41C5_1275482D010D, this.camera_E46E77BD_FAEB_9BDE_41E7_F40943A076CC); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB557FB3_F4C2_D78E_41E6_0AACAC739B87",
   "pitch": -19.68,
   "yaw": -0.17,
   "hfov": 22.74,
   "distance": 100
  }
 ],
 "id": "overlay_EED0D6D7_C66B_F194_41D5_CB50880608FB",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -19.68,
   "hfov": 22.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE, this.camera_E467C7D2_FAEB_9BAA_41C8_D434552A4846); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB54CFB3_F4C2_D78E_41D5_72D40B8E4501",
   "pitch": -17.97,
   "yaw": 179.65,
   "hfov": 22.98,
   "distance": 100
  }
 ],
 "id": "overlay_EE45E763_C66B_D0AC_41DF_7D31E6217050",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.97,
   "hfov": 22.98
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "paddingBottom": 0,
 "width": 58,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed_rollover.png",
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "paddingBottom": 0,
 "width": 58,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed_rollover.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "paddingBottom": 0,
 "width": 58,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "maxHeight": 37,
 "paddingBottom": 0,
 "width": 100,
 "shadow": false,
 "right": 30,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "bottom": 8,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 75,
 "class": "IconButton",
 "maxWidth": 49,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed_rollover.png",
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF9C0A5C_C437_061B_41DC_4726402C8817, this.camera_E0A47B4D_FAEB_94BE_41E3_627642718BCD); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBA12F7D_F4C2_D77A_41BB_56EA52B4DA22",
   "pitch": -12.51,
   "yaw": -9.39,
   "hfov": 23.58,
   "distance": 100
  }
 ],
 "id": "overlay_CB6011AA_C436_DA81_41DC_2326D73B2D16",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -12.51,
   "hfov": 23.58
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_FA68A084_F489_C959_41E8_93A2D294FC76, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -69.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.3,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_1_HS_1_0.png",
      "width": 107,
      "height": 94
     }
    ]
   },
   "pitch": -7.99
  }
 ],
 "id": "overlay_E16A4BAC_C66D_37B5_41C1_23B57863A2DF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_1_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -7.99,
   "hfov": 6.3
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "ENTER TO THANIMA FARM LIFE"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_1_HS_2_0.png",
      "width": 295,
      "height": 69
     }
    ]
   },
   "pitch": -15.59,
   "yaw": -8.54,
   "hfov": 16.88,
   "distance": 47.06
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D860A25F_CAAF_12A8_41E6_7CA000364B90",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_1_HS_2_0_map.gif",
      "width": 68,
      "height": 16
     }
    ]
   },
   "pitch": -15.59,
   "hfov": 16.88
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E7764909_F489_DB6A_41D8_7D9626A9DE97_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.44",
     "zoomFactor": 1.1,
     "y": "0.27"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E7764909_F489_DB6A_41D8_7D9626A9DE97_1",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.29",
     "zoomFactor": 1.1,
     "y": "0.47"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E7764909_F489_DB6A_41D8_7D9626A9DE97_2",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.59",
     "zoomFactor": 1.1,
     "y": "0.54"
    },
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_E7764909_F489_DB6A_41D8_7D9626A9DE97_AlbumPlayList"
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.48",
     "zoomFactor": 1.1,
     "y": "0.33"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C_1",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.55",
     "zoomFactor": 1.1,
     "y": "0.73"
    },
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_E6404EB8_F4B9_36A9_41A5_D6544BC89A7C_AlbumPlayList"
},
{
 "height": "84%",
 "id": "container_E302E6FE_FAEB_9D5A_41D4_0386CCD45DC6",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.viewer_uidE30276FE_FAEB_9D5A_41CF_1D16A6D06894",
  {
   "height": "30%",
   "left": 0,
   "scrollBarWidth": 7,
   "paddingBottom": 0,
   "backgroundOpacity": 0.3,
   "children": [
    "this.htmltext_E30296FF_FAEB_9D59_4197_07C9D31EDDEA"
   ],
   "layout": "vertical",
   "shadow": false,
   "right": 0,
   "overflow": "scroll",
   "borderRadius": 0,
   "minHeight": 20,
   "verticalAlign": "bottom",
   "minWidth": 20,
   "propagateClick": false,
   "bottom": 0,
   "backgroundColor": [],
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingRight": 0,
   "scrollBarColor": "#FFFFFF",
   "class": "Container",
   "backgroundColorRatios": [],
   "scrollBarVisible": "rollOver",
   "gap": 10,
   "horizontalAlign": "left",
   "backgroundColorDirection": "vertical",
   "scrollBarMargin": 2,
   "data": {
    "name": "Container10937"
   },
   "paddingTop": 0,
   "contentOpaque": true,
   "scrollBarOpacity": 0.5
  },
  "this.component_E303F700_FAEB_9CA6_41ED_0C7F557894C3",
  "this.component_E303D701_FAEB_9CA6_41DE_5326270B9CBD"
 ],
 "layout": "absolute",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 20,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 20,
 "propagateClick": false,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container10936"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "id": "htmlText_E655B05B_F49B_49EE_41D0_B51B48049BE9",
 "borderRadius": 0,
 "minHeight": 0,
 "width": "100%",
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "15%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText9048"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C, this.camera_E1847D0D_FAE8_6CBE_41E1_9D2DCC465A04); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB42DFA1_F4C2_D78A_41E7_2F1AF7EC26A1",
   "pitch": -21.6,
   "yaw": -13.35,
   "hfov": 26.03,
   "distance": 100
  }
 ],
 "id": "overlay_D198D684_C62F_D075_41DE_79D8A3859959",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.6,
   "hfov": 26.03
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF62C332_C435_062F_41D5_817A78857EF1, this.camera_E1B55CF9_FAE8_6D66_41C0_03AFEB05B16C); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB423FA1_F4C2_D78A_4179_4684BC5FCC25",
   "pitch": -20.71,
   "yaw": 170.39,
   "hfov": 22.59,
   "distance": 100
  }
 ],
 "id": "overlay_D1FE4F8D_C62F_3077_41D9_21E0D800487C",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -20.71,
   "hfov": 22.59
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_1_HS_0_0.png",
      "width": 105,
      "height": 79
     }
    ]
   },
   "pitch": 2.58
  }
 ],
 "id": "overlay_D80FA5D0_CABF_31B8_41BC_91810CFFAC51",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": 2.58,
   "hfov": 6.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EE98C877_C655_7093_41D0_4977209804A9, this.camera_E0A80B3B_FAEB_94DA_41D5_1471B407766F); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -101.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_1_HS_1_0.png",
      "width": 151,
      "height": 151
     }
    ]
   },
   "pitch": -9.39
  }
 ],
 "id": "overlay_DBD8F349_CABF_72A8_41D6_7BC74E690C0F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.39,
   "hfov": 8.82
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DBA6AEE3_CAB3_1399_41D6_7160296418E0_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF, this.camera_E12E4DA4_FAE8_6FEE_41EE_51C66E84E720); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB47BF9F_F4C2_D7B6_41D8_E31C8F9D3A82",
   "pitch": -22.5,
   "yaw": -0.31,
   "hfov": 26.12,
   "distance": 100
  }
 ],
 "id": "overlay_D62DBF76_C5DD_5094_41E5_4DF0AD5078C7",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -22.5,
   "hfov": 26.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332, this.camera_E15F2D80_FAE8_6FA7_41C3_79DA77DD81F6); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB47EF9F_F4C2_D7B6_41D8_F09CFB9DCA80",
   "pitch": -24.35,
   "yaw": 178.14,
   "hfov": 24.51,
   "distance": 100
  }
 ],
 "id": "overlay_D1B51457_C5DD_D094_41D5_5277586F8044",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -24.35,
   "hfov": 24.51
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB474F9F_F4C2_D7B6_41DA_A8645601C545",
   "pitch": -14.1,
   "yaw": -97.02,
   "hfov": 7.59,
   "distance": 100
  }
 ],
 "id": "overlay_E1166DD1_C6EF_73EF_41E8_B5A50537FC63",
 "data": {
  "label": "Info Red 08"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.1,
   "hfov": 7.59
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Children's park"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_1_HS_3_0.png",
      "width": 397,
      "height": 96
     }
    ]
   },
   "pitch": -21.97,
   "yaw": -94.4,
   "hfov": 21.82,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D9356226_CAF1_1298_41DE_F62B7B858803",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_1_HS_3_0_map.gif",
      "width": 66,
      "height": 16
     }
    ]
   },
   "pitch": -21.97,
   "hfov": 21.82
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9, this.camera_E0637BB1_FAE8_6BE9_41EE_78D39F0EDA7F); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBA96F89_F4C2_D79A_41EB_C4010048A9CC",
   "pitch": -17.49,
   "yaw": -1.41,
   "hfov": 24.09,
   "distance": 100
  }
 ],
 "id": "overlay_D3A4C228_C44E_7981_41DD_762A27934F8F",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.49,
   "hfov": 24.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D586DBB1_C432_CE80_41E7_856DF01E4064, this.camera_E0913B9E_FAE8_6BDA_41DE_C7DFAB375F85); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBA8CF8A_F4C2_D79E_416E_66BE22B15462",
   "pitch": -24.35,
   "yaw": 179.67,
   "hfov": 28.08,
   "distance": 100
  }
 ],
 "id": "overlay_DD7F5046_C5DE_3981_41E2_E4FF1B83BEF5",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -24.35,
   "hfov": 28.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E5D28FA3_F499_775F_41EA_ED8F25F1135B, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_E1C8B891_F499_397B_41CB_4BC54B5BFDF0, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 25.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_2_0.png",
      "width": 54,
      "height": 47
     }
    ]
   },
   "pitch": -8.69
  }
 ],
 "id": "overlay_E39FD859_C6F5_309C_41D3_ED6C01FFEC8B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_2_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -8.69,
   "hfov": 3.19
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321, this.camera_E07F4BC5_FAE8_6BAE_41B1_71E8E357DA9F); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBA85F8A_F4C2_D79E_41E4_F930DE4C8CE9",
   "pitch": -20.85,
   "yaw": 30.92,
   "hfov": 22.57,
   "distance": 50
  }
 ],
 "id": "overlay_D9723675_CA93_3379_41E4_2D3F31042996",
 "data": {
  "label": "Circle Arrow 01b Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_3_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -20.85,
   "hfov": 22.57
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "WAY TO NAALUKETTU"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_4_0.png",
      "width": 367,
      "height": 92
     }
    ]
   },
   "pitch": -25.64,
   "yaw": 28.33,
   "hfov": 19.65,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DEA60039_CA93_2EE8_41B6_F66EA2D57003",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_4_0_map.gif",
      "width": 63,
      "height": 16
     }
    ]
   },
   "pitch": -25.64,
   "hfov": 19.65
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B, this.camera_E1A8ACCA_FAE8_6DBA_41E0_0A45BF60937E); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -111.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.07,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_1_HS_0_0.png",
      "width": 151,
      "height": 151
     }
    ]
   },
   "pitch": -10.12
  }
 ],
 "id": "overlay_D3973503_CAB8_DA79_41DE_212207A15BD9",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.12,
   "hfov": 13.07
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -4.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.45,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_1_HS_1_0.png",
      "width": 192,
      "height": 192
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
 "id": "overlay_D2382EA3_CAB9_E7B8_41E3_4E45EAAB805B",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.88,
   "hfov": 16.45
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DFAAFBB1_CA48_ED98_41E3_E02561305BF6_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.29",
     "zoomFactor": 1.1,
     "y": "0.58"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_1",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.37",
     "zoomFactor": 1.1,
     "y": "0.44"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_2",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.42",
     "zoomFactor": 1.1,
     "y": "0.61"
    },
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_E5316BD3_F489_5EFE_41E5_AFAF651E9631_AlbumPlayList"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F, this.camera_E00EEC41_FAE8_6CA6_41D7_7414C7C7DBDE); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBAD7F82_F4C2_D78E_41E9_4F3B180F6B4E",
   "pitch": -21.33,
   "yaw": -7.47,
   "hfov": 30.43,
   "distance": 100
  }
 ],
 "id": "overlay_CB8357AD_C433_C680_41DF_DE3D9CB1F3FB",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.33,
   "hfov": 30.43
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977, this.camera_E03CAC28_FAE8_6CE6_418B_CE877937FC52); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FBACCF82_F4C2_D78E_41ED_AFC61FE9311C",
   "pitch": -30.53,
   "yaw": 175.33,
   "hfov": 26.25,
   "distance": 100
  }
 ],
 "id": "overlay_D41039E8_C432_4A80_41E8_27A322EFFCBD",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -30.53,
   "hfov": 26.25
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704, this.camera_E2BCCF08_FAE8_6CA7_41EA_B71A79F2AFF2); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB43CFA1_F4C2_D78A_41D7_5F963CBA1ECD",
   "pitch": -16.46,
   "yaw": -1,
   "hfov": 23.17,
   "distance": 100
  }
 ],
 "id": "overlay_D1179F93_C62D_506C_41BC_D72BE5AF44AC",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -16.46,
   "hfov": 23.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF, this.camera_E28EAF2D_FAE8_6CFE_41E9_62FAE6396BF1); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB435FA1_F4C2_D78A_41D6_231B544AD55F",
   "pitch": -15.77,
   "yaw": 179.52,
   "hfov": 23.25,
   "distance": 100
  }
 ],
 "id": "overlay_D19734E3_C62D_D1B3_41E5_F870D1090109",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -15.77,
   "hfov": 23.25
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_CF62C332_C435_062F_41D5_817A78857EF1_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC2CA898_C65D_319C_41E0_7EC16026556B, this.camera_E1BA0CE2_FAE8_6D6A_41C4_98F93B7A9D16); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 171.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_1_HS_0_0.png",
      "width": 166,
      "height": 156
     }
    ]
   },
   "pitch": -5.78
  }
 ],
 "id": "overlay_DDC98D77_CA48_2A98_41E5_0E5B81EDA90A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -5.78,
   "hfov": 14.55
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -160.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_1_HS_1_0.png",
      "width": 192,
      "height": 192
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
 "id": "overlay_D27DE70F_CA48_2688_41C9_92515E275248",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.85,
   "hfov": 16.87
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 1.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_1_HS_2_0.png",
      "width": 192,
      "height": 192
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
 "id": "overlay_DD9B8D53_CA48_2A98_41CD_A2BF3A5714AE",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.25,
   "hfov": 16.36
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_DC719D0A_CA48_2A88_41D9_15A3FB28D20D_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF62C332_C435_062F_41D5_817A78857EF1, this.camera_E014FC68_FAE8_6D67_41CF_EA6D4F419594); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB463F9F_F4C2_D7B6_41E1_482C99CFDEC3",
   "pitch": -17.28,
   "yaw": 1.61,
   "hfov": 24.9,
   "distance": 100
  }
 ],
 "id": "overlay_D0E8D0BB_C5D5_519C_41CD_A68B454E5700",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -17.28,
   "hfov": 24.9
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CF7E98D1_C435_026D_41C1_664EA10986C3, this.camera_E1E64C7C_FAE8_6D5E_41EA_3FCE531E518C); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB458FA0_F4C2_D78A_41E5_DC137479B724",
   "pitch": -15.56,
   "yaw": -165.5,
   "hfov": 25.12,
   "distance": 100
  }
 ],
 "id": "overlay_D080C993_C5D5_5393_41CE_A5FFA2FBF663",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -15.56,
   "hfov": 25.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D0F27392_C62B_506C_41A8_D96417AA39E4, this.camera_E01ACC55_FAE8_6CAE_41EA_94EA8ED73B0C); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_FB451FA0_F4C2_D78A_41E1_DC38CDEF8E35",
   "pitch": -18.65,
   "yaw": 141.29,
   "hfov": 24.71,
   "distance": 100
  }
 ],
 "id": "overlay_D3257D6B_C5D5_50BC_41E3_044D682AB07D",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -18.65,
   "hfov": 24.71
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Farm House Villa"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_5_0.png",
      "width": 386,
      "height": 113
     }
    ]
   },
   "pitch": -11.06,
   "yaw": 142.88,
   "hfov": 22.45,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D8C5B8CF_CAB7_1FA8_41E2_9284A0EE7C43",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_5_0_map.gif",
      "width": 54,
      "height": 16
     }
    ]
   },
   "pitch": -11.06,
   "hfov": 22.45
  }
 ]
},
{
 "rotate": false,
 "angle": -3,
 "distance": 43.99,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_tcap0.png",
    "width": 2160,
    "height": 2160
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7612CBB_F488_FAAF_41EA_3385260D52D8, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_E1E3AAEB_F499_3EAF_41D1_F0AE0C0643AE, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 105.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.8,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_6_0.png",
      "width": 85,
      "height": 104
     }
    ]
   },
   "pitch": -19.06
  }
 ],
 "id": "overlay_E675AB1C_F489_3F6A_41E4_F8A8BBEEDA74",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -19.06,
   "hfov": 4.8
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7AB7868_F4B9_39A9_41EA_6ABCEB9CEBD1, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, this.ImageResource_E1E0FAEC_F499_3EA9_41E8_78953DBFA1D0, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 139.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.94,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_7_0.png",
      "width": 66,
      "height": 67
     }
    ]
   },
   "pitch": -2.8
  }
 ],
 "id": "overlay_E615F928_F487_3BA9_41ED_A8373D0720C9",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.8,
   "hfov": 3.94
  }
 ]
},
{
 "begin": "this.updateMediaLabelFromPlayList(this.album_E08A6319_F499_4F6B_41C3_72B5988DC951_AlbumPlayList, this.htmltext_E30296FF_FAEB_9D59_4197_07C9D31EDDEA, this.albumitem_E30256FE_FAEB_9D5A_41E4_E82C1FAA6336); this.loopAlbum(this.playList_E30D86FE_FAEB_9D5A_41E3_C762AE1C084C, 0)",
 "media": "this.album_E08A6319_F499_4F6B_41C3_72B5988DC951",
 "class": "PhotoAlbumPlayListItem",
 "player": "this.viewer_uidE30276FE_FAEB_9D5A_41CF_1D16A6D06894PhotoAlbumPlayer",
 "id": "albumitem_E30256FE_FAEB_9D5A_41E4_E82C1FAA6336"
},
{
 "height": "50%",
 "id": "container_E3063703_FAEB_9CAA_41E9_9965ADB06C5A",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.viewer_uidE3066703_FAEB_9CAA_41EA_1744EBDCA552",
  {
   "height": "30%",
   "left": 0,
   "scrollBarWidth": 7,
   "paddingBottom": 0,
   "backgroundOpacity": 0.3,
   "children": [
    "this.htmltext_E306A704_FAEB_9CAE_41E2_E68971609561"
   ],
   "layout": "vertical",
   "shadow": false,
   "right": 0,
   "overflow": "scroll",
   "borderRadius": 0,
   "minHeight": 20,
   "verticalAlign": "bottom",
   "minWidth": 20,
   "propagateClick": false,
   "bottom": 0,
   "backgroundColor": [],
   "borderSize": 0,
   "paddingLeft": 0,
   "paddingRight": 0,
   "scrollBarColor": "#FFFFFF",
   "class": "Container",
   "backgroundColorRatios": [],
   "scrollBarVisible": "rollOver",
   "gap": 10,
   "horizontalAlign": "left",
   "backgroundColorDirection": "vertical",
   "scrollBarMargin": 2,
   "data": {
    "name": "Container10943"
   },
   "paddingTop": 0,
   "contentOpaque": true,
   "scrollBarOpacity": 0.5
  },
  "this.component_E307C705_FAEB_9CAE_41DC_A1DE1373BBAD",
  "this.component_E307A705_FAEB_9CAE_41B9_015CBC1FFA5D"
 ],
 "layout": "absolute",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 20,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 20,
 "propagateClick": false,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container10942"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "id": "htmlText_E74AA39D_F487_4F6B_41D6_CBC4962F3FA5",
 "borderRadius": 0,
 "minHeight": 0,
 "width": "100%",
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "50%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText10853"
 },
 "paddingTop": 10
},
{
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "maxHeight": 150,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "borderRadius": 0,
 "minHeight": 70,
 "verticalAlign": "middle",
 "width": "12%",
 "minWidth": 70,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "8%",
 "class": "IconButton",
 "transparencyActive": true,
 "maxWidth": 150,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed_rollover.png",
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "width": "14.22%",
 "minWidth": 50,
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "transparencyActive": false,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed_rollover.png",
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "width": "14.22%",
 "minWidth": 50,
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "transparencyActive": false,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed_rollover.png",
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "maxHeight": 150,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "borderRadius": 0,
 "minHeight": 70,
 "verticalAlign": "middle",
 "width": "12%",
 "minWidth": 70,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "8%",
 "class": "IconButton",
 "transparencyActive": true,
 "maxWidth": 150,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed_rollover.png",
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "right": 10,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "width": "14.22%",
 "minWidth": 50,
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "transparencyActive": false,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed_rollover.png",
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "right": 10,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "width": "14.22%",
 "minWidth": 50,
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "transparencyActive": false,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed_rollover.png",
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_0",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.34",
     "zoomFactor": 1.1,
     "y": "0.60"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_1",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.37",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_2",
   "camera": {
    "easing": "linear",
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.48",
     "zoomFactor": 1.1,
     "y": "0.53"
    },
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_E0C41CB8_F48F_3AAA_41CF_3EB15D660871_AlbumPlayList"
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "layout": "horizontal",
 "paddingBottom": 0,
 "width": 110,
 "shadow": false,
 "scrollBarWidth": 10,
 "right": "0%",
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "height": 110,
 "top": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
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
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "layout": "vertical",
 "shadow": false,
 "scrollBarWidth": 10,
 "right": "0%",
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "91.304%",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "Container",
 "height": "85.959%",
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "textShadowColor": "#000000",
 "fontFamily": "Bebas Neue",
 "fontWeight": "normal",
 "data": {
  "name": "Label25748"
 },
 "id": "Label_ED4090E9_CAC8_3B88_41B5_AA7FECE2A264",
 "left": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "89.23%",
 "textShadowBlurRadius": 8,
 "minWidth": 1,
 "top": "0%",
 "text": "THANIMA FARM LIFE",
 "textShadowHorizontalLength": 4,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "63.114%",
 "propagateClick": false,
 "class": "Label",
 "textShadowVerticalLength": 1,
 "fontSize": "10.54vmin",
 "horizontalAlign": "center",
 "textShadowOpacity": 0.62,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "maxHeight": 2,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": 53,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 2,
 "class": "Image",
 "maxWidth": 3000,
 "horizontalAlign": "center",
 "data": {
  "name": "white line"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_D9C9028F_CA78_3F89_41E7_95C007ED2E16"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "layout": "horizontal",
 "paddingBottom": 0,
 "width": 1199,
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 30,
 "height": 51,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "right": "10%",
 "overflow": "scroll",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "5%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "layout": "vertical",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "right": "10%",
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "5%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "right": "10%",
 "overflow": "scroll",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "5%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "layout": "vertical",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "right": "10%",
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "5%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "right": "15%",
 "overflow": "visible",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "7%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "right": "10%",
 "overflow": "scroll",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "5%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "layout": "vertical",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "right": "10%",
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "5%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "right": "15%",
 "overflow": "visible",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "7%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "right": "15%",
 "overflow": "visible",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "7%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "right": "15%",
 "overflow": "visible",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "7%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "right": "10%",
 "overflow": "scroll",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "shadowVerticalLength": 0,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "5%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "layout": "vertical",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "right": "10%",
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "5%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB5EF8C_F4C2_D79A_41C7_E58294CF241D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF0736C5_C435_0E75_41D4_7BCAF4718607_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB54F8C_F4C2_D79A_41C7_8932C51DA79F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB491FAC_F4C2_D79A_41D9_CC3291D74F96",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DFF50871_C65D_D0AF_41D2_EA5A6AAD9E83_1_HS_1_0.png",
   "width": 1220,
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB488FAC_F4C2_D79A_41E0_F7724D5FBD5C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D94D78C1_C65D_F1EF_41C5_921930906B67_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB499FAB_F4C2_D79E_41CC_4755FCFFBE12",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBAC3F82_F4C2_D78E_41DB_26489EC47D42",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF9FE465_C437_0235_41AB_DF8BCC2EF82F_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBAC6F83_F4C2_D78E_41A6_0C7D373EB0D4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_0_0.png",
   "width": 600,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB5E6FB6_F4C2_D7F6_41E7_5B60B7482612",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_1_0.png",
   "width": 600,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB5D1FB6_F4C2_D7F6_41E7_D9B296F8F0DD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EFBF8214_C654_D094_41E4_2B6ADCFDF462_1_HS_2_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB5D5FB6_F4C2_D7F6_41D5_D6A6388AC895",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF7312E3_C435_062D_41E0_3DB768FBF00C_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB2DF92_F4C2_D78E_41E4_F3D0BD7D27E8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB26F92_F4C2_D78E_41D0_EEFBF8259AE3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF746CB7_C435_0215_41D3_84DE8EB51314_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB1FF93_F4C2_D78E_41E9_751813FEE59A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB73F8A_F4C2_D79E_41EA_007675538608",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB76F8A_F4C2_D79E_41E2_2A14166C53E6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D2CD3D14_C452_CB80_41E8_64BC493895F9_1_HS_2_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB6DF8A_F4C2_D79E_41E7_DEBE4D5846DE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB4FEFA8_F4C2_D79A_41D0_155DFB688898",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EE98C877_C655_7093_41D0_4977209804A9_1_HS_6_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB4D1FAA_F4C2_D79E_41D2_8AF1176803BC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB4B5FAB_F4C2_D79E_41E0_1ECC2D693057",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DB9B536A_C655_70BD_41E3_F1DF4C8E19FF_1_HS_2_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB4AAFAB_F4C2_D79E_41DB_6B3ECEE163EA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB32F8C_F4C2_D79B_41E5_43AD552C8EB7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF6AA8E1_C435_022D_41E3_C9C3F31A24C4_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB28F8D_F4C2_D79A_41E3_9E5EC147594E",
 "frameDuration": 41
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.viewer_uidE3066703_FAEB_9CAA_41EA_1744EBDCA552",
 "id": "viewer_uidE3066703_FAEB_9CAA_41EA_1744EBDCA552PhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ],
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ]
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D0F27392_C62B_506C_41A8_D96417AA39E4_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB447FA0_F4C2_D78A_41E7_1C36475E8026",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB5DF8B_F4C2_D79E_41C4_A9C60AEAC80C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DEFC23BF_C45E_2C6E_41E5_B519D1985601_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB69F8B_F4C2_D79E_41D6_4879884545C4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB501FB5_F4C2_D78A_41EE_35465C40695A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_EF3E7008_C65D_D07C_41E2_ED04CC2D6F7D_1_HS_2_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB5F9FB5_F4C2_D78A_41ED_EDA24930BA6E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DF268CDD_C63C_D197_41E4_62400CB177AD_1_HS_4_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB4CDFAA_F4C2_D79E_41C4_C2261796EC96",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_1_0.png",
   "width": 1220,
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB564FAD_F4C2_D79A_419F_E5386CD548AC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DC174442_C65D_D0EC_41C5_1275482D010D_1_HS_3_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB55FFAD_F4C2_D79A_41D0_89F29C7BA94D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB41BFA1_F4C2_D78A_41E0_1826DD556D52",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF6BE5AB_C435_023D_41C8_0D07BE93AB2C_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB411FA1_F4C2_D78A_41E0_F55969B8B566",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E7C7DBD2_C65D_D7EC_41E4_DC9E5143DFB4_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB5E8FB6_F4C2_D7F6_41E1_DD5E7445AF2D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBBB6F98_F4C2_D7BA_41D4_548D71AD9942",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF7E3F63_C435_1E2D_41D4_A693EF9DB332_1_HS_2_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBBADF98_F4C2_D7BA_41EC_8737B9B8BE1C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBAA2F89_F4C2_D79A_41E1_76A3E2CD03ED",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D586DBB1_C432_CE80_41E7_856DF01E4064_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBA99F89_F4C2_D79A_41C1_DC5B5079107B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DC2CA898_C65D_319C_41E0_7EC16026556B_1_HS_6_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB510FB5_F4C2_D78A_41D6_86D5C65B2CEA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB400FA3_F4C2_D78E_41E7_5C7A494A0CD7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF13E7BD_C435_0E15_41E3_1794A293A32C_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB4F9FA3_F4C2_D78E_41E3_B8CFC33AA1B4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF120EB7_C435_7E15_41D8_B6BB3860E442_1_HS_3_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB417FA2_F4C2_D78E_41D4_AF698A2EC863",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB14F93_F4C2_D78E_41EA_7AFD87D87CC1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB0DF93_F4C2_D78E_41E6_F7474C9D77F6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF62C613_C435_01ED_41E2_99F63CE4918B_1_HS_2_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB00F93_F4C2_D78E_41DA_B2E2BEDFE543",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB4CF8C_F4C2_D79A_41E7_95C068CD9BD9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB43F8C_F4C2_D79A_41E9_3022BF978CA0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF687FF7_C435_3E15_41B2_E3B73716D247_1_HS_2_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBB39F8C_F4C2_D79A_41DC_1FA220EA9F01",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DFCCED4D_C65D_50F4_41E1_7B552B9C4FF1_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB53BFB3_F4C2_D78E_41E1_ACCFBBF96442",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB557FB3_F4C2_D78E_41E6_0AACAC739B87",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DC3951ED_C65D_53B7_41C2_B68BE50A3321_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB54CFB3_F4C2_D78E_41D5_72D40B8E4501",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CFFA36E4_C437_0E2B_41E1_E827AA432977_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBA12F7D_F4C2_D77A_41BB_56EA52B4DA22",
 "frameDuration": 41
},
{
 "progressBorderSize": 0,
 "id": "viewer_uidE30276FE_FAEB_9D5A_41CF_1D16A6D06894",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minWidth": 100,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "minHeight": 50,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#009933",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "ViewerArea10935"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "id": "htmltext_E30296FF_FAEB_9D59_4197_07C9D31EDDEA",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "paddingBottom": 5,
 "backgroundOpacity": 0.7,
 "shadow": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "width": "100%",
 "minWidth": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "class": "HTMLText",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "html": "",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText10938"
 },
 "paddingTop": 5,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "iconURL": "skin/album_left.png",
 "left": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "id": "component_E303F700_FAEB_9CA6_41ED_0C7F557894C3",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 0,
 "top": "45%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_E08A6319_F499_4F6B_41C3_72B5988DC951_AlbumPlayList, -1)",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton10939"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/album_right.png",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "id": "component_E303D701_FAEB_9CA6_41DE_5326270B9CBD",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 0,
 "top": "45%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_E08A6319_F499_4F6B_41C3_72B5988DC951_AlbumPlayList, 1)",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton10940"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB42DFA1_F4C2_D78A_41E7_2F1AF7EC26A1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF7E8CDD_C435_0215_41E1_DA7751D3F704_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB423FA1_F4C2_D78A_4179_4684BC5FCC25",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB47BF9F_F4C2_D7B6_41D8_E31C8F9D3A82",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB47EF9F_F4C2_D7B6_41D8_F09CFB9DCA80",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF7E98D1_C435_026D_41C1_664EA10986C3_1_HS_2_0.png",
   "width": 600,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB474F9F_F4C2_D7B6_41DA_A8645601C545",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBA96F89_F4C2_D79A_41EB_C4010048A9CC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBA8CF8A_F4C2_D79E_416E_66BE22B15462",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D3A8212C_C452_FB80_41D3_4BB6C41F2FCE_1_HS_3_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBA85F8A_F4C2_D79E_41E4_F930DE4C8CE9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBAD7F82_F4C2_D78E_41E9_4F3B180F6B4E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF9C0A5C_C437_061B_41DC_4726402C8817_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FBACCF82_F4C2_D78E_41ED_AFC61FE9311C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB43CFA1_F4C2_D78A_41D7_5F963CBA1ECD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_CF62C332_C435_062F_41D5_817A78857EF1_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB435FA1_F4C2_D78A_41D6_231B544AD55F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_0_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB463F9F_F4C2_D7B6_41E1_482C99CFDEC3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_1_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB458FA0_F4C2_D78A_41E5_DC137479B724",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D1E33AF4_C5DC_D195_41DB_1F714AD638CF_1_HS_2_0.png",
   "width": 1220,
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FB451FA0_F4C2_D78A_41E1_DC38CDEF8E35",
 "frameDuration": 41
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.viewer_uidE30276FE_FAEB_9D5A_41CF_1D16A6D06894",
 "id": "viewer_uidE30276FE_FAEB_9D5A_41CF_1D16A6D06894PhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ],
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ]
},
{
 "progressBorderSize": 0,
 "id": "viewer_uidE3066703_FAEB_9CAA_41EA_1744EBDCA552",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minWidth": 100,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "minHeight": 50,
 "playbackBarHeadBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#009933",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "ViewerArea10941"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "id": "htmltext_E306A704_FAEB_9CAE_41E2_E68971609561",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "paddingBottom": 5,
 "backgroundOpacity": 0.7,
 "shadow": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "width": "100%",
 "minWidth": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "class": "HTMLText",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "html": "",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText10944"
 },
 "paddingTop": 5,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "iconURL": "skin/album_left.png",
 "left": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "id": "component_E307C705_FAEB_9CAE_41DC_A1DE1373BBAD",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 0,
 "top": "45%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_E7764909_F489_DB6A_41D8_7D9626A9DE97_AlbumPlayList, -1)",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton10945"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/album_right.png",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "id": "component_E307A705_FAEB_9CAE_41B9_015CBC1FFA5D",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "minWidth": 0,
 "top": "45%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.loadFromCurrentMediaPlayList(this.album_E7764909_F489_DB6A_41D8_7D9626A9DE97_AlbumPlayList, 1)",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton10946"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "paddingBottom": 0,
 "width": 60,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 60,
 "class": "IconButton",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed_rollover.png",
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxHeight": 58,
 "paddingBottom": 0,
 "width": 58,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "click": "this.shareTwitter(window.location.href)",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxHeight": 58,
 "paddingBottom": 0,
 "width": 58,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "click": "this.shareFacebook(window.location.href)",
 "maxWidth": 58,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FB"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button panorama list"
 },
 "fontStyle": "normal",
 "layout": "horizontal",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 32,
 "width": 45.2,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "fontWeight": "bold",
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "height": 40,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "LIST",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button location"
 },
 "fontStyle": "normal",
 "layout": "horizontal",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 32,
 "width": 83.6,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "fontWeight": "bold",
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "height": 40,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "LOCATION",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button floorplan"
 },
 "fontStyle": "normal",
 "layout": "horizontal",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 32,
 "width": 103,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "fontWeight": "bold",
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "height": 40,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "ACTIVITIES",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button photoalbum"
 },
 "fontStyle": "normal",
 "layout": "horizontal",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 32,
 "width": 112,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "fontWeight": "bold",
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "height": 40,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "PHOTOALBUM",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button photoalbum"
 },
 "fontStyle": "normal",
 "layout": "horizontal",
 "id": "Button_D9C9028F_CA78_3F89_41E7_95C007ED2E16",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 32,
 "width": 87.2,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#009933"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "fontWeight": "bold",
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "height": 40,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "ABOUT US",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "layout": "absolute",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "85%",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "layout": "vertical",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "50%",
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "width": "25%",
 "minWidth": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "transparencyActive": false,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed_rollover.jpg",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "height": "100%",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "layout": "absolute",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "85%",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "layout": "vertical",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "50%",
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "width": "25%",
 "minWidth": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "transparencyActive": false,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed_rollover.jpg",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "height": 140,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontColor": "#666666",
 "paddingBottom": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "shadow": false,
 "scrollBarWidth": 10,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 125,
 "borderSize": 0,
 "itemMode": "normal",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#04A3E1",
 "class": "ThumbnailGrid",
 "itemLabelFontStyle": "normal",
 "paddingRight": 70,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "gap": 26,
 "backgroundColorRatios": [
  0
 ],
 "itemMaxHeight": 1000,
 "itemLabelFontFamily": "Montserrat",
 "itemBorderRadius": 0,
 "paddingTop": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemThumbnailWidth": 220,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemHorizontalAlign": "center",
 "itemThumbnailShadow": false,
 "rollOverItemLabelFontColor": "#04A3E1",
 "selectedItemThumbnailShadow": true,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "backgroundOpacity": 0.05,
 "scrollBarOpacity": 0.5,
 "itemPaddingTop": 3,
 "minHeight": 1,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowVerticalLength": 0,
 "propagateClick": false,
 "itemBackgroundColor": [],
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "paddingLeft": 70,
 "itemThumbnailOpacity": 1,
 "height": "100%",
 "itemMinHeight": 50,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemPaddingRight": 3,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemThumbnailShadow": true,
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList"
 },
 "itemHeight": 156,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 14,
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "rollOverItemThumbnailShadowHorizontalLength": 8
},
{
 "height": "100%",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "layout": "absolute",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "85%",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "layout": "vertical",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "15%",
 "minWidth": 400,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "width": "25%",
 "minWidth": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "transparencyActive": false,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed_rollover.jpg",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "height": 140,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minWidth": 1,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": "9px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 7,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 0,
 "minHeight": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Bebas Neue",
 "vrPointerSelectionColor": "#009933",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
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
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "layout": "absolute",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "height": 140,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "layout": "absolute",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "layout": "absolute",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "layout": "absolute",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "55%",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "layout": "vertical",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "45%",
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 60,
 "paddingRight": 60,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "middle",
 "width": "25%",
 "minWidth": 50,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "transparencyActive": false,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed_rollover.jpg",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "100%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "100%",
 "propagateClick": false,
 "class": "Image",
 "maxWidth": 2000,
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "layout": "vertical",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 520,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "layout": "horizontal",
 "paddingBottom": 0,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "height": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "right": 0,
 "toolTipPaddingLeft": 10,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minWidth": 1,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": "9px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 7,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 0,
 "minHeight": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "bottom": 0,
 "toolTipFontFamily": "Bebas Neue",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#009933",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
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
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "100%",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container arrows"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "layout": "vertical",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 520,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "layout": "horizontal",
 "paddingBottom": 0,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "height": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 100,
 "width": "77.115%",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 80,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 50,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "transparencyActive": false,
 "maxWidth": 60,
 "horizontalAlign": "right",
 "pressedRollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed_rollover.jpg",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "url": "https://www.google.com/maps/place/Thanima+Farm+Life/@10.7207995,76.7981594,689m/data=!3m2!1e3!4b1!4m9!3m8!1s0x3ba86be4a763fbb3:0x930fcab3fc8d93cb!5m2!4m1!1i2!8m2!3d10.7207995!4d76.7981594!16s%2Fg%2F11t71pdl9r?entry=ttu",
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "insetBorder": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "layout": "vertical",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 520,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "layout": "horizontal",
 "paddingBottom": 0,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "height": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 100,
 "width": "77.115%",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 80,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 50,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "transparencyActive": false,
 "maxWidth": 60,
 "horizontalAlign": "right",
 "pressedRollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed_rollover.jpg",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 100,
 "width": "77.115%",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 80,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 50,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "transparencyActive": false,
 "maxWidth": 60,
 "horizontalAlign": "right",
 "pressedRollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed_rollover.jpg",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minWidth": 1,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": "9px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 7,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 0,
 "minHeight": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Bebas Neue",
 "top": "0%",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#009933",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
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
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minWidth": 1,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": "9px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 7,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 0,
 "minHeight": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Bebas Neue",
 "top": "0%",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#009933",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
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
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "borderRadius": 0,
 "minHeight": 50,
 "verticalAlign": "top",
 "width": "10%",
 "minWidth": 50,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "10%",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "transparencyActive": false,
 "maxWidth": 60,
 "horizontalAlign": "right",
 "pressedRollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed_rollover.jpg",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "maxHeight": 1000,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "bottom",
 "width": "100%",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minWidth": 1,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "100%",
 "propagateClick": false,
 "class": "Image",
 "maxWidth": 2000,
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "layout": "horizontal",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 0,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "layout": "vertical",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 520,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "layout": "horizontal",
 "paddingBottom": 0,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "height": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "shadow": false,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "borderRadius": 0,
 "minHeight": 1,
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.53vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.33vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.62vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "fontFamily": "Bebas Neue Bold",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button"
 },
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0.7,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "fontWeight": "normal",
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0
 ],
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "shadowColor": "#000000",
 "layout": "horizontal",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "46%"
},
{
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "layout": "absolute",
 "shadow": false,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "80%",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "Container",
 "height": "30%",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container separator"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "shadow": false,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "borderRadius": 0,
 "minHeight": 1,
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.53vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.33vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "fontFamily": "Bebas Neue Bold",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button"
 },
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "fontStyle": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 32,
 "backgroundOpacity": 0.7,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "fontWeight": "normal",
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0
 ],
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "shadowColor": "#000000",
 "layout": "horizontal",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "46%"
},
{
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "shadow": false,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "borderRadius": 0,
 "minHeight": 1,
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.53vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "fontFamily": "Bebas Neue Bold",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button"
 },
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 32,
 "width": 207,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.7,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "propagateClick": false,
 "height": 59,
 "borderSize": 0,
 "paddingLeft": 0,
 "fontWeight": "normal",
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "fontSize": 34,
 "label": "lorem ipsum",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#04A3E1"
 ]
},
{
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "borderRadius": 0,
 "minHeight": 1,
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "45%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.53vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.08vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0
},
{
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "layout": "horizontal",
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "maxHeight": 200,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "width": "25%",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "100%",
 "class": "Image",
 "maxWidth": 200,
 "horizontalAlign": "left",
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "borderRadius": 0,
 "minHeight": 1,
 "width": "75%",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.74vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.74vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.74vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0
}],
 "minWidth": 20,
 "propagateClick": true,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "desktopMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "data": {
  "name": "Player468"
 },
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
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

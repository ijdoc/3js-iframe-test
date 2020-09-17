// Create layers
var iframeLayers = [null, null, null, null];

setInterval(() => {
  // Randomly toggle a frame
  layerId = Math.floor((Math.random() * 3.99));
  console.log(`Toggle layer ${layerId}`);
  toggleLayer(layerId);

}, 6000 /* 20 seconds */);

function toggleLayer(layerId) {
  if (iframeLayers[layerId] === null) {
    // Layer is off!
    turnLayerOn(layerId);
  } else {
    // Layer is on!
    turnLayerOff(layerId);
  }
}

function turnLayerOn(layerId) {
  iframeLayers[layerId] = document.createElement('iframe');
  iframeLayers[layerId].setAttribute('src', './assets/html/layer.html');
  iframeLayers[layerId].setAttribute('width', `${window.innerWidth * 0.75}px`);
  iframeLayers[layerId].setAttribute('height', `${window.innerHeight * 0.75}px`);
  iframeLayers[layerId].setAttribute('scrolling', `no`);
  switch (layerId) {
    case 0:
      iframeLayers[layerId].setAttribute('style', `position:absolute;top:0;left:0`);
      break;
    case 1:
      iframeLayers[layerId].setAttribute('style', `position:absolute;top:0;right:0`);
      break;
    case 2:
      iframeLayers[layerId].setAttribute('style', `position:absolute;bottom:0;left:0`);
      break;
    case 3:
      iframeLayers[layerId].setAttribute('style', `position:absolute;bottom:0;right:0`);
      break;
  }
  document.body.appendChild(iframeLayers[layerId]);
}

function turnLayerOff() {
  iframeLayers[layerId].setAttribute('src', '');
  iframeLayers[layerId].removeAttribute('src');
  document.body.removeChild(iframeLayers[layerId]);
  iframeLayers[layerId] = null;  // Mark for GC??
}
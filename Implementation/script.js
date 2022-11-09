document.getElementById("balanceBtn").addEventListener("click", setBalanced);
document.getElementById("perfBtn").addEventListener("click", setPerformance);
document.getElementById("saverBtn").addEventListener("click", setSaver);
document.body.addEventListener("change", setCustom);
  var allScreen = document.getElementsByClassName("screen");
  var allDisk = document.getElementsByClassName("disk");
  var allMedia = document.getElementsByClassName("media");
  var allVideo = document.getElementsByClassName("video");
  var allPlaying = document.getElementsByClassName("playing");
function setBalanced() {
  document.getElementById("plan").innerHTML = "Balanced";
	for(i = 0; i<allScreen.length; i++){
		allScreen[i].selectedIndex = "8";
	}
	for(i = 0; i<allDisk.length; i++){
		allDisk[i].selectedIndex = "10";
	}
	for(i = 0; i<allMedia.length; i++){
		allMedia[i].selectedIndex = "2";
	}
	for(i = 0; i<allVideo.length; i++){
		allVideo[i].selectedIndex = "1";
	}
	for(i = 0; i<allPlaying.length; i++){
		allPlaying[i].selectedIndex = "1";
	}
}

function setPerformance() {
  document.getElementById("plan").innerHTML = "Performance";
	for(i = 0; i<allScreen.length; i++){
		allScreen[i].selectedIndex = "15";
	}
	for(i = 0; i<allDisk.length; i++){
		allDisk[i].selectedIndex = "15";
	}
	for(i = 0; i<allMedia.length; i++){
		allMedia[i].selectedIndex = "0";
	}
	for(i = 0; i<allVideo.length; i++){
		allVideo[i].selectedIndex = "0";
	}
	for(i = 0; i<allPlaying.length; i++){
		allPlaying[i].selectedIndex = "0";
	}
}

function setSaver() {
  document.getElementById("plan").innerHTML = "Power Saver";
	for(i = 0; i<allScreen.length; i++){
		allScreen[i].selectedIndex = "2";
	}
	for(i = 0; i<allDisk.length; i++){
		allDisk[i].selectedIndex = "4";
	}
	for(i = 0; i<allMedia.length; i++){
		allMedia[i].selectedIndex = "1";
	}
	for(i = 0; i<allVideo.length; i++){
		allVideo[i].selectedIndex = "1";
	}
	for(i = 0; i<allPlaying.length; i++){
		allPlaying[i].selectedIndex = "2";
	}
}

function setCustom() {
  document.getElementById("plan").innerHTML = "Custom";
}

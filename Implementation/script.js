document.getElementById("balanceBtn").addEventListener("click", setBalanced);
document.getElementById("perfBtn").addEventListener("click", setPerformance);
document.getElementById("saverBtn").addEventListener("click", setSaver);
document.body.addEventListener("change", setCustom);

function setBalanced() {
  document.getElementById("plan").innerHTML = "Balanced";
}

function setPerformance() {
  document.getElementById("plan").innerHTML = "Performance";
}

function setSaver() {
  document.getElementById("plan").innerHTML = "Power Saver";
}

function setCustom() {
  document.getElementById("plan").innerHTML = "Custom";
}

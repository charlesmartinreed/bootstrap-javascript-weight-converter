// DOM Elements
const gramsCard = document.querySelector("#gramsOutput");
const kgCard = document.querySelector("#kgOutput");
const ozCard = document.querySelector("#ozOutput");
const outputDiv = document.querySelector("#output");

// Event Listeners
window.addEventListener("DOMContentLoaded", () => {
  outputDiv.style.visibility = "hidden";
});
document.querySelector("#lbsInput").addEventListener("input", convertValues);

function convertValues(e) {
  if (e.target.value === "") {
    outputDiv.style.visibility = "hidden";
  } else {
    outputDiv.style.visibility = "visible";

    let lbsValue = e.target.value;
    gramsCard.innerHTML = (lbsValue / 0.0022046).toFixed(2);
    kgCard.innerHTML = (lbsValue / 2.2046).toFixed(2);
    ozCard.innerHTML = (lbsValue * 16).toFixed(2);
  }
}

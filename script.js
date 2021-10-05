const getAPI = document.querySelector("#btn");
const outputDiv = document.querySelector("#output");
var text = "Aainda se mere khilaf bagawat ki..........KAT DALUNGA";
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + text;

function showError(){
  cosnsole.log("Bhai bhai bhut khtrnak error de rha h yar.. y eto bilkul bhr bhr ke error de rha h..")
}

function errorHandler(){
fetch(url).then(response => response.json()).then(json => outputDiv.innerHTML = json.contents.text).catch(showError);
}

getAPI.addEventListener("click", errorHandler)
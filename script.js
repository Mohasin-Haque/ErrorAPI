const getAPI = document.querySelector("#btn");
const outputDiv = document.querySelector("#output");
var text = "Aainda se mere khilaf bagawat ki..........KAT DALUNGA";
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + text;

function showError(error){
  cosnsole.log("Bhai bhai bhut khtrnak error de rha h yar.. y eto bilkul bhr bhr ke error de rha h.."+ error)
  if(error === 404){
    consolr.log("Page not found");
  }else if(error === 401){
    console.log("please log in to continue");
  }
}

function errorHandler(){
fetch(url).then(response => response.json()).then(json => outputDiv.innerHTML = json.contents.text).catch(showError);
}

getAPI.addEventListener("click", errorHandler)
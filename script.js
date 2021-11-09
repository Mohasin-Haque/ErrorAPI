const getAPI = document.querySelector("#btn");
const outputDiv = document.querySelector("#output");

var url = "https://unitube-server.herokuapp.com/playlists"

function errorHandler(){
fetch(url).then(response => {
  if(error === 404){
    outputDiv.innnerText = "page not found"
  }else if(error === 401){
    outputDiv.innerText = "please log in to continue"
  }else {
    return response.json();
  }
});
}

getAPI.addEventListener("click", errorHandler)
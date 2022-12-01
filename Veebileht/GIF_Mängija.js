//Rops11© GIF Mängija V1

//Tabel millesse saad lisada uusi mängitavaid gif'e
var GIFS = { 
  rallisõit : {
    Image : "./Pildid/RalliSõitStart.png",
    GIF : "./Pildid/RalliSõitMäng.gif",
  },
};

//Tabel, mis annab teada, kas gif juba mängib
var DebounceGIF = {}; 

//Lõpetab gif'i (muudab gif'i tagagasi pildiks)
function stopGIF(image) 
{
  var id = image.id;
  image.src = image.src = GIFS[id]["Image"]
  DebounceGIF[id] = false;
}

//Mängib gif'i (muudab pildi gif'iks)
function startGIF(image, length) 
{
  var id = image.id;
  //vaatame, et gif ei mängiks juba
  if (!DebounceGIF[id]) 
  {
    DebounceGIF[id] = true;
    image.src = GIFS[id]["GIF"]
    //käivitame viivitusega järgmise funktsiooni, mis muudab gif'i tagasi pildiks 
    setTimeout(stopGIF, length, image); //https://www.freecodecamp.org/news/javascript-wait-how-to-sleep-n-seconds-in-js-with-settimeout/
  }
}
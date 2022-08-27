let tableFixed = document.getElementById("table-arrows-fixed");
let tableSong = document.getElementById("table-arrows-song");

let rootElement = document.documentElement;

/* Code to determine variable table height */
let tableHeight = "-" + tableSong.offsetHeight + "px";
rootElement.style.setProperty("--tableHeight", tableHeight);

/* Code to calculate variable duration of translateY */
/* Allows to give a fixed speed to the animation */
let totalPageHeight = document.body.scrollHeight;
let speed = 160;
let duration = `${totalPageHeight / speed}s`;
rootElement.style.setProperty("--duration", duration);
console.log(duration);

/* Code to determine position of element HTML */
let positionTableFixedTop = tableFixed.offsetTop;
console.log(positionTableFixedTop);
/*let positionTableSongTop = tableSong.offsetTop;
console.log(positionTableSongTop);*/
/*let positionTableSong = tableSong.getBoundingClientRect();
console.log("x: "+ positionTableSong.x);*/



/* Test */
/*window.addEventListener('load', function(){
let i = 0;
for(i=0;i<15000;i++){
    console.log(tableSong.getBoundingClientRect().top);
}
});*/
/*console.log(tableSong.getBoundingClientRect().top);*/
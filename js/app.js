let tableFixed = document.getElementById("table-arrows-fixed");
let tableSong = document.getElementById("table-arrows-song");

let rootElement = document.documentElement;

/* Code to determine variable table height */
let tableHeight = "-" + tableSong.offsetHeight + "px";
rootElement.style.setProperty("--tableHeight", tableHeight);

/* Code to calculate variable duration of translateY */
/* Allows to give a fixed speed to the animation */
let totalPageHeight = document.body.scrollHeight;
let speed = 200;
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



/* Test 1 */
/*window.addEventListener('load', function(){
let i = 0;
for(i=0;i<15000;i++){
    console.log(tableSong.getBoundingClientRect().top);
}
});*/
/*console.log(tableSong.getBoundingClientRect().top);*/

/* Test 2 */
function callback(){
    tableSong.style.border = "1px solid";
    console.log("holis");
}

let options = {
    root: tableFixed,
    rootMargin: "0px",
    threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);

observer.observe(tableSong);
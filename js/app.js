//let tableFixed = document.getElementById("table-arrows-fixed");
//let tableSong = document.getElementById("table-arrows-song");

//let rootElement = document.documentElement;

/* Code to determine variable table height */
/*let tableHeight = "-" + tableSong.offsetHeight + "px";
rootElement.style.setProperty("--tableHeight", tableHeight);*/

/* Code to calculate variable duration of translateY */
/* Allows to give a fixed speed to the animation */
/*let totalPageHeight = document.body.scrollHeight;
let speed = 200;
let duration = `${totalPageHeight / speed}s`;
rootElement.style.setProperty("--duration", duration);
console.log(duration);*/

/* Code to determine position of element HTML */
/*let positionTableFixedTop = tableFixed.offsetTop;
console.log(positionTableFixedTop);
let positionTableSongTop = tableSong.offsetTop;
console.log(positionTableSongTop);
let positionTableSong = tableSong.getBoundingClientRect();
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
/*
const callback = (entries) => {
    entries.map((entry) => {
        console.log("Hello world!");
    });
};

let arrow1 = document.getElementById("arrow-1");
let arrow2 = document.getElementById("arrow-2");

let options = {
    root: arrow1,
    rootMargin: "0px",
    threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);

observer.observe(arrow2);*/

/* Test 3 */

const spyNav = document.getElementById("spy-nav");
const arrows = [...document.querySelectorAll("td > img")];

const spyItem = (entries, observer) => {
  entries.forEach((entry) => {
    const { id } = entry.target;
    const spy = spyNav.querySelector(`[href="#${id}"`);

    spy.classList.remove("active");
    if (!entry.isIntersecting) return;
    spy.classList.add("active");
  });
};

const observer = new IntersectionObserver(spyItem, {
  rootMargin: "-5% 0% -95% 0%",
  root: document, // <- This is only here to force the iframe document.
});

arrows.forEach((arrow) => observer.observe(arrow));


const pageScroll = () => {
  console.log("prueba");
  window.scrollBy(0,1);
  scrolldelay = setTimeout(pageScroll,4);
}

pageScroll();






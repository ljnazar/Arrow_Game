let tableArrowsFixed = document.getElementById("table-arrows-fixed");
let tableArrowsSong = document.getElementById("table-arrows-song");

/*console.log(tableArrowsFixed.offsetWidth);
console.log(tableArrowsFixed.offsetHeight);
console.log(tableArrowsSong.offsetWidth);
console.log(tableArrowsSong.offsetHeight);*/

let asd = "-" + tableArrowsSong.offsetHeight + "px";
let rootElement = document.documentElement;
rootElement.style.setProperty("--asd", asd);
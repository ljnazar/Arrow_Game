/*const sectionNamePlayer = document.getElementById("sectionNamePlayer");

const namePlayer = `
<form>
    <div>
        <label for="uname">Nombre del Jugador: </label>
        <input type="text" id="uname" name="name">
    </div>
    <div>
        <button onclick="startGame()">Enviar</button>
    </div>
</form>`;

sectionNamePlayer.innerHTML = namePlayer;*/

track1 = [
    0,1,0,0,
    1,0,0,1,
    0,0,0,0,
    0,0,1,0,
    0,0,0,0,
    1,0,0,0,
    0,0,0,1,
    0,0,0,0,
    0,0,0,0,
    0,0,0,1,
    0,1,0,0,
    1,0,0,1,
    0,0,0,0,
    1,0,0,0,
    0,0,0,1,
    0,0,0,0,
    0,0,0,1,
    0,0,1,0,
    0,0,0,0,
    0,0,0,1,
    0,1,0,0,
    0,0,0,0,
    0,0,0,0,
    1,0,0,1,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,1,0,0,
    0,0,0,0,
    0,1,0,0,
    0,0,0,0,
    0,0,1,1,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,1,0,0,
    0,0,0,0,
    0,0,1,0,
    0,0,0,0,
    1,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0];

const sectionGame = document.getElementById("sectionGame");

const arrowLeft = `<img id="left" src="img/up-arrow.svg" alt="arrow-up" class="h-20 mx-2"></img>`;
const arrowUp = `<img id="up" src="img/up-arrow.svg" alt="arrow-up" class="h-20 mx-2">`;
const arrowDown = `<img id="down" src="img/down-arrow.svg" alt="arrow-down" class="h-20 mx-2">`;
const arrowRight = `<img id="right" src="img/right-arrow.svg" alt="arrow-right" class="h-20 mx-2">`;

const arrowsFixed = `
<nav class="fixed pt-10 z-0 flex justify-center">
    <ul id="spy-nav" class="flex">
        <li><a href="#left">${arrowLeft}</a></li>
        <li><a href="#up">${arrowUp}</a></li>
        <li><a href="#down">${arrowDown}</a></li>
        <li><a href="#right">${arrowRight}</a></li>
    </ul>
</nav>`;

const contentTable = () => {
    let count = 0;
    let mainTable = document.createElement("table");
    mainTable.classList.add("absolute");
    mainTable.classList.add("top-96");
    mainTable.classList.add("z-10");
    sectionGame.append(mainTable);
    let rowTable = "";
    let aux = "";
    for(const arrow of track1){
        if(count === 0){
            rowTable = document.createElement("tr");
            mainTable.append(rowTable);
            arrowDirection = arrowLeft;
        }
        else if(count === 1){
            arrowDirection = arrowUp;
        }
        else if(count === 2){
            arrowDirection = arrowDown;
        }
        else if(count === 3){
            arrowDirection = arrowRight;
            count = -1;
        }
        if(arrow === 0){
            aux += `<td><div class="h-20 mx-2"></div></td>`;
        }
        else if(arrow === 1){
            aux += `<td>${arrowDirection}</td>`;
        }
        if(count === -1){
            rowTable.innerHTML = aux;
            aux = "";
        }
        count++;
    }
};

//const startGame = () => {

    //sectionNamePlayer.innerHTML = ``;

    sectionGame.classList.add("flex");
    sectionGame.classList.add("flex-col");
    sectionGame.classList.add("items-center");

    sectionGame.innerHTML = arrowsFixed;

    contentTable();

//};



const body = document.body

const spyNav = document.getElementById("spy-nav");
const arrows = [...document.querySelectorAll("td > img")];

const spyItem = (entries, observer) => {
  entries.forEach((entry) => {
    const { id } = entry.target;
    const spy = spyNav.querySelector(`[href="#${id}"`);

    spy.classList.remove("active");
    body.style.backgroundColor = "white";
    if (!entry.isIntersecting) return;
    spy.classList.add("active");
    console.log(id);
    body.style.backgroundColor = "red";
  });
};

const observer = new IntersectionObserver(spyItem, {
  root: null,
  rootMargin: "-8% 0% -92% 0%"
  //threshold: 0.2
});

arrows.forEach((arrow) => observer.observe(arrow));

const pageScroll = () => {
  window.scrollBy(0,1);
  scrolldelay = setTimeout(pageScroll,1);
};

pageScroll();






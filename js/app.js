const body = document.body;
//body.classList.add("overflow-y-hidden");

/*const main = document.getElementById("main");
const sectionNamePlayer = document.createElement("section");
const namePlayer = `
<div>
    <label for="uname">Nombre del Jugador: </label>
    <input type="text" id="uname" name="name">
</div>
<div>
    <button id="joinButton">Enviar</button>
</div>`;
sectionNamePlayer.innerHTML = namePlayer;
main.append(sectionNamePlayer);*/

track1 = [
    0,1,0,0,
    1,0,0,0,
    0,0,0,0,
    0,0,1,0,
    0,0,0,0,
    1,0,0,0,
    0,0,0,1,
    0,0,0,0,
    0,0,0,0,
    0,0,0,1,
    0,1,0,0,
    0,0,0,1,
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
    1,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,1,0,0,
    0,0,0,0,
    0,1,0,0,
    0,0,0,0,
    0,0,1,0,
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

const arrowLeft = `<img id="left" src="img/left-arrow.svg" alt="arrow-up" class="h-20 mx-2"></img>`;
const arrowUp = `<img id="up" src="img/up-arrow.svg" alt="arrow-up" class="h-20 mx-2">`;
const arrowDown = `<img id="down" src="img/down-arrow.svg" alt="arrow-down" class="h-20 mx-2">`;
const arrowRight = `<img id="right" src="img/right-arrow.svg" alt="arrow-right" class="h-20 mx-2">`;

const contentTable = (sectionGame) => {
    let count = 0;
    let mainTable = document.createElement("table");
    mainTable.className = "absolute top-96 z-10";
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

let spyElement = "";
let idArrow = "";

const startGame = () => {

    //sectionNamePlayer.remove();

    const sectionGame = document.createElement("section");
    sectionGame.className = "flex flex-col items-center";
    const arrowsFixed = `
        <nav class="fixed pt-10 z-0 flex justify-center">
            <ul id="spy-nav" class="flex">
                <li><a href="#left">${arrowLeft}</a></li>
                <li><a href="#up">${arrowUp}</a></li>
                <li><a href="#down">${arrowDown}</a></li>
                <li><a href="#right">${arrowRight}</a></li>
            </ul>
        </nav>`;
    sectionGame.innerHTML = arrowsFixed;
    main.append(sectionGame);

    contentTable(sectionGame);

    const spyNav = document.getElementById("spy-nav");
    const arrows = [...document.querySelectorAll("td > img")];

    const spyItem = (entries) => {
        entries.forEach((entry) => {
            const {id} = entry.target;
            idArrow = id;
            const spy = spyNav.querySelector(`[href="#${id}"`);
            spyElement = spy;

            spy.classList.remove("active");
            //body.style.backgroundColor = "white";
            if (!entry.isIntersecting) return;
            spy.classList.add("active");
            //console.log(spy.className);
            console.log(id);
            //body.style.backgroundColor = "red";
        });
    };

    const observer = new IntersectionObserver(spyItem, {
        root: null,
        rootMargin: "-16% 0% -84% 0%"
        //threshold: 0.2
    });

    arrows.forEach((arrow) => observer.observe(arrow));

    const pageScroll = () => {
        window.scrollBy(0,1);
        scrolldelay = setTimeout(pageScroll,1);
    };

    //pageScroll();

    body.addEventListener("keydown", (e) => {
        console.log(e);
        e.preventDefault();
        if(e.key === "ArrowLeft" && spyElement.className === "active" && idArrow === "left"){
            body.style.backgroundColor = "blue";
        }
        else if(e.key === "ArrowUp" && spyElement.className === "active" && idArrow === "up"){
            body.style.backgroundColor = "yellow";
        }
        else if(e.key === "ArrowDown" && spyElement.className === "active" && idArrow === "down"){
            body.style.backgroundColor = "gray";
        }
        else if(e.key === "ArrowRight" && spyElement.className === "active" && idArrow === "right"){
            body.style.backgroundColor = "green";
        }
        else{
            console.log("miss");
            body.style.backgroundColor = "red";
        }
    });
    
};

//const joinButton = document.getElementById("joinButton");

//joinButton.addEventListener("click", startGame);

startGame();
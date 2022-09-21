const body = document.body;
//body.className = "overflow-y-hidden bg-neutral-700";
body.className = "bg-neutral-700";

const main = document.getElementById("main");
const sectionNamePlayer = document.createElement("section");
const initialScreen = `
<div class="h-screen">
    <h1 class="mt-10 text-center text-white text-5xl font-bold">Pump it up!</h1>
    <video class="opacity-50 bg-z-index h-screen w-screen object-cover fixed inset-0" autoplay muted loop>
        <source src="video/Initial_vid.mp4" type="video/mp4">
    </video>
    <div class="h-1/2 flex flex-col items-center justify-center">
        <div class="mb-6">
            <label class="text-white text-3xl font-semibold mr-4" for="uname">player</label>
            <input id="input-name" class="uppercase w-32 bg-transparent border-white border-dashed rounded-lg border-4 text-white text-center focus:border-solid hover:border-solid" type="text" id="uname" name="name" maxlength="6" autocomplete="off">
        </div>
        <div>
            <button class="text-white text-3xl font-semibold border-white border-solid border-4 px-2 py-1" id="joinButton">Join</button>
        </div>
    </div>
</div>`;
sectionNamePlayer.innerHTML = initialScreen;
main.append(sectionNamePlayer);

const inputName = document.getElementById("input-name");

let namePlayer = "";

inputName.addEventListener("blur", (e) => {
    namePlayer = e.target.value;
});


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
    mainTable.className = "absolute top-full z-10";
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
let spyArrow = "";
let idArrow = "";
let heightScreen = window.innerHeight;

let marginPerfect = `-35px 0px ${125 - heightScreen}px 0px`;
let marginGreat = `-25px 0px ${135 - heightScreen}px 0px`;
let marginGood = `-15px 0px ${145 - heightScreen}px 0px`;
let marginBad = `-5px 0px ${155 - heightScreen}px 0px`;
let marginMiss = `0px 0px 0px 0px`;

/* Color palette */
const blue = "#3b82f6";
const green = "#22c55e";
const yellow = "#eab308";
const violet = "#d946ef";
const red = "#ef4444";

/*window.addEventListener("resize", () => {
    heightScreen = window.innerHeight;
    optionsPerfect.rootMargin = `-35px 0px ${125 - heightScreen}px 0px`;
    //console.log(optionsPerfect.rootMargin);
});

window.addEventListener("scroll", () => {
    heightScreen = window.innerHeight;
    optionsPerfect.rootMargin = `-35px 0px ${125 - heightScreen}px 0px`;
    //console.log(optionsPerfect.rootMargin);
});*/

const startGame = () => {

    sessionStorage.setItem("name", namePlayer);
    //console.log(sessionStorage.getItem("name"));

    sectionNamePlayer.remove();

    const sectionGame = document.createElement("section");
    sectionGame.className = "flex flex-col items-center";
    const backgroundTrack1 = `
    <video class="opacity-80 bg-z-index h-screen w-screen object-cover fixed inset-0" autoplay loop>
        <source src="video/Track_1.mp4" type="video/mp4">
    </video>`;
    const arrowsFixed = `
        <nav class="fixed pt-10 z-0 flex justify-center">
            <ul id="spy-nav" class="flex">
                <li><a href="#left">${arrowLeft}</a></li>
                <li><a href="#up">${arrowUp}</a></li>
                <li><a href="#down">${arrowDown}</a></li>
                <li><a href="#right">${arrowRight}</a></li>
            </ul>
        </nav>`;
    const lines = `
        <!-- Perfect -->
        <div id="linea1"></div>
        <div id="linea2"></div>
        <!-- Great -->
        <div id="linea3"></div>
        <div id="linea4"></div>
        <!-- Good -->
        <div id="linea5"></div>
        <div id="linea6"></div>
        <!-- Bad -->
        <div id="linea7"></div>
        <div id="linea8"></div>
        <!-- Miss -->
        <div id="linea9"></div>
        <div id="linea10"></div>`;
    //sectionGame.innerHTML = backgroundTrack1 + arrowsFixed + lines;
    sectionGame.innerHTML = arrowsFixed + lines;

    const textScore = document.createElement("h2");
    textScore.className = "hidden z-20 fixed mx-auto top-1/3 text-black font-bold text-5xl";
    sectionGame.append(textScore);

    main.append(sectionGame);

    contentTable(sectionGame);

    const spyNav = document.getElementById("spy-nav");
    const arrows = [...document.querySelectorAll("td > img")];

    let score = "";

    const spyItem = (entries, observer) => {
        entries.forEach(entry => {
            //console.log(entry);

            spyArrow = entry.target;
            idArrow = spyArrow.id;

            spyElement = spyNav.querySelector(`[href="#${idArrow}"`);

            spyElement.classList.remove("active");

            if(observer.rootMargin === marginPerfect){
                spyElement.classList.add("active");
                body.style.backgroundColor = green;
                score = "GREAT";
                if (!entry.isIntersecting) return;
                body.style.backgroundColor = blue;
                score = "PERFECT";
            }
            else if(observer.rootMargin === marginGreat){
                spyElement.classList.add("active");
                body.style.backgroundColor = yellow;
                score = "GOOD";
                if (!entry.isIntersecting) return;
                body.style.backgroundColor = green;
                score = "GREAT";
            }
            else if(observer.rootMargin === marginGood){
                spyElement.classList.add("active");
                body.style.backgroundColor = violet;
                score = "BAD";
                if (!entry.isIntersecting) return;
                body.style.backgroundColor = yellow;
                score = "GOOD";
            }
            else if(observer.rootMargin === marginBad){
                spyElement.classList.add("active");
                body.style.backgroundColor = red;
                score = "MISS";
                if (!entry.isIntersecting) return;
                body.style.backgroundColor = violet;
                score = "BAD";
            }
            // observer.rootMargin === marginMiss
            else{
                body.style.backgroundColor = red;
                score = "MISS";
            }

        });
    };

    let observerPerfect = new IntersectionObserver(spyItem, {rootMargin: marginPerfect, threshold: 1});

    let observerGreat = new IntersectionObserver(spyItem, {rootMargin: marginGreat, threshold: 1});

    let observerGood = new IntersectionObserver(spyItem, {rootMargin: marginGood, threshold: 1});

    let observerBad = new IntersectionObserver(spyItem, {rootMargin: marginBad, threshold: 1});

    let observerMiss = new IntersectionObserver(spyItem, {rootMargin: marginMiss, threshold: 1});

    arrows.forEach(arrow => {
        observerPerfect.observe(arrow);
        observerGreat.observe(arrow);
        observerGood.observe(arrow);
        observerBad.observe(arrow);
        observerMiss.observe(arrow);
    });

    const pageScroll = () => {
        window.scrollBy(0,2);
        scrolldelay = setTimeout(pageScroll,1);
    };

    pageScroll();

    body.addEventListener("keydown", (e) => {
        console.log(e);
        e.preventDefault();
        textScore.classList.remove("hidden");
        textScore.classList.add("block");
        if(e.key === "ArrowLeft" && spyElement.className === "active" && idArrow === "left"){

            spyArrow.classList.add("blink");
            textScore.textContent = score;

        }
        else if(e.key === "ArrowUp" && spyElement.className === "active" && idArrow === "up"){

            spyArrow.classList.add("blink");
            textScore.textContent = score;

        }
        else if(e.key === "ArrowDown" && spyElement.className === "active" && idArrow === "down"){

            spyArrow.classList.add("blink");
            textScore.textContent = score;

        }
        else if(e.key === "ArrowRight" && spyElement.className === "active" && idArrow === "right"){

            spyArrow.classList.add("blink");
            textScore.textContent = score;

        }
        else{

            spyElement.classList.remove("active");
            body.style.backgroundColor = red;
            score = "MISS";

            textScore.textContent = score;

        }
    });

}

const joinButton = document.getElementById("joinButton");

joinButton.addEventListener("click", startGame);

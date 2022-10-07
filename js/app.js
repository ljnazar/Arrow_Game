const body = document.body;
body.className = "overflow-y-hidden bg-neutral-700";
//body.className = "bg-neutral-700";

const main = document.getElementById("main");

const songInitial = new Audio("../audio/Hans_Zimmer_Alan_Walker_Time_Edit.mp3");
songInitial.loop = true;
songInitial.volume = 0.5;

let namePlayer = "";

let sectionInitial = "";

let generalVolume = "";

const renderInitialScreen = () => {

    sectionInitial = document.createElement("section");
    sectionInitial.className = "h-screen";

    const initialScreen = `
        <h1 class="mt-10 text-center text-zinc-200 text-5xl font-bold">Arrow Game</h1>
        <video class="opacity-50 bg-z-index h-screen w-screen object-cover fixed inset-0" autoplay muted loop>
            <source src="video/Initial_Vid.mp4" type="video/mp4">
        </video>`;

    sectionInitial.innerHTML = initialScreen;
    main.append(sectionInitial);

    const divInitial = document.createElement("div");
    divInitial.className = "h-1/2 flex flex-col items-center justify-center";

    let contentInitial = `
        <div class="mb-6">
            <p id="text-volume" class="text-lg font-bold text-gray-700 mb-2">Select the volume to play</p>
            <div class="flex">
                <input id="slider-volume" class="w-44" type="range" min="0" max="1" value="0.5" step="0.1">
                <span id="value-volume" class="text-base font-bold text-gray-700 ml-2"></span>
            </div>
        </div>
        <div>
            <button class="text-2xl font-semibold px-2 py-1" id="apply-button">Apply</button>
        </div>`;

    divInitial.innerHTML = contentInitial;

    sectionInitial.append(divInitial);

    //const textVolume = document.getElementById("text-volume");
    const sliderVolume = document.getElementById("slider-volume");
    const valueVolume = document.getElementById("value-volume");

    const applyButton = document.getElementById("apply-button");
    applyButton.disabled = true;
    applyButton.style.border = "solid 4px #3d3d3d";
    applyButton.style.color = "#3d3d3d";

    valueVolume.innerHTML = "50%";

    sliderVolume.addEventListener("change", function(event){

        applyButton.disabled = false;

        generalVolume = event.currentTarget.value;

        valueVolume.innerHTML = generalVolume * 100 + "%";

        songInitial.volume = generalVolume;
        songInitial.play();

    });

    applyButton.addEventListener("click", () => {

        contentInitial = `
        <div class="flex mb-6">
            <label class="color-gray-extend text-3xl font-semibold mr-4" for="uname">player</label>
            <input id="input-name" class="border-gray-extend uppercase w-32 bg-transparent rounded-lg border-4 text-slate-200 font-semibold text-center" type="text" id="uname" name="name" maxlength="8" autocomplete="off">
        </div>
        <div>
            <button class="color-gray-extend border-gray-extend text-3xl font-semibold px-2 py-1" id="join-button">Join</button>
        </div>`;

        divInitial.innerHTML = contentInitial;

        let inputName = document.getElementById("input-name");

        const joinButton = document.getElementById("join-button");
        joinButton.disabled = true;

        inputName.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
            event.preventDefault();
            joinButton.click();
            }
        });

        inputName.addEventListener("input", (e) => {
            namePlayer = e.target.value;
            joinButton.disabled = namePlayer === "" ? true : false;
        });

        joinButton.addEventListener("click", startGame);

    });
}

renderInitialScreen();


// Test //
/*let track1 = [];
const asd = () => {
    for (let i = 0; i < 1000; i++) {
        if(i % 4 === 0){
            track1.push(1);
        }
        track1.push(0);
        track1.push(0);
        track1.push(0);
    }
    track1.push(1);
    track1.push(1);
    track1.push(1);
    track1.push(1);
}
asd();*/

const track1 = [
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,1,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,1,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    1,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,1,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,1,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,1,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
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
    0,0,0,1,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    1,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,1,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,1,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    1,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,1,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,1,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,1,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    1,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    1,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,1,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    1,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,1,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    1,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,1,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,1,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    1,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,1,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
];

const arrowLeft = `<img id="left" src="img/left-arrow.svg" alt="arrow-up" class="h-20 mx-2"></img>`;
const arrowUp = `<img id="up" src="img/up-arrow.svg" alt="arrow-up" class="h-20 mx-2">`;
const arrowDown = `<img id="down" src="img/down-arrow.svg" alt="arrow-down" class="h-20 mx-2">`;
const arrowRight = `<img id="right" src="img/right-arrow.svg" alt="arrow-right" class="h-20 mx-2">`;

const renderTableArrows = (sectionGame) => {
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
let score = "";

const intersectionObserver = () => {

    const spyNav = document.getElementById("spy-nav");
    const arrows = [...document.querySelectorAll("td > img")];

    const spyItem = (entries, observer) => {
        entries.forEach(entry => {
            //console.log(entry);

            spyArrow = entry.target;
            idArrow = spyArrow.id;

            spyElement = spyNav.querySelector(`[href="#${idArrow}"`);

            spyElement.classList.remove("active");

            if(observer.rootMargin === marginPerfect){
                spyElement.classList.add("active");
                //body.style.backgroundColor = green;
                score = "GREAT";
                if (!entry.isIntersecting) return;
                //body.style.backgroundColor = blue;
                score = "PERFECT";

                console.log(songGame.currentTime);

            }
            else if(observer.rootMargin === marginGreat){
                spyElement.classList.add("active");
                //body.style.backgroundColor = yellow;
                score = "GOOD";
                if (!entry.isIntersecting) return;
                //body.style.backgroundColor = green;
                score = "GREAT";
            }
            else if(observer.rootMargin === marginGood){
                spyElement.classList.add("active");
                //body.style.backgroundColor = violet;
                score = "BAD";
                if (!entry.isIntersecting) return;
                //body.style.backgroundColor = yellow;
                score = "GOOD";
            }
            else if(observer.rootMargin === marginBad){
                spyElement.classList.add("active");
                //body.style.backgroundColor = red;
                score = "MISS";
                if (!entry.isIntersecting) return;
                //body.style.backgroundColor = violet;
                score = "BAD";
            }
            // observer.rootMargin === marginMiss
            else{
                //body.style.backgroundColor = red;
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
};

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

let scorePoints = 0;

//const songGame = new Audio("../audio/Boris_Brejcha_To_The_Moon_And_Back_feat_Ginger_Edit_Short.mp3");

const pageScroll = () => {
    window.scrollBy(0,2);
    scrolldelay = setTimeout(pageScroll,1);
};

const getData = async () => {
    try{
        const response = await fetch("../table-score.json");
        const data = await response.json();

        let scoreTable = "";
        data.forEach( x => {scoreTable += `${x.name} ------------------------------------------- ${x.score} <br>`});

        Swal.fire({
            width: 500,
            title: 'Score table',
            html: scoreTable,
            padding: '1em',
            color: '#716add',
            backdrop: 'rgba(0,0,123,0.4)'
          });

    } catch (e) {
        console.error(e);
    } finally {
        console.log("Async function end");
    }
};

const renderSectionPosition = () => {
    let timerInterval
    Swal.fire({
        title: "Loading results",
        html: "<b></b>",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector('b');
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
            location.reload();
            //renderInitialScreen();
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            getData();
        }
    })
};


const startGame = () => {

    songInitial.pause();
    songInitial.currentTime = 0;

    sessionStorage.setItem("name", namePlayer.toUpperCase());
    //console.log(sessionStorage.getItem("name"));

    sectionInitial.remove();

    const songGame = new Audio("../audio/Boris_Brejcha_To_The_Moon_And_Back_feat_Ginger_Edit_Short.mp3");

    songGame.play();
    songGame.volume = generalVolume;

    const sectionGame = document.createElement("section");
    sectionGame.className = "flex flex-col items-center";
    /*const backgroundTrack1 = `
    <video class="opacity-80 bg-z-index h-screen w-screen object-cover fixed inset-0" autoplay loop>
        <source src="video/Track_1.mp4" type="video/mp4">
    </video>`;*/
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

    main.append(sectionGame);

    renderTableArrows(sectionGame);

    songGame.addEventListener("ended", () => {

        sectionGame.remove();

        renderSectionPosition();

    });

    intersectionObserver();

    pageScroll();

    const scoreObjects = [
        {score: "PERFECT", color: blue, point: 100},
        {score: "GREAT", color: green, point: 50},
        {score: "GOOD", color: yellow, point: 20},
        {score: "BAD", color: violet, point: -20},
        {score: "MISS", color: red, point: -50}
    ];

    const numberScore = document.createElement("h2");
    numberScore.className = "text-shadow text-family z-20 fixed mt-12 ml-6 self-start font-bold text-7xl";

    sectionGame.append(numberScore);

    const hiddenTimer = (element) => {
        element.classList.remove("d-none");
        element.classList.add("d-block");
        setTimeout( () => {
            element.classList.remove("d-block");
            element.classList.add("d-none");
          }, 250);
    };

    // Performance Test //
    /*const hiddenTimer = (element) => {
        element.classList.remove("d-none");
        element.classList.add("d-block");
        setTimeout( () => {
            element.style.fontSize = "3.9rem"
          }, 25);
          setTimeout( () => {
            element.style.fontSize = "4rem"
          }, 50);
          setTimeout( () => {
            element.style.fontSize = "4.1rem"
          }, 75);
          setTimeout( () => {
            element.style.fontSize = "4.2rem"
          }, 100);
          setTimeout( () => {
            element.style.fontSize = "4.3rem"
          }, 125);
          setTimeout( () => {
            element.style.fontSize = "4.5rem"
          }, 150);
          setTimeout( () => {
            element.style.fontSize = "4.4rem"
          }, 175);
          setTimeout( () => {
            element.style.fontSize = "4.2rem"
          }, 200);
          setTimeout( () => {
            element.style.fontSize = "4rem"
          }, 225);
        setTimeout( () => {
            element.style.fontSize = "3.75rem"
            element.classList.remove("d-block");
            element.classList.add("d-none");
          }, 250);
    };*/

    const textScore = document.createElement("h2");
    textScore.className = "d-none text-shadow text-family z-20 fixed mx-auto top-1/3 font-bold text-7xl";
    sectionGame.append(textScore);

    const scoreRender = (score, scoreSelectObj) => {
        textScore.textContent = score;
        textScore.style.color = scoreSelectObj.color;
        textScore.classList.add("textAnimate");
        hiddenTimer(textScore);
        scorePoints += scoreSelectObj.point;
        numberScore.textContent = scorePoints;
        numberScore.style.color = scoreSelectObj.color;
    };

    body.addEventListener("keydown", (e) => {
        //console.log(e);
        e.preventDefault();

        console.log(`Punchi: ${songGame.currentTime}`);

        let scoreSelectObj = scoreObjects.find(obj => obj.score === score);

        if(e.key === "ArrowLeft" && spyElement.className === "active" && idArrow === "left"){

            spyArrow.classList.add("blink");
            scoreRender(score, scoreSelectObj);
        }
        else if(e.key === "ArrowUp" && spyElement.className === "active" && idArrow === "up"){

            spyArrow.classList.add("blink");
            scoreRender(score, scoreSelectObj);

        }
        else if(e.key === "ArrowDown" && spyElement.className === "active" && idArrow === "down"){

            spyArrow.classList.add("blink");
            scoreRender(score, scoreSelectObj);

        }
        else if(e.key === "ArrowRight" && spyElement.className === "active" && idArrow === "right"){

            spyArrow.classList.add("blink");
            scoreRender(score, scoreSelectObj);

        }
        else{

            spyElement.classList.remove("active");
            //body.style.backgroundColor = red;

            score = "MISS";
            scoreSelectObj = scoreObjects[4];
            scoreRender(score, scoreSelectObj);

        }
    });
}

import { database, ref, push, set, onValue } from './firebase-configure.js';

// Reference to database in firebase
const listRef = ref(database, 'table-score');

const body = document.body;
body.className = "overflow-y-hidden bg-neutral-700";

const main = document.getElementById("main");

const divLoader = document.createElement("div");
divLoader.className = "loader absolute inset-0 m-auto";
main.append(divLoader);

const songInitial = new Audio("../audio/Hans_Zimmer_Alan_Walker_Time_Edit.mp3");
songInitial.loop = true;
songInitial.volume = 0.5;

let namePlayer;
let sectionInitial;
let generalVolume;
let songGame;

const renderInitialScreen = () => {

    sectionInitial = document.createElement("section");
    sectionInitial.className = "h-screen";

    const initialScreen = `
        <h1 class="pt-10 text-center text-zinc-200 text-7xl font-family-title font-bold text-shadow">Arrow Game</h1>
        <video class="opacity-50 bg-z-index h-screen w-screen object-cover fixed inset-0" autoplay muted loop>
            <source src="video/Initial_Vid.mp4" type="video/mp4">
        </video>`;

    sectionInitial.innerHTML = initialScreen;
    sectionInitial.style.display = "none";
    main.append(sectionInitial);

    document.addEventListener('readystatechange', () => { 
        if (document.readyState === "complete") {
            divLoader.style.display = "none";
            sectionInitial.style.display = "block";
        }
    });

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

        const inputName = document.getElementById("input-name");
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

        songGame = new Audio("../audio/Boris_Brejcha_To_The_Moon_And_Back_feat_Ginger_Edit_Short.mp3");

        joinButton.addEventListener("click", startGame);

    });
};

renderInitialScreen();

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
    0,1,0,0,
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
    0,0,0,0,
    1,0,0,0,
    0,0,0,0,
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
    0,0,0,0,
    0,0,0,1,
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
    0,0,0,0,
    0,0,1,0,
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
    const mainTable = document.createElement("table");
    mainTable.className = "absolute top-full z-20";
    sectionGame.append(mainTable);
    let rowTable;
    let arrowDirection;
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

let spyElement;
let spyArrow;
let idArrow;
let score;
let handleKeyboard;
let handletouch;

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
                score = "GREAT";
                if (!entry.isIntersecting) return;
                score = "PERFECT";
            }
            else if(observer.rootMargin === marginGreat){
                spyElement.classList.add("active");
                score = "GOOD";
                if (!entry.isIntersecting) return;
                score = "GREAT";
            }
            else if(observer.rootMargin === marginGood){
                spyElement.classList.add("active");
                score = "BAD";
                if (!entry.isIntersecting) return;
                score = "GOOD";
            }
            else if(observer.rootMargin === marginBad){
                spyElement.classList.add("active");
                score = "MISS";
                if (!entry.isIntersecting) return;
                score = "BAD";
            }
            // if -> observer.rootMargin === marginMiss
            else{
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

let perfectCount = 0;
let greatCount = 0;
let goodCount = 0;
let badCount = 0;
let missCount = 0;
let totalScore = 0;
let maxCombo = 0;
let finalScore = 0;

let idIntervalScroll;

let finalScoreStorage;
let namePlayerStorage;

const propertyButtonScore = "border-2 border-gray-800 rounded-lg px-5 py-3 font-bold text text-gray-600 cursor-pointer hover:bg-gray-800 hover:text-gray-200";

const renderPositionTable = (scoreObjs) => {

    if(scoreObjs) {

        const sectionPosition = document.createElement("section");
        sectionPosition.className = "flex flex-col items-center";

        const divTitlePosition = document.createElement("div");
        divTitlePosition.className = "pt-24";
        divTitlePosition.innerHTML = "<h1 class='z-40 bg-zinc-50 w-full text-center fixed top-0 left-0 py-5 text-5xl font-family-score-table'>SCORE TABLE</h1>";
        sectionPosition.append(divTitlePosition);


        const tablePosition = document.createElement("table");
        tablePosition.className = "zigzag";
        sectionPosition.append(tablePosition);

        let aux = "";
        let count = 1;
        scoreObjs.forEach( obj => {
            if(obj.name === namePlayerStorage && obj.score === finalScoreStorage){
                aux += `<tr><td class="positionTable bg-teal-400">${count}</td><td class="positionTable bg-teal-400">${obj.name}</td><td class="positionTable bg-teal-400">${obj.score}</td></tr>`;
            }else{
                aux += `<tr><td class="positionTable bg-slate-200">${count}</td><td class="positionTable bg-slate-200">${obj.name}</td><td class="positionTable bg-slate-200">${obj.score}</td></tr>`;
            }
            count++;
        });

        const tbody = document.createElement("tbody");
        tbody.innerHTML = aux;
        tablePosition.append(tbody);

        const buttonPlayAgain = document.createElement("div");
        buttonPlayAgain.className = "z-40 mt-6 mb-72";
        buttonPlayAgain.innerHTML = `<button class="${propertyButtonScore}">Play Again</button>`;
        sectionPosition.append(buttonPlayAgain);
    
        main.append(sectionPosition);
    
        buttonPlayAgain.addEventListener("click", () => {
            location.reload();
        });

    } else {
        console.log("Error in render score table");
    }

};

// Get data to Firebase
const GetTableScore = () => {
    let scoreObjs = [];
    onValue(listRef, (snapshot) => {
        snapshot.forEach( childSnapshot => {
            scoreObjs.push(childSnapshot);
        });
    
        scoreObjs = JSON.stringify(scoreObjs);
        scoreObjs = JSON.parse(scoreObjs);
    
        scoreObjs.sort( (a, b) => {
            return b.score - a.score;
        });

        renderPositionTable(scoreObjs);
    
    }, {
        onlyOnce: true
    });
};

// Set data to Firebase
const newDataRef = push(listRef);
const writeDataScore = (storageA, storegeB) => {
    set(newDataRef, {"name": storageA, "score": storegeB});
};

const renderScore = () => {

    clearInterval(idIntervalScroll);

    const songCounter = new Audio("../audio/audio-counter.mp3");
    songCounter.volume = generalVolume;
    songCounter.loop = true;
    songCounter.play();

    const sectionScore = document.createElement("section");
    sectionScore.className = "flex flex-col items-center";
    sectionScore.innerHTML = "<h1 class='py-6 text-4xl font-family-player-points'>---- PLAYER POINTS ----</h1>";

    const tablePosition = document.createElement("table");
    let scoreDetail = `
    <tr><td><figure class='text-[#3b82f6] font-bold'>PERFECT</figure></td><td><figure class='text-[#3b82f6] font-bold text-center'><span id="scorePerfect">0</span></figure></td></tr>
    <tr><td><figure class='text-[#22c55e] font-bold'>GREAT</figure></td><td><figure class='text-[#22c55e] font-bold text-center'><span id="scoreGreat">0</span></figure></td></tr>
    <tr><td><figure class='text-[#eab308] font-bold'>GOOD</figure></td><td><figure class='text-[#eab308] font-bold text-center'><span id="scoreGood">0</span></figure></td></tr>
    <tr><td><figure class='text-[#d946ef] font-bold'>BAD</figure></td><td><figure class='text-[#d946ef] font-bold text-center'><span id="scoreBad">0</span></figure></td></tr>
    <tr><td><figure class='text-[#ef4444] font-bold'>MISS</figure></td><td><figure class='text-[#ef4444] font-bold text-center'><span id="scoreMiss">0</span></figure></td></tr>
    <tr><td><figure class='font-bold'>TOTAL SCORE</figure></td><td><figure class='font-bold text-center'><span id="scoreTotal">0</span></figure></td></tr>
    <tr><td><figure class='font-bold'>MAX COMBO</figure></td><td><figure class='font-bold text-center'><span id="scoreCombo">0</span></figure></td></tr>
    <tr><td><figure class='font-extrabold'>FINAL SCORE</figure></td><td><figure class='text-center font-extrabold'><span id="scoreFinal">0</span></figure></td></tr>`;
    tablePosition.innerHTML = scoreDetail;
    sectionScore.append(tablePosition);

    const buttonViewPosition = document.createElement("div");
    buttonViewPosition.className = "z-40 mt-8";
    buttonViewPosition.innerHTML = `<button class="${propertyButtonScore}">View Position Table</button>`;
    sectionScore.append(buttonViewPosition);

    main.append(sectionScore);

    const scorePerfect = document.getElementById("scorePerfect");
    const scoreGreat = document.getElementById("scoreGreat");
    const scoreGood = document.getElementById("scoreGood");
    const scoreBad = document.getElementById("scoreBad");
    const scoreMiss = document.getElementById("scoreMiss");
    const scoreTotal = document.getElementById("scoreTotal");
    const scoreCombo = document.getElementById("scoreCombo");
    const scoreFinal = document.getElementById("scoreFinal");

    const toPositive = (number) => {
        let aux;
        if(number < 0){
            aux = number;
            aux -= aux * 2;
        }
        else if(number > 0){
            aux = number;
        }else{
            aux = 0;
        }
        return aux;
    };

    let flagEqual = false;
    
    let counterScore = (timeOut, speed, scoreNumber, outScore) => {

        let initialNumber = 0;
    
        setTimeout(() => {
            let interval = setInterval(()=>{
                if(initialNumber >= toPositive(scoreNumber)){
                    clearInterval(interval);
                    if(initialNumber === toPositive(finalScore)){
                        if(flagEqual){
                            songCounter.pause();
                            songCounter.currentTime = 0; 
                        }else if(totalScore === finalScore){
                            flagEqual = true;
                        }else{
                            songCounter.pause();
                            songCounter.currentTime = 0; 
                        }   
                    }  
                } else {
                    if(scoreNumber >= 0){
                        initialNumber ++;
                        outScore.innerHTML = initialNumber;
                    }else{
                        initialNumber ++;
                        outScore.innerHTML = "-" + initialNumber;
                    }
                }
            }, speed);
        }, timeOut);
    };
    
    counterScore(0, 100, perfectCount, scorePerfect);
    counterScore(500, 100, greatCount, scoreGreat);
    counterScore(1000, 100, goodCount, scoreGood);
    counterScore(1500, 100, badCount, scoreBad);
    counterScore(2000, 100, missCount, scoreMiss);
    counterScore(2500, 2, totalScore, scoreTotal);
    counterScore(3000, 100, maxCombo, scoreCombo);
    counterScore(3500, 2, finalScore, scoreFinal);

    buttonViewPosition.addEventListener("click", () => {
        sectionScore.remove();
        GetTableScore();
    });

    finalScoreStorage = sessionStorage.getItem("finalScore");
    namePlayerStorage = sessionStorage.getItem("name");

    writeDataScore(namePlayerStorage, finalScoreStorage);

};

const loadGame = (sectionGame, bgImage) => {
    let timerInterval
    Swal.fire({
        title: "Instructions to play",
        html: "<p class='font-medium'>Match the arrows on screen using your keyboard</p><br><img class='m-auto w-36' src='../img/keyboard-arrows.png'></img><br>Loading...",
        timer: 8000,
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
        willClose: () => {
            clearInterval(timerInterval);
            sectionGame.classList.remove("d-none");
            sectionGame.classList.add("d.block");
            bgImage.classList.remove("d-none");
            bgImage.classList.add("d.block");
            songGame.volume = generalVolume;
            songGame.play();
            // Auto Scroll
            idIntervalScroll = setInterval(() => {
                window.scrollBy(0, 1.6);
            }, 1);
        }
    });
};

const startGame = () => {

    songInitial.pause();
    songInitial.currentTime = 0;

    sessionStorage.setItem("name", namePlayer.toUpperCase());

    sectionInitial.remove();

    const bgImage = document.createElement("div");
    bgImage.className = "d-none z-30 fixed inset-0";
    bgImage.style.backgroundImage = "url('../img/mountains.png')";
    main.append(bgImage);

    const sectionGame = document.createElement("section");
    sectionGame.className = "d-none flex flex-col items-center";

    loadGame(sectionGame, bgImage);

    const arrowsFixed = `
        <nav class="fixed pt-10 z-10 flex justify-center">
            <ul id="spy-nav" class="flex">
                <li><a href="#left">${arrowLeft}</a></li>
                <li><a href="#up">${arrowUp}</a></li>
                <li><a href="#down">${arrowDown}</a></li>
                <li><a href="#right">${arrowRight}</a></li>
            </ul>
        </nav>`;
    sectionGame.innerHTML = arrowsFixed;

    const bgColor = document.createElement("div");
    bgColor.className = "z-0 fixed inset-0 opacity-20";
    sectionGame.append(bgColor);

    main.append(sectionGame);

    renderTableArrows(sectionGame);

    songGame.addEventListener("ended", () => {
        sectionGame.remove();
        divLoader.className = "loader absolute inset-0 mt-52 mx-auto";
        divLoader.style.display = "block";
        finalScore =  maxCombo ? totalScore * maxCombo : totalScore;
        sessionStorage.setItem("finalScore", finalScore);
        body.className = "bg-zinc-50";
        setTimeout( () => {
            divLoader.style.display = "none";
            renderScore();
        }, 3000);
    });

    intersectionObserver();

    const scoreObjects = [
        {score: "PERFECT", color: blue, point: 100},
        {score: "GREAT", color: green, point: 50},
        {score: "GOOD", color: yellow, point: 20},
        {score: "BAD", color: violet, point: -20},
        {score: "MISS", color: red, point: -50}
    ];

    const hiddenTimer = (element) => {
        element.classList.remove("d-none");
        element.classList.add("d-block");
        setTimeout( () => {
            element.classList.remove("d-block");
            element.classList.add("d-none");
          }, 250);
    };

    const textScore = document.createElement("h2");
    textScore.className = "d-none text-shadow font-family-score-text z-20 fixed mx-auto top-1/3 font-bold text-7xl";
    sectionGame.append(textScore);

    /*const maxComboScore = document.createElement("h2");
    maxComboScore.className = "d-none text-shadow font-family-score-text z-20 fixed mx-auto top-1/3 mt-20 font-bold text-7xl";
    sectionGame.append(maxComboScore);*/

    let preScore;

    const scoreRender = (score, scoreSelectObj) => {
        textScore.textContent = score;
        textScore.style.color = scoreSelectObj.color;
        textScore.classList.add("textAnimate");
        hiddenTimer(textScore);
        totalScore += scoreSelectObj.point;
        if(score === "PERFECT"){
            perfectCount += 1;
            if(preScore === "PERFECT"){
                maxCombo += 1;
                /*maxComboScore.textContent = maxCombo;
                maxComboScore.style.color = scoreSelectObj.color;
                maxComboScore.classList.add("textAnimate");
                hiddenTimer(maxComboScore);*/
            }
        }else if(score === "GREAT"){
            greatCount += 1;
        }else if(score === "GOOD"){
            goodCount += 1;
        }else if(score === "BAD"){
            badCount += 1;
        }else if(score === "MISS"){
            missCount += 1;
        }
        preScore = score;
    };

    handleKeyboard =  (e) => {
        //console.log(e);
        e.preventDefault();

        let scoreSelectObj = scoreObjects.find(obj => obj.score === score);

        if(e.key === "ArrowLeft" && spyElement.className === "active" && idArrow === "left"){

            spyArrow.classList.add("blink");
            scoreRender(score, scoreSelectObj);
            bgColor.style.backgroundColor = scoreSelectObj.color;
        }
        else if(e.key === "ArrowUp" && spyElement.className === "active" && idArrow === "up"){

            spyArrow.classList.add("blink");
            scoreRender(score, scoreSelectObj);
            bgColor.style.backgroundColor = scoreSelectObj.color;

        }
        else if(e.key === "ArrowDown" && spyElement.className === "active" && idArrow === "down"){

            spyArrow.classList.add("blink");
            scoreRender(score, scoreSelectObj);
            bgColor.style.backgroundColor = scoreSelectObj.color;

        }
        else if(e.key === "ArrowRight" && spyElement.className === "active" && idArrow === "right"){

            spyArrow.classList.add("blink");
            scoreRender(score, scoreSelectObj);
            bgColor.style.backgroundColor = scoreSelectObj.color;

        }
        else{

            spyElement.classList.remove("active");
            bgColor.style.backgroundColor = red;
            score = "MISS";
            scoreSelectObj = scoreObjects[4];
            scoreRender(score, scoreSelectObj);

        }

    }

    handleKeyboard =  (e) => {

        alert(e);

    }

    body.addEventListener("keydown", handleKeyboard);
    body.addEventListener("touchstart", handletouch);

};

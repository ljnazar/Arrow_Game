import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyATx7DWFimsJ0yerkc2p1E_nMyKkoIwE0w",
    authDomain: "game-arrows.firebaseapp.com",
    projectId: "game-arrows",
    storageBucket: "game-arrows.appspot.com",
    messagingSenderId: "498699156880",
    appId: "1:498699156880:web:0ff95efe8d0375d745c715",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://game-arrows-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database, ref, push, set, onValue }
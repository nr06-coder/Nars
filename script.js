const loginBtn =
    document.getElementById("loginBtn");


const startBtn =
    document.getElementById("startBtn");


const heroStartBtn =
    document.getElementById("heroStartBtn");


const exploreBtn =
    document.getElementById("exploreBtn");


// LOGIN

loginBtn.addEventListener(
    "click",
    function () {

        window.location.href =
            "login.html";

    }
);


// GET STARTED

startBtn.addEventListener(
    "click",
    function () {

        window.location.href =
            "signup.html";

    }
);


// HERO GET STARTED

heroStartBtn.addEventListener(
    "click",
    function () {

        window.location.href =
            "signup.html";

    }
);


// EXPLORE

exploreBtn.addEventListener(
    "click",
    function () {

        document
            .getElementById("features")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);
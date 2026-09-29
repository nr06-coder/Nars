// ===============================
// NARS SPORTS HUB
// ===============================


// ELEMENTS

const sportsSearch =
    document.getElementById("sportsSearch");

const sportsSearchBtn =
    document.getElementById("sportsSearchBtn");

const sportsCards =
    document.querySelectorAll(".sports-card");


// ===============================
// OPEN SPORT
// ===============================

function openSport(sport) {

    alert(
        sport +
        " section will be available soon in NARS 🏆"
    );

}


// ===============================
// SEARCH SPORTS
// ===============================

function searchSports() {

    const searchText =
        sportsSearch.value
            .trim()
            .toLowerCase();


    // Empty search → show everything

    if (searchText === "") {

        sportsCards.forEach(
            function (card) {

                card.style.display = "flex";

            }
        );

        return;

    }


    let found = false;


    sportsCards.forEach(
        function (card) {

            const content =
                card.textContent.toLowerCase();


            if (
                content.includes(searchText)
            ) {

                card.style.display = "flex";

                found = true;

            } else {

                card.style.display = "none";

            }

        }
    );


    if (!found) {

        alert(
            'No sport found for "' +
            sportsSearch.value +
            '"'
        );

    }

}


// ===============================
// SEARCH BUTTON
// ===============================

sportsSearchBtn.addEventListener(
    "click",
    function () {

        searchSports();

    }
);


// ===============================
// ENTER KEY
// ===============================

sportsSearch.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchSports();

        }

    }
);
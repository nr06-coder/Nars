// ===============================
// NARS ENTERTAINMENT HUB
// ===============================


// ELEMENTS

const entSearch =
    document.getElementById("entSearch");

const entSearchBtn =
    document.getElementById("entSearchBtn");

const entCards =
    document.querySelectorAll(".ent-card");


// ===============================
// OPEN ENTERTAINMENT
// ===============================

function openEntertainment(category) {

    alert(
        category +
        " section will be available soon in NARS 🎬"
    );

}


// ===============================
// SEARCH
// ===============================

function searchEntertainment() {

    const searchText =
        entSearch.value
            .trim()
            .toLowerCase();


    // Empty search → show all

    if (searchText === "") {

        entCards.forEach(
            function (card) {

                card.style.display = "flex";

            }
        );

        return;

    }


    let found = false;


    entCards.forEach(
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
            'No entertainment category found for "' +
            entSearch.value +
            '"'
        );

    }

}


// ===============================
// SEARCH BUTTON
// ===============================

entSearchBtn.addEventListener(
    "click",
    function () {

        searchEntertainment();

    }
);


// ===============================
// ENTER KEY
// ===============================

entSearch.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchEntertainment();

        }

    }
);
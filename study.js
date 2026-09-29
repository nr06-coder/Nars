// ===============================
// NARS STUDY HUB
// ===============================


// ELEMENTS

const studySearch =
    document.getElementById("studySearch");

const studySearchBtn =
    document.getElementById("studySearchBtn");

const studyCards =
    document.querySelectorAll(".study-card");


// ===============================
// OPEN STUDY SECTION
// ===============================

function openStudy(section) {

    alert(
        section +
        " section will be available soon in NARS 📚"
    );

}


// ===============================
// SEARCH FUNCTION
// ===============================

function searchStudy() {

    const searchText =
        studySearch.value
            .trim()
            .toLowerCase();


    if (searchText === "") {

        studyCards.forEach(
            function (card) {

                card.style.display = "flex";

            }
        );

        return;

    }


    let found = false;


    studyCards.forEach(
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
            'No study section found for "' +
            studySearch.value +
            '"'
        );

    }

}


// ===============================
// SEARCH BUTTON
// ===============================

studySearchBtn.addEventListener(
    "click",
    function () {

        searchStudy();

    }
);


// ===============================
// ENTER KEY
// ===============================

studySearch.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchStudy();

        }

    }
);
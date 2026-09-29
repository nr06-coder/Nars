const searchInput =
    document.getElementById("eduSearch");

const searchBtn =
    document.getElementById("searchBtn");


// SEARCH

function searchEducation() {

    const query =
        searchInput.value.trim();

    if (query === "") {

        alert(
            "What would you like to find?"
        );

        return;
    }

    alert(
        'NARS Education Search:\n\n"' +
        query +
        '"\n\nSmart education search is coming soon 🚀'
    );
}


searchBtn.addEventListener(
    "click",
    searchEducation
);


searchInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchEducation();

        }

    }
);


// EDUCATION CARDS

const cards =
    document.querySelectorAll(".edu-card");

cards.forEach(function (card) {

    const button =
        card.querySelector("button");

    const title =
        card.querySelector("h3");

    if (button && title) {

        button.addEventListener(
            "click",
            function () {

                alert(
                    title.innerText +
                    " section is coming soon 🚀"
                );

            }
        );

    }

});
// ===============================
// NARS JOBS & CAREER
// ===============================


// SEARCH

const jobSearch =
    document.getElementById("jobSearch");

const jobSearchBtn =
    document.getElementById("jobSearchBtn");


jobSearchBtn.addEventListener(
    "click",
    function () {

        const search =
            jobSearch.value.trim();


        if (search === "") {

            alert(
                "Please enter what you are looking for."
            );

            return;
        }


        alert(
            'NARS Career Search: "' +
            search +
            '"'
        );

    }
);


// ENTER KEY SEARCH

jobSearch.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            jobSearchBtn.click();

        }

    }
);


// ===============================
// CAREER FEATURES
// ===============================

function openJobFeature(feature) {

    alert(
        feature +
        " will be available soon in NARS 🚀"
    );

}
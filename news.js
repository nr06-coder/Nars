// ===============================
// NARS NEWS
// ===============================


// ELEMENTS

const newsSearch =
    document.getElementById("newsSearch");

const newsSearchBtn =
    document.getElementById("newsSearchBtn");

const newsCards =
    document.querySelectorAll(".news-card");

const categoryButtons =
    document.querySelectorAll(".category-btn");


// CURRENT CATEGORY

let currentCategory = "All";


// ===============================
// CATEGORY FILTER
// ===============================

function selectCategory(category) {

    currentCategory = category;


    // Active button

    categoryButtons.forEach(
        function (button) {

            button.classList.remove("active");

        }
    );


    categoryButtons.forEach(
        function (button) {

            if (
                button.textContent.trim() === category
            ) {

                button.classList.add("active");

            }

        }
    );


    filterNews();

}


// ===============================
// SEARCH
// ===============================

function filterNews() {

    const searchText =
        newsSearch.value
            .trim()
            .toLowerCase();


    newsCards.forEach(
        function (card) {

            const category =
                card.dataset.category
                    .toLowerCase();


            const content =
                card.textContent
                    .toLowerCase();


            const categoryMatch =
                currentCategory === "All" ||
                category ===
                currentCategory.toLowerCase();


            const searchMatch =
                searchText === "" ||
                content.includes(searchText);


            if (
                categoryMatch &&
                searchMatch
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        }
    );

}


// ===============================
// SEARCH BUTTON
// ===============================

newsSearchBtn.addEventListener(
    "click",
    function () {

        filterNews();

    }
);


// ===============================
// ENTER KEY
// ===============================

newsSearch.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            filterNews();

        }

    }
);


// ===============================
// READ MORE
// ===============================

function openNews(category) {

    alert(
        category +
        " news will be available soon in NARS 📰"
    );

}


// ===============================
// INITIAL STATE
// ===============================

selectCategory("All");
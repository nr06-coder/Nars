// ==========================================
// NARS NOTIFICATIONS
// ==========================================

const cards =
    document.querySelectorAll(".notification-card");

const markAllBtn =
    document.getElementById("markAllBtn");

const unreadCount =
    document.getElementById("unreadCount");

const notificationCount =
    document.getElementById("notificationCount");

const emptyState =
    document.getElementById("emptyState");


// ==========================================
// UPDATE COUNTS
// ==========================================

function updateCounts() {

    const unread =
        document.querySelectorAll(
            ".notification-card.unread"
        ).length;

    const total =
        cards.length;


    unreadCount.textContent =
        unread;

    notificationCount.textContent =
        total;


    if (unread === 0) {

        emptyState.style.display =
            "block";

    } else {

        emptyState.style.display =
            "none";

    }

}


// ==========================================
// CLICK NOTIFICATION
// ==========================================

cards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            card.classList.remove(
                "unread"
            );


            const dot =
                card.querySelector(".dot");


            if (dot) {

                dot.remove();

            }


            updateCounts();

        }
    );

});


// ==========================================
// MARK ALL AS READ
// ==========================================

markAllBtn.addEventListener(
    "click",
    function () {

        cards.forEach(
            function (card) {

                card.classList.remove(
                    "unread"
                );


                const dot =
                    card.querySelector(".dot");


                if (dot) {

                    dot.remove();

                }

            }
        );


        updateCounts();

    }
);


// ==========================================
// INITIAL COUNT
// ==========================================

updateCounts();
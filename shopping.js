// ===============================
// NARS SHOPPING
// ===============================


// SHOPPING LIST

let shoppingItems =
    JSON.parse(
        localStorage.getItem("narsShoppingItems")
    ) || [];


// ELEMENTS

const itemName =
    document.getElementById("itemName");

const addItemBtn =
    document.getElementById("addItemBtn");

const shoppingList =
    document.getElementById("shoppingList");

const productSearch =
    document.getElementById("productSearch");

const searchBtn =
    document.getElementById("searchBtn");


// ===============================
// ADD ITEM
// ===============================

addItemBtn.addEventListener(
    "click",
    function () {

        const item =
            itemName.value.trim();

        if (item === "") {

            alert(
                "Please enter a product name."
            );

            return;
        }


        const newItem = {

            id: Date.now(),

            name: item

        };


        shoppingItems.push(newItem);


        localStorage.setItem(
            "narsShoppingItems",
            JSON.stringify(shoppingItems)
        );


        itemName.value = "";

        displayShoppingItems();

    }
);


// ===============================
// DISPLAY ITEMS
// ===============================

function displayShoppingItems() {

    shoppingList.innerHTML = "";


    if (shoppingItems.length === 0) {

        shoppingList.innerHTML = `

            <div class="empty-shopping">

                🛒

                <p>
                    Your shopping list is empty.
                </p>

            </div>

        `;

        return;
    }


    shoppingItems.forEach(
        function (item) {

            const box =
                document.createElement("div");


            box.className =
                "shopping-item";


            box.innerHTML = `

                <div>

                    <strong>
                        🛒 ${item.name}
                    </strong>

                </div>


                <button
                    onclick="deleteShoppingItem(${item.id})"
                >
                    Delete
                </button>

            `;


            shoppingList.appendChild(box);

        }
    );

}


// ===============================
// DELETE ITEM
// ===============================

function deleteShoppingItem(id) {

    shoppingItems =
        shoppingItems.filter(
            function (item) {

                return item.id !== id;

            }
        );


    localStorage.setItem(
        "narsShoppingItems",
        JSON.stringify(shoppingItems)
    );


    displayShoppingItems();

}


// ===============================
// PRODUCT SEARCH
// ===============================

searchBtn.addEventListener(
    "click",
    function () {

        const search =
            productSearch.value.trim();


        if (search === "") {

            alert(
                "Please enter a product to search."
            );

            return;
        }


        alert(
            'NARS Shopping Search: "' +
            search +
            '"'
        );

    }
);


// ENTER KEY

productSearch.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchBtn.click();

        }

    }
);


// ===============================
// CATEGORY
// ===============================

function openCategory(category) {

    alert(
        category +
        " shopping section is coming soon 🛒"
    );

}


// ===============================
// INITIAL LOAD
// ===============================

displayShoppingItems();
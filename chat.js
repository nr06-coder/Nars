// ===============================
// NARS CHAT & VIDEO
// ===============================


// CONTACTS

let contacts =
    JSON.parse(
        localStorage.getItem("narsContacts")
    ) || [];


// ELEMENTS

const contactName =
    document.getElementById("contactName");

const contactPhone =
    document.getElementById("contactPhone");

const addContactBtn =
    document.getElementById("addContactBtn");

const contactsList =
    document.getElementById("contactsList");


// ===============================
// ADD CONTACT
// ===============================

addContactBtn.addEventListener(
    "click",
    function () {

        const name =
            contactName.value.trim();

        const phone =
            contactPhone.value.trim();


        if (name === "" || phone === "") {

            alert(
                "Please enter name and phone number."
            );

            return;
        }


        const contact = {

            id: Date.now(),

            name: name,

            phone: phone

        };


        contacts.push(contact);


        localStorage.setItem(
            "narsContacts",
            JSON.stringify(contacts)
        );


        contactName.value = "";

        contactPhone.value = "";


        displayContacts();

    }
);


// ===============================
// DISPLAY CONTACTS
// ===============================

function displayContacts() {

    contactsList.innerHTML = "";


    if (contacts.length === 0) {

        contactsList.innerHTML = `

            <div class="empty-chat">

                <div>👥</div>

                <p>
                    No contacts added yet.
                </p>

            </div>

        `;

        return;
    }


    contacts.forEach(
        function (contact) {

            const box =
                document.createElement("div");


            box.className =
                "contact-item";


            box.innerHTML = `

                <div>

                    <strong>
                        ${contact.name}
                    </strong>

                    <p>
                        ${contact.phone}
                    </p>

                </div>


                <div>

                    <a
                        href="tel:${contact.phone}"
                        class="call-button"
                    >
                        📞 Call
                    </a>


                    <button
                        onclick="deleteContact(${contact.id})"
                        class="delete-button"
                    >
                        Delete
                    </button>

                </div>

            `;


            contactsList.appendChild(box);

        }
    );

}


// ===============================
// DELETE CONTACT
// ===============================

function deleteContact(id) {

    contacts =
        contacts.filter(
            function (contact) {

                return contact.id !== id;

            }
        );


    localStorage.setItem(
        "narsContacts",
        JSON.stringify(contacts)
    );


    displayContacts();

}


// ===============================
// CHAT / VIDEO / VOICE
// ===============================

function openChatFeature(feature) {

    if (feature === "Voice Call") {

        if (contacts.length === 0) {

            alert(
                "First add a contact."
            );

            return;
        }


        alert(
            "Select a contact and use the 📞 Call button."
        );

        return;
    }


    alert(
        feature +
        " will be available soon in NARS 🚀"
    );

}


// ===============================
// INITIAL LOAD
// ===============================

displayContacts();
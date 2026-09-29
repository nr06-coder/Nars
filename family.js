// ===============================
// NARS FAMILY CARE
// ===============================


// FAMILY MEMBERS

let familyMembers =
    JSON.parse(
        localStorage.getItem("narsFamilyMembers")
    ) || [];


// REMINDERS

let reminders =
    JSON.parse(
        localStorage.getItem("narsFamilyReminders")
    ) || [];


// ELEMENTS

const nameInput =
    document.getElementById("memberName");

const phoneInput =
    document.getElementById("memberPhone");

const relationInput =
    document.getElementById("memberRelation");

const addMemberBtn =
    document.getElementById("addMemberBtn");

const membersList =
    document.getElementById("membersList");


// ===============================
// ADD FAMILY MEMBER
// ===============================

addMemberBtn.addEventListener(
    "click",
    function () {

        const name =
            nameInput.value.trim();

        const phone =
            phoneInput.value.trim();

        const relation =
            relationInput.value;


        if (
            name === "" ||
            phone === "" ||
            relation === ""
        ) {

            alert(
                "Please fill all family member details."
            );

            return;
        }


        const member = {

            id: Date.now(),

            name: name,

            phone: phone,

            relation: relation

        };


        familyMembers.push(member);


        localStorage.setItem(
            "narsFamilyMembers",
            JSON.stringify(familyMembers)
        );


        nameInput.value = "";

        phoneInput.value = "";

        relationInput.value = "";


        displayMembers();

    }
);


// ===============================
// DISPLAY MEMBERS
// ===============================

function displayMembers() {

    membersList.innerHTML = "";


    if (familyMembers.length === 0) {

        membersList.innerHTML = `

            <div class="empty-state">

                <div>👨‍👩‍👧‍👦</div>

                <p>
                    No family members added yet.
                </p>

            </div>

        `;

        return;
    }


    familyMembers.forEach(
        function (member) {

            const memberBox =
                document.createElement("div");


            memberBox.className =
                "member-item";


            memberBox.innerHTML = `

                <div>

                    <strong>
                        ${member.name}
                    </strong>

                    <p>
                        ${member.relation}
                        •
                        ${member.phone}
                    </p>

                </div>


                <div>

                    <a
                        href="tel:${member.phone}"
                        class="call-btn"
                    >
                        📞 Call
                    </a>


                    <button
                        onclick="deleteMember(${member.id})"
                        class="delete-btn"
                    >
                        Delete
                    </button>

                </div>

            `;


            membersList.appendChild(
                memberBox
            );

        }
    );

}


// ===============================
// DELETE MEMBER
// ===============================

function deleteMember(id) {

    familyMembers =
        familyMembers.filter(
            function (member) {

                return member.id !== id;

            }
        );


    localStorage.setItem(
        "narsFamilyMembers",
        JSON.stringify(familyMembers)
    );


    displayMembers();

}


// ===============================
// REMINDERS
// ===============================

const reminderText =
    document.getElementById("reminderText");

const reminderTime =
    document.getElementById("reminderTime");

const reminderBtn =
    document.getElementById("reminderBtn");

const reminderList =
    document.getElementById("reminderList");



reminderBtn.addEventListener(
    "click",
    function () {

        const text =
            reminderText.value.trim();

        const time =
            reminderTime.value;


        if (
            text === "" ||
            time === ""
        ) {

            alert(
                "Please enter reminder and time."
            );

            return;
        }


        const reminder = {

            id: Date.now(),

            text: text,

            time: time

        };


        reminders.push(reminder);


        localStorage.setItem(
            "narsFamilyReminders",
            JSON.stringify(reminders)
        );


        reminderText.value = "";

        reminderTime.value = "";


        displayReminders();

    }
);


// ===============================
// DISPLAY REMINDERS
// ===============================

function displayReminders() {

    reminderList.innerHTML = "";


    if (reminders.length === 0) {

        reminderList.innerHTML = `

            <p class="no-reminders">
                No reminders yet.
            </p>

        `;

        return;
    }


    reminders.forEach(
        function (reminder) {

            const box =
                document.createElement("div");


            box.className =
                "reminder-item";


            box.innerHTML = `

                <div>

                    <strong>
                        ⏰ ${reminder.text}
                    </strong>

                    <p>
                        ${reminder.time}
                    </p>

                </div>


                <button
                    onclick="deleteReminder(${reminder.id})"
                    class="delete-btn"
                >
                    Delete
                </button>

            `;


            reminderList.appendChild(box);

        }
    );

}


// ===============================
// DELETE REMINDER
// ===============================

function deleteReminder(id) {

    reminders =
        reminders.filter(
            function (reminder) {

                return reminder.id !== id;

            }
        );


    localStorage.setItem(
        "narsFamilyReminders",
        JSON.stringify(reminders)
    );


    displayReminders();

}


// ===============================
// CHECK REMINDERS
// ===============================

function checkReminders() {

    const now =
        new Date();


    const currentTime =
        now.toTimeString()
            .slice(0, 5);


    reminders.forEach(
        function (reminder) {

            if (
                reminder.time === currentTime
            ) {

                alert(
                    "🔔 NARS Reminder\n\n" +
                    reminder.text
                );

            }

        }
    );

}


// Check every minute

setInterval(
    checkReminders,
    60000
);


// ===============================
// INITIAL LOAD
// ===============================

displayMembers();

displayReminders();
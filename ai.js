const input = document.getElementById("aiInput");
const sendBtn = document.getElementById("sendBtn");
const chatArea = document.getElementById("chatArea");
const clearBtn = document.getElementById("clearBtn");


// SEND MESSAGE

function sendMessage() {

    const text = input.value.trim();

    if (text === "") {
        return;
    }


    // USER MESSAGE

    const userMessage =
        document.createElement("div");

    userMessage.className =
        "message user-message";

    userMessage.innerHTML = `
        <div class="message-content">
            <p>${escapeHTML(text)}</p>
        </div>
    `;

    chatArea.appendChild(userMessage);


    input.value = "";


    // DEMO AI RESPONSE

    setTimeout(function () {

        const aiMessage =
            document.createElement("div");

        aiMessage.className =
            "message ai-message";

        aiMessage.innerHTML = `
            <div class="message-icon">
                N
            </div>

            <div class="message-content">

                <strong>NARS AI</strong>

                <p>
                    I understood your request:
                    "${escapeHTML(text)}"
                    <br><br>
                    I'm currently a demo AI interface.
                    Real AI integration will be connected
                    in a later step.
                </p>

            </div>
        `;

        chatArea.appendChild(aiMessage);

        chatArea.scrollTop =
            chatArea.scrollHeight;

    }, 500);

}


// ENTER TO SEND

input.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);


sendBtn.addEventListener(
    "click",
    sendMessage
);


// QUICK ACTIONS

const quickActions =
    document.querySelectorAll(
        ".quick-actions button"
    );


quickActions.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            input.value =
                button.dataset.prompt;

            input.focus();

        }
    );

});


// CLEAR CHAT

clearBtn.addEventListener(
    "click",
    function () {

        chatArea.innerHTML = `
            <div class="message ai-message">

                <div class="message-icon">
                    N
                </div>

                <div class="message-content">

                    <strong>NARS AI</strong>

                    <p>
                        Chat cleared. How can I help you?
                    </p>

                </div>

            </div>
        `;

    }
);


// SAFE TEXT

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}
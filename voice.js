// ==========================================
// NARS VOICE ASSISTANT
// ==========================================


const micButton =
    document.getElementById("micButton");

const stopButton =
    document.getElementById("stopButton");

const micCircle =
    document.getElementById("micCircle");

const voiceStatus =
    document.getElementById("voiceStatus");

const voiceText =
    document.getElementById("voiceText");

const userSpeech =
    document.getElementById("userSpeech");

const narsResponse =
    document.getElementById("narsResponse");

const speakButton =
    document.getElementById("speakButton");


// ==========================================
// SPEECH RECOGNITION
// ==========================================


const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


let recognition = null;

let isListening = false;


if (SpeechRecognition) {

    recognition =
        new SpeechRecognition();

    recognition.lang = "en-IN";

    recognition.continuous = false;

    recognition.interimResults = true;

    recognition.maxAlternatives = 1;

} else {

    voiceStatus.textContent =
        "Voice recognition unavailable";

    voiceText.textContent =
        "Please use Chrome or another supported browser.";

    micButton.disabled = true;

}


// ==========================================
// START
// ==========================================


micButton.addEventListener(
    "click",
    function () {

        if (!recognition) {

            showResponse(
                "Voice recognition is not supported by this browser."
            );

            return;
        }


        try {

            recognition.start();

        } catch (error) {

            console.log(error);

        }

    }
);


// ==========================================
// STOP
// ==========================================


stopButton.addEventListener(
    "click",
    function () {

        if (
            recognition &&
            isListening
        ) {

            recognition.stop();

        }

    }
);


// ==========================================
// START EVENT
// ==========================================


if (recognition) {

    recognition.onstart =
        function () {

            isListening = true;


            voiceStatus.textContent =
                "Listening...";


            voiceText.textContent =
                "Speak now. NARS is listening.";


            micCircle.classList.add(
                "listening"
            );


            micButton.style.display =
                "none";


            stopButton.style.display =
                "inline-block";

        };


    // ======================================
    // RESULT
    // ======================================

    recognition.onresult =
        function (event) {

            let finalText = "";

            let interimText = "";


            for (
                let i = event.resultIndex;
                i < event.results.length;
                i++
            ) {

                const text =
                    event.results[i][0]
                        .transcript;


                if (
                    event.results[i].isFinal
                ) {

                    finalText += text;

                } else {

                    interimText += text;

                }

            }


            const result =
                finalText ||
                interimText;


            userSpeech.textContent =
                result;


            if (finalText.trim()) {

                processCommand(
                    finalText.trim()
                );

            }

        };


    // ======================================
    // END
    // ======================================

    recognition.onend =
        function () {

            isListening = false;


            micCircle.classList.remove(
                "listening"
            );


            micButton.style.display =
                "inline-block";


            stopButton.style.display =
                "none";


            if (
                voiceStatus.textContent ===
                "Listening..."
            ) {

                voiceStatus.textContent =
                    "Ready to listen";

            }

        };


    // ======================================
    // ERROR
    // ======================================

    recognition.onerror =
        function (event) {

            console.log(
                "Voice error:",
                event.error
            );


            isListening = false;


            micCircle.classList.remove(
                "listening"
            );


            micButton.style.display =
                "inline-block";


            stopButton.style.display =
                "none";


            if (
                event.error ===
                "not-allowed"
            ) {

                voiceStatus.textContent =
                    "Microphone permission denied";

                voiceText.textContent =
                    "Allow microphone access and try again.";

            }

            else if (
                event.error ===
                "no-speech"
            ) {

                voiceStatus.textContent =
                    "No speech detected";

                voiceText.textContent =
                    "Please speak again.";

            }

            else {

                voiceStatus.textContent =
                    "Voice error";

                voiceText.textContent =
                    "Please try again.";

            }

        };

}


// ==========================================
// COMMAND PROCESSING
// ==========================================


function processCommand(command) {

    const text =
        command
            .toLowerCase()
            .trim();


    voiceStatus.textContent =
        "Processing...";


    let response = "";


    // HELLO

    if (
        text.includes("hello") ||
        text.includes("hi nars") ||
        text.includes("hey nars")
    ) {

        response =
            "Hello Chintu 👋 How can I help you?";

    }


    // DASHBOARD

    else if (
        text.includes("open dashboard") ||
        text.includes("open home") ||
        text === "home"
    ) {

        response =
            "Opening NARS Dashboard.";

        showResponse(response);

        goTo("dashboard.html");

        return;

    }


    // DOCUMENTS

    else if (
        text.includes("open documents") ||
        text.includes("open my documents")
    ) {

        response =
            "Opening your documents.";

        showResponse(response);

        goTo("documents.html");

        return;

    }


    // EDUCATION

    else if (
        text.includes("open education") ||
        text.includes("open study") ||
        text.includes("study hub")
    ) {

        response =
            "Opening NARS Education.";

        showResponse(response);

        goTo("education.html");

        return;

    }


    // JOBS

    else if (
        text.includes("open jobs") ||
        text.includes("open career")
    ) {

        response =
            "Opening Jobs and Career.";

        showResponse(response);

        goTo("jobs.html");

        return;

    }


    // NEWS

    else if (
        text.includes("open news") ||
        text.includes("latest news")
    ) {

        response =
            "Opening NARS News.";

        showResponse(response);

        goTo("news.html");

        return;

    }


    // GAMES

    else if (
        text.includes("open games") ||
        text.includes("play games")
    ) {

        response =
            "Opening NARS Games.";

        showResponse(response);

        goTo("games.html");

        return;

    }


    // SPORTS

    else if (
        text.includes("open sports") ||
        text.includes("cricket")
    ) {

        response =
            "Opening NARS Sports.";

        showResponse(response);

        goTo("sports.html");

        return;

    }


    // ENTERTAINMENT

    else if (
        text.includes("open entertainment")
    ) {

        response =
            "Opening Entertainment.";

        showResponse(response);

        goTo("entertainment.html");

        return;

    }


    // FAMILY

    else if (
        text.includes("open family") ||
        text.includes("family care")
    ) {

        response =
            "Opening Family Care.";

        showResponse(response);

        goTo("family.html");

        return;

    }


    // CHAT

    else if (
        text.includes("open chat") ||
        text.includes("open video")
    ) {

        response =
            "Opening Chat and Video.";

        showResponse(response);

        goTo("chat.html");

        return;

    }


    // SHOPPING

    else if (
        text.includes("open shopping")
    ) {

        response =
            "Opening NARS Shopping.";

        showResponse(response);

        goTo("shopping.html");

        return;

    }


    // SETTINGS

    else if (
        text.includes("open settings")
    ) {

        response =
            "Opening NARS Settings.";

        showResponse(response);

        goTo("settings.html");

        return;

    }


    // PROFILE

    else if (
        text.includes("open profile") ||
        text.includes("my profile")
    ) {

        response =
            "Opening your profile.";

        showResponse(response);

        goTo("profile.html");

        return;

    }


    // TIME

    else if (
        text.includes("what time") ||
        text.includes("current time")
    ) {

        const now =
            new Date();


        const time =
            now.toLocaleTimeString(
                "en-IN",
                {
                    hour: "numeric",
                    minute: "2-digit"
                }
            );


        response =
            "The current time is " +
            time;

    }


    // THANK YOU

    else if (
        text.includes("thank you") ||
        text.includes("thanks")
    ) {

        response =
            "You're welcome, Chintu 😊";

    }


    // UNKNOWN

    else {

        response =
            "I heard: " +
            command +
            ". Advanced NARS AI will be connected later.";

    }


    showResponse(response);

}


// ==========================================
// PAGE NAVIGATION
// ==========================================


function goTo(page) {

    setTimeout(
        function () {

            window.location.href =
                page;

        },
        900
    );

}


// ==========================================
// SHOW RESPONSE
// ==========================================


function showResponse(response) {

    narsResponse.textContent =
        response;


    voiceStatus.textContent =
        "Ready to listen";


    voiceText.textContent =
        "Command completed.";

}


// ==========================================
// TEXT TO SPEECH
// ==========================================


function speakResponse() {

    const text =
        narsResponse.textContent.trim();


    if (!text) {

        return;

    }


    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Text-to-speech is not supported."
        );

        return;

    }


    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    speech.lang =
        "en-IN";


    speech.rate =
        0.95;


    speech.pitch =
        1;


    window.speechSynthesis.speak(
        speech
    );

}


speakButton.addEventListener(
    "click",
    speakResponse
);


// ==========================================
// EXAMPLE COMMANDS
// ==========================================


function useCommand(command) {

    userSpeech.textContent =
        command;


    processCommand(command);

}


// ==========================================
// KEYBOARD
// ==========================================


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.code === "Space" &&
            event.target.tagName !== "INPUT" &&
            event.target.tagName !== "TEXTAREA"
        ) {

            event.preventDefault();


            if (!isListening) {

                micButton.click();

            }

        }


        if (
            event.key === "Escape"
        ) {

            stopButton.click();

        }

    }
);
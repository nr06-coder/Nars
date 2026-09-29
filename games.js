// ===============================
// NARS GAMES
// ===============================


// SCORE

let totalScore =
    Number(localStorage.getItem("narsGameScore")) || 0;


// ===============================
// START GAME
// ===============================

function startGame(gameName) {

    if (gameName === "Quiz") {

        startQuiz();

        return;
    }


    if (gameName === "Math Challenge") {

        startMathChallenge();

        return;
    }


    if (gameName === "Word Challenge") {

        startWordChallenge();

        return;
    }


    if (gameName === "Memory Game") {

        alert(
            "Memory Game is coming soon 🃏"
        );

        return;
    }


    if (gameName === "Puzzle Zone") {

        alert(
            "Puzzle Zone is coming soon 🧩"
        );

        return;
    }


    if (gameName === "Cricket Challenge") {

        alert(
            "Cricket Challenge is coming soon 🏏"
        );

        return;
    }

}


// ===============================
// QUICK QUIZ
// ===============================

function startQuiz() {

    const answer =
        prompt(
            "NARS Quick Quiz 🧠\n\n" +
            "What is the capital of India?"
        );


    if (answer === null) {

        return;

    }


    if (
        answer.trim().toLowerCase() ===
        "new delhi"
    ) {

        totalScore += 10;

        saveScore();


        alert(
            "🎉 Correct!\n\n" +
            "+10 points"
        );

    } else {

        alert(
            "❌ Not correct.\n\n" +
            "Correct answer: New Delhi"
        );

    }

}


// ===============================
// MATH CHALLENGE
// ===============================

function startMathChallenge() {

    const answer =
        prompt(
            "NARS Math Challenge ➗\n\n" +
            "What is 25 × 4?"
        );


    if (answer === null) {

        return;

    }


    if (answer.trim() === "100") {

        totalScore += 10;

        saveScore();


        alert(
            "🎉 Correct!\n\n" +
            "+10 points"
        );

    } else {

        alert(
            "❌ Wrong answer.\n\n" +
            "Correct answer: 100"
        );

    }

}


// ===============================
// WORD CHALLENGE
// ===============================

function startWordChallenge() {

    const answer =
        prompt(
            "NARS Word Challenge 🔤\n\n" +
            "Unscramble this word:\n\n" +
            "N A R S"
        );


    if (answer === null) {

        return;

    }


    if (
        answer.trim().toLowerCase() ===
        "nars"
    ) {

        totalScore += 10;

        saveScore();


        alert(
            "🎉 Correct!\n\n" +
            "+10 points"
        );

    } else {

        alert(
            "❌ Try again next time!"
        );

    }

}


// ===============================
// SAVE SCORE
// ===============================

function saveScore() {

    localStorage.setItem(
        "narsGameScore",
        totalScore
    );

}


// ===============================
// SHOW SCORE
// ===============================

function showScore() {

    alert(
        "🏆 Your NARS Score: " +
        totalScore
    );

}
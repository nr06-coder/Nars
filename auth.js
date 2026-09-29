// ======================================
// NARS AUTHENTICATION
// STEP 2 - DEMO VERSION
// ======================================


// CREATE ACCOUNT

const signupForm =
    document.getElementById("signupForm");


if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "signupName"
                ).value.trim();


            const email =
                document.getElementById(
                    "signupEmail"
                ).value.trim().toLowerCase();


            const password =
                document.getElementById(
                    "signupPassword"
                ).value;


            const confirm =
                document.getElementById(
                    "signupConfirm"
                ).value;


            const message =
                document.getElementById(
                    "signupMessage"
                );


            if (password.length < 6) {

                message.style.color = "#f87171";

                message.innerText =
                    "Password must be at least 6 characters.";

                return;

            }


            if (password !== confirm) {

                message.style.color = "#f87171";

                message.innerText =
                    "Passwords do not match.";

                return;

            }


            const existingUser =
                localStorage.getItem(
                    "narsUser"
                );


            if (existingUser) {

                message.style.color = "#f87171";

                message.innerText =
                    "An account already exists on this browser.";

                return;

            }


            const user = {

                name: name,

                email: email,

                password: password

            };


            localStorage.setItem(
                "narsUser",
                JSON.stringify(user)
            );


            message.style.color = "#4ade80";

            message.innerText =
                "Account created successfully!";


            setTimeout(
                function () {

                    window.location.href =
                        "login.html";

                },
                1000
            );

        }
    );

}



// LOGIN

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim().toLowerCase();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const message =
                document.getElementById(
                    "loginMessage"
                );


            const savedUser =
                localStorage.getItem(
                    "narsUser"
                );


            if (!savedUser) {

                message.style.color = "#f87171";

                message.innerText =
                    "No account found. Create an account first.";

                return;

            }


            const user =
                JSON.parse(savedUser);


            if (
                email === user.email &&
                password === user.password
            ) {

                localStorage.setItem(
                    "narsLoggedIn",
                    "true"
                );


                localStorage.setItem(
                    "narsCurrentUser",
                    user.name
                );


                message.style.color = "#4ade80";

                message.innerText =
                    "Login successful!";


                setTimeout(
                    function () {

                        window.location.href = "dashboard.html";

                    },
                    700
                );


            } else {

                message.style.color = "#f87171";

                message.innerText =
                    "Incorrect email or password.";

            }

        }
    );

}
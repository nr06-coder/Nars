// ==========================================
// NARS DOCUMENTS SYSTEM
// ==========================================

const uploadBtn =
    document.getElementById("uploadBtn");

const documentSearch =
    document.getElementById("documentSearch");


// ==========================================
// UPLOAD DOCUMENT
// ==========================================

uploadBtn.addEventListener("click", function () {

    const modal = document.createElement("div");

    modal.className = "upload-modal";

    modal.innerHTML = `

        <div class="upload-box">

            <button
                class="close-upload"
                onclick="this.closest('.upload-modal').remove()"
            >
                ×
            </button>

            <div class="upload-icon">
                ⬆️
            </div>

            <h2>
                Add Document
            </h2>

            <p>
                Select a file to add to your NARS library.
            </p>

            <label class="file-area">

                <input
                    type="file"
                    id="documentFile"
                    hidden
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                >

                <strong>
                    Choose a file
                </strong>

                <small>
                    PDF • JPG • PNG • DOC • DOCX
                </small>

            </label>

            <div
                id="selectedFile"
                class="selected-file"
            >
                No file selected
            </div>

            <button
                class="save-document"
                id="saveDocument"
            >
                Add to NARS
            </button>

        </div>
    `;

    document.body.appendChild(modal);


    // FILE SELECT

    const fileInput =
        document.getElementById("documentFile");

    const selectedFile =
        document.getElementById("selectedFile");


    fileInput.addEventListener(
        "change",
        function () {

            if (fileInput.files.length > 0) {

                selectedFile.textContent =
                    "📄 " +
                    fileInput.files[0].name;

            }

        }
    );


    // ADD FILE

    document
        .getElementById("saveDocument")
        .addEventListener(
            "click",
            function () {

                if (!fileInput.files.length) {

                    alert(
                        "Please choose a document first."
                    );

                    return;
                }


                alert(
                    "Document selected successfully ✅"
                );


                modal.remove();

            }
        );

});


// ==========================================
// SEARCH DOCUMENTS
// ==========================================

documentSearch.addEventListener(
    "input",
    function () {

        const searchValue =
            documentSearch.value
                .trim()
                .toLowerCase();


        const categories =
            document.querySelectorAll(".category");


        categories.forEach(
            function (category) {

                const text =
                    category.textContent
                        .toLowerCase();


                if (
                    text.includes(searchValue)
                ) {

                    category.style.display =
                        "flex";

                } else {

                    category.style.display =
                        "none";

                }

            }
        );

    }
);


// ==========================================
// CATEGORY
// ==========================================

function openDocument(category) {

    alert(
        category +
        " section is ready for the next development stage 📁"
    );

}


// ==========================================
// FILE MENU
// ==========================================

function openFileMenu(fileName) {

    const menu =
        document.createElement("div");

    menu.className = "file-menu-overlay";


    menu.innerHTML = `

        <div class="file-menu">

            <button
                class="menu-close"
                onclick="this.closest('.file-menu-overlay').remove()"
            >
                ×
            </button>

            <div class="menu-file-icon">
                📄
            </div>

            <h3>
                ${fileName}
            </h3>

            <p>
                Document options
            </p>


            <button
                onclick="fileAction('Open', '${fileName}')"
            >
                👁️
                <span>Open</span>
            </button>


            <button
                onclick="fileAction('Download', '${fileName}')"
            >
                ⬇️
                <span>Download</span>
            </button>


            <button
                onclick="fileAction('Rename', '${fileName}')"
            >
                ✏️
                <span>Rename</span>
            </button>


            <button
                onclick="fileAction('Delete', '${fileName}')"
            >
                🗑️
                <span>Delete</span>
            </button>

        </div>

    `;


    document.body.appendChild(menu);

}


// ==========================================
// FILE ACTION
// ==========================================

function fileAction(action, fileName) {

    alert(
        action +
        " → " +
        fileName +
        "\n\nThis function will be connected to the real document storage/backend later."
    );


    const menu =
        document.querySelector(
            ".file-menu-overlay"
        );


    if (menu) {
        menu.remove();
    }

}
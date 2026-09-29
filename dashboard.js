// ==========================================
// NARS DOCUMENTS SYSTEM
// ==========================================


// ==========================================
// ELEMENTS
// ==========================================

const uploadBtn =
    document.getElementById("uploadBtn");

const documentSearch =
    document.getElementById("documentSearch");

const recentFiles =
    document.getElementById("recentFiles");


// ==========================================
// UPLOAD DOCUMENT
// ==========================================

if (uploadBtn) {

    uploadBtn.addEventListener(
        "click",
        function () {

            const modal =
                document.createElement("div");

            modal.className =
                "upload-modal";


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


            // FILE INPUT

            const fileInput =
                document.getElementById(
                    "documentFile"
                );


            const selectedFile =
                document.getElementById(
                    "selectedFile"
                );


            // FILE SELECTED

            fileInput.addEventListener(
                "change",
                function () {

                    if (
                        fileInput.files &&
                        fileInput.files.length > 0
                    ) {

                        selectedFile.textContent =
                            "📄 " +
                            fileInput.files[0].name;

                    } else {

                        selectedFile.textContent =
                            "No file selected";

                    }

                }
            );


            // SAVE DOCUMENT

            document
                .getElementById("saveDocument")
                .addEventListener(
                    "click",
                    function () {

                        if (
                            !fileInput.files ||
                            fileInput.files.length === 0
                        ) {

                            alert(
                                "Please choose a document first."
                            );

                            return;

                        }


                        const file =
                            fileInput.files[0];


                        addRecentFile(file);


                        alert(
                            file.name +
                            " added to NARS successfully ✅"
                        );


                        modal.remove();

                    }
                );

        }
    );

}


// ==========================================
// SEARCH DOCUMENTS
// ==========================================

if (documentSearch) {

    documentSearch.addEventListener(
        "input",
        function () {

            const searchValue =
                documentSearch.value
                    .trim()
                    .toLowerCase();


            const categories =
                document.querySelectorAll(
                    ".category"
                );


            categories.forEach(
                function (category) {

                    const text =
                        category.textContent
                            .toLowerCase();


                    if (
                        searchValue === "" ||
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

}


// ==========================================
// ADD RECENT FILE
// ==========================================

function addRecentFile(file) {

    const container =
        document.getElementById(
            "recentFiles"
        );


    if (!container) {

        return;

    }


    const extension =
        file.name
            .split(".")
            .pop()
            .toUpperCase();


    const fileRow =
        document.createElement("div");


    fileRow.className =
        "file-row";


    fileRow.innerHTML = `

        <div class="file-type">
            ${extension}
        </div>


        <div class="file-info">

            <strong>
                ${escapeHTML(file.name)}
            </strong>

            <small>
                Recently added
            </small>

        </div>


        <span class="file-date">
            Just now
        </span>


        <button
            onclick="openFileMenu('${escapeAttribute(file.name)}')"
        >
            ⋮
        </button>

    `;


    container.prepend(fileRow);

}


// ==========================================
// OPEN CATEGORY
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

    const oldMenu =
        document.querySelector(
            ".file-menu-overlay"
        );


    if (oldMenu) {

        oldMenu.remove();

    }


    const overlay =
        document.createElement("div");


    overlay.className =
        "file-menu-overlay";


    overlay.innerHTML = `

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
                ${escapeHTML(fileName)}
            </h3>


            <p>
                Document options
            </p>


            <button
                onclick="fileAction('Open', '${escapeAttribute(fileName)}')"
            >
                👁️
                <span>
                    Open
                </span>
            </button>


            <button
                onclick="fileAction('Download', '${escapeAttribute(fileName)}')"
            >
                ⬇️
                <span>
                    Download
                </span>
            </button>


            <button
                onclick="renameFile('${escapeAttribute(fileName)}')"
            >
                ✏️
                <span>
                    Rename
                </span>
            </button>


            <button
                onclick="deleteFile('${escapeAttribute(fileName)}')"
            >
                🗑️
                <span>
                    Delete
                </span>
            </button>

        </div>

    `;


    document.body.appendChild(overlay);


    // CLICK OUTSIDE TO CLOSE

    overlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target === overlay
            ) {

                overlay.remove();

            }

        }
    );

}


// ==========================================
// FILE ACTION
// ==========================================

function fileAction(
    action,
    fileName
) {

    if (action === "Open") {

        alert(
            "Opening:\n" +
            fileName +
            "\n\nReal file opening will be connected with storage later."
        );

    }


    if (action === "Download") {

        alert(
            "Download:\n" +
            fileName +
            "\n\nReal download will be connected with storage later."
        );

    }


    closeFileMenu();

}


// ==========================================
// RENAME FILE
// ==========================================

function renameFile(fileName) {

    const newName =
        prompt(
            "Enter new file name:",
            fileName
        );


    if (
        newName &&
        newName.trim() !== ""
    ) {

        alert(
            "Rename requested:\n" +
            fileName +
            " → " +
            newName.trim()
        );

    }


    closeFileMenu();

}


// ==========================================
// DELETE FILE
// ==========================================

function deleteFile(fileName) {

    const confirmDelete =
        confirm(
            "Delete this document?\n\n" +
            fileName
        );


    if (confirmDelete) {

        alert(
            fileName +
            " will be removed when real storage is connected."
        );

    }


    closeFileMenu();

}


// ==========================================
// CLOSE FILE MENU
// ==========================================

function closeFileMenu() {

    const menu =
        document.querySelector(
            ".file-menu-overlay"
        );


    if (menu) {

        menu.remove();

    }

}


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// ==========================================
// ESCAPE ATTRIBUTE
// ==========================================

function escapeAttribute(value) {

    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, "&quot;");

}
/* Write us popup */

let writeUsLink = document.querySelector(".write-us-button");
let writeUsPopup = document.querySelector(".write-us-popup");

if (writeUsPopup) {
    let writeUsClose = writeUsPopup.querySelector(".modal-button-close");
    let writeUsForm = writeUsPopup.querySelector(".modal-form");
    let writeUsName = writeUsPopup.querySelector(".form-field-name");
    let writeUsEmail = writeUsPopup.querySelector(".form-field-email");
    let writeUsTextarea = writeUsPopup.querySelector(".form-field-textarea");

    let isStorageSupport = true;
    let storage = "";

    try {
        storage = localStorage.getItem("name");
        storage = localStorage.getItem("email");
    } catch (err) {
        isStorageSupport = false;
    }

    writeUsLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        writeUsPopup.classList.add("modal-show");

        if (storage) {
            writeUsName.value = storage;
            writeUsEmail.value = storage;
            writeUsTextarea.value = "";
            writeUsTextarea.focus();
        } else {
            writeUsName.focus();
        }
    });

    writeUsClose.addEventListener("click", function () {
        writeUsPopup.classList.remove("modal-show");
        writeUsPopup.classList.remove("modal-error");
    });

    writeUsForm.addEventListener("submit", function (evt) {
        if (!writeUsName.value || !writeUsEmail.value || !writeUsTextarea.value) {
            evt.preventDefault();
            writeUsPopup.classList.remove("modal-error");
            writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
            writeUsPopup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("name", writeUsName.value);
                localStorage.setItem("email", writeUsEmail.value);
            }
        }
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (writeUsPopup.classList.contains("modal-show")) {
                evt.preventDefault();
                writeUsPopup.classList.remove("modal-show");
                writeUsPopup.classList.remove("modal-error");
            }
        }
    });
}

/* Map popup */

let mapLink = document.querySelector(".info-section-map");
let mapPopup = document.querySelector(".map-popup");

if (mapPopup) {
    let mapClose = mapPopup.querySelector(".modal-button-close");

    mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function () {
        mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (mapPopup.classList.contains("modal-show")) {
                evt.preventDefault();
                mapPopup.classList.remove("modal-show");
            }
        }
    });
}

/* Basket popup */

let buyLink = document.querySelectorAll(".button-buy");
let basketPopup = document.querySelector(".basket-popup");

if (basketPopup) {
    let basketClose = basketPopup.querySelector(".modal-button-close");
    let buttonContinue = basketPopup.querySelector(".button-continue");

    for (let i = 0; i < buyLink.length; i++) {
        buyLink[i].addEventListener("click", function (evt) {
            evt.preventDefault();
            basketPopup.classList.add("modal-show");
        });
    }

    basketClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        basketPopup.classList.remove("modal-show");
    });

    buttonContinue.addEventListener("click", function (evt) {
        evt.preventDefault();
        basketPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (basketPopup.classList.contains("modal-show")) {
                evt.preventDefault();
                basketPopup.classList.remove("modal-show");
            }
        }
    });
}

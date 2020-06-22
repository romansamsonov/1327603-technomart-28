/* Slider */


/* Write us popap */

let writeUsLink = document.querySelector(".write-us-button");
let writeUsPopap = document.querySelector(".write-us-popap");
let writeUsClose = writeUsPopap.querySelector(".modal-button-close");
let writeUsName = writeUsPopap.querySelector(".form-field-name");

writeUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopap.classList.add("modal-show");
    writeUsName.focus();
});

writeUsClose.addEventListener("click", function () {
    writeUsPopap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (writeUsPopap.classList.contains("modal-show")) {
            evt.preventDefault();
            writeUsPopap.classList.remove("modal-show");
        }
    }
});

/* Map popup */

let mapLink = document.querySelector(".info-section-map");
let mapPopup = document.querySelector(".map-popap");
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

/* Basket popup */

let buyLinks = document.querySelectorAll(".button-buy");
let basketPopup = document.querySelector(".basket-popap");
let basketClose = basketPopup.querySelector(".modal-button-close");

for (let buyLink of buyLinks) {
    buyLink.onclick = function () {
        evt.preventDefault();
        basketPopup.classList.add("modal-show");
    };
}


basketClose.addEventListener("click", function (evt) {
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

let imageElement = document.getElementById("image");
let random = document.getElementById("imageWidth");
let paragraph = document.getElementById("warningMessage");
let defaultImageWidth = 200;
imageElement.style.width = defaultImageWidth + "px";

function onDecrement() {
    paragraph.textContent = "";
    if (defaultImageWidth <= 100) {
        // defaultImageWidth = defaultImageWidth -5;
        paragraph.textContent = "Can't Visible .Increase the size of Image.";
        paragraph.style.color = "red";
    } else {

        defaultImageWidth = defaultImageWidth - 5;
        let up = defaultImageWidth + "px";
        imageElement.style.width = up;
        random.textContent = up;


    }

}

function onIncrement() {

    if (defaultImageWidth >= 300) {
        // defaultImageW.idth = defaultImageWidth -5;
        paragraph.textContent = "Too Big. Decrease the size of Image.";
        paragraph.style.color = "red";
    } else {
        // paragraph.style.color ="";


        defaultImageWidth = defaultImageWidth + 5;
        let up = defaultImageWidth + "px";
        paragraph.textContent = "";
        imageElement.style.width = up;
        random.textContent = up;



    }

}
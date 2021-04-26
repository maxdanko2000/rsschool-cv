
//output values
const inputBlur = document.getElementById("inputBlur");
const outputBlur = document.getElementById("outBlur");

const inputInvert = document.getElementById("inputInvert");
const outputInvert = document.getElementById("outInvert");

const inputSepia = document.getElementById("inputSepia");
const outputSepia = document.getElementById("outSepia");

const inputSeturate = document.getElementById("inputSaturate");
const outputSeturate = document.getElementById("outSaturate");


const inputRotate = document.getElementById("inputRotate");
const outputRotate = document.getElementById("outRotate");

outputBlur.innerHTML = inputBlur.value;
inputBlur.oninput = function () {
    outputBlur.innerHTML = this.value;
};
outputInvert.innerHTML = inputInvert.value;
inputInvert.oninput = function () {
    outputInvert.innerHTML = this.value;
};
outputSepia.innerHTML = inputSepia.value;
inputSepia.oninput = function () {
    outputSepia.innerHTML = this.value;
};
outputSeturate.innerHTML = inputSeturate.value;
inputSeturate.oninput = function () {
    outputSeturate.innerHTML = this.value;
};
outputRotate.innerHTML = inputRotate.value;
inputRotate.oninput = function () {
    outputRotate.innerHTML = this.value;
};
//load image
const file = document.querySelector("input[type=file]");
file.addEventListener("change", previewFile)

function previewFile() {
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
//fullScreen
function fullscreen() {
    let isInFullScreen =
        (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement &&
            document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    let docElm = document.documentElement;
    if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
//apply filters
const inputs = document.querySelectorAll(".filters input");
let canvas = document.getElementById("myCanvas");
const image = document.getElementById('img1');
let context = canvas.getContext("2d");

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    image.style.setProperty(`--${this.name}`, this.value + suffix);
    canvas.style.setProperty(`--${this.name}`, this.value + suffix);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    context.save();

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

//save image
const btnSave = document.querySelector('.btn-save');
btnSave.addEventListener('click', save);
function save() {
    //const suffix = this.dataset.sizing || '';
    //canvas.style.setProperty('--blur', inputBlur.value + suffix);
    // canvas.style.setProperty(``, inputInvert.value + suffix);
    // canvas.style.setProperty(``, inputRotate.value + suffix);
    // canvas.style.setProperty(``, inputSepia.value + suffix);
    // canvas.style.setProperty(``, inputSeturate.value + suffix);
    let a = document.createElement('a');
    //let imgFolder = canvas.toDataURL("image/png");
    a.href = image.src;
    a.download = 'image.png';
    a.click()
}
//reset changes 
const reset = document.querySelector('.btn-reset');
reset.addEventListener("click", () => {
    image.style = '';
    inputRotate.value = 0;
    outputRotate.innerHTML = 0;
    inputSeturate.value = 100;
    outputSeturate.innerHTML = 100;
    inputSepia.value = 0;
    outputSepia.innerHTML = 0;
    inputInvert.value = 0;
    outputInvert.innerHTML = 0;
    inputBlur.value = 0;
    outputBlur.innerHTML = 0;
});

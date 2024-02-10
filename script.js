const canvas = document.getElementById("cnv");
const ctx = canvas.getContext("2d");

const C_height = (canvas.height = 500);
const C_width = (canvas.width = 500);

const image = new Image();
image.src = "./char.png";

const frameHeight = 342;
const frameWidth = 340;

let frameTracker = 0;

let speedTracker = 0;
function animation() {
    ctx.clearRect(0, 0, C_width, C_height);
    ctx.drawImage(image, frameTracker * frameWidth, 0, frameWidth, frameHeight, 0, 0, C_width, C_height);

    if (speedTracker % 3 === 0) {
        if (frameTracker < 24) {
            frameTracker++;
        } else {
            frameTracker = 0;
        }
    }

    if (speedTracker === 100) speedTracker = 0;
    speedTracker++;
    requestAnimationFrame(animation);
}

animation();

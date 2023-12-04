const sliderLine = document.getElementById('slider-line');
const sliderNextButton = document.getElementById('button-next');
const sliderBackButton = document.getElementById('button-back');
const controlLeft = document.getElementById('control-left');
const controlRight = document.getElementById('control-right');
const sliderDotBox = document.getElementById('slider-dot-box');

let sliderPosition = 0;
let slides = [];
let activeDotId = 0;

const preset = {
    imgsPaths: [
        './slider-src/sweetie_vk_007.jpg',
        './slider-src/sweetie_vk_034.jpg',
        './slider-src/Vksviti_038.jpg',
        './slider-src/Vksviti_038.jpg',
        './slider-src/Vksviti_038.jpg',
    ]
}

window.onload = () => {
    onSliderLoad();
}

sliderNextButton.addEventListener('click', moveSliderToRight)
sliderBackButton.addEventListener('click', moveSliderToLeft)
controlRight.addEventListener('click', moveSliderToRight)
controlLeft.addEventListener('click', moveSliderToLeft)


function onSliderLoad() {
    let slideCount = 0;
    preset.imgsPaths.forEach(path => {
        createImgBox(path);
        createSliderDot(slideCount);
        slides.push(slideCount);
        slideCount++;
    })
    setActiveDotStyle();
}

function createImgBox(path) {
    sliderLine.innerHTML += `<div class="slider-img-box"><img src="${path}" alt="" class="slider-img"></div>`;
}

function createSliderDot(id) {
    sliderDotBox.innerHTML += `<div class="slider-dot" id="dot-${id}"></div>`;
}

function moveSliderToRight() {
    if (sliderPosition > (slides.length - 1) * -256) {
        sliderPosition -= 256;
        activeDotId++;
    } else {
        sliderPosition = 0;
        activeDotId = 0;
    }

    setActiveDotStyle();
    sliderLine.style.left = sliderPosition + 'px';
}

function moveSliderToLeft() {
    if (sliderPosition < 0) {
        sliderPosition += 256;
        activeDotId--;
    } else {
        sliderPosition = (slides.length - 1) * -256;
        activeDotId = slides.length - 1;
    }

    setActiveDotStyle();
    sliderLine.style.left = sliderPosition + 'px';
}

function setActiveDotStyle() {
    slides.forEach(slide => {
        const activeDot = document.getElementById('dot-' + slide);
        if (slide === activeDotId) {
            activeDot.style.backgroundColor = 'grey';
        } else {
            activeDot.style.backgroundColor = 'white';
        }
    })
}

// Я решил сделать простой слайдер, что бы сэкономить время. Тк я потратил очень много времени на переезд в Омск, и боюсь не успеть со стажировкой. И у меня много времени забрала верстка. Буду очень рад, если я все же не опоздал)))
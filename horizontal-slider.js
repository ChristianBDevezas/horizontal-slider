const sliderContainer = document.querySelector('.beaches__slider');
const slideTop = document.querySelector('.beaches__slider__top');
const slidesLength = document.querySelectorAll(".beaches__slider__bottom div").length;
const slideBottom = document.querySelector('.beaches__slider__bottom');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const currentNumber = document.querySelector(".current-number");
const totalNumber = document.querySelector(".total-number");
const screenWidth = window.screen.width;
let activeIndex = 0;

rightButton.addEventListener('click', () => changeSlide('right'));
leftButton.addEventListener('click', () => changeSlide('left'));

currentNumber.innerHTML = activeIndex + 1;
totalNumber.innerHTML = slidesLength;

const changeSlide = (direction) => {
    const sliderWidth = sliderContainer.clientWidth;
    console.log(sliderWidth, screenWidth);

    if(direction === 'right') {
        activeIndex++;
        currentNumber.innerHTML = activeIndex + 1;
        
        if(activeIndex > slidesLength - 1) {
            activeIndex = 0;
            currentNumber.innerHTML = activeIndex + 1;
        }
    }
    else if(direction === 'left') {
        activeIndex--;
        currentNumber.innerHTML = activeIndex + 1;

        if(activeIndex < 0) {
            activeIndex = slidesLength - 1;
            currentNumber.innerHTML = activeIndex + 1;
        }
    }

    slideTop.style.transform = `translateX(${activeIndex * sliderWidth}px)`;
    slideBottom.style.transform = `translateX(-${activeIndex * sliderWidth}px)`;
}
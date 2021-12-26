let buttonToggle = document.querySelector('.example__slider-toggle-range-mobile');
let fatCatBox = document.querySelector('.example__slider-image--big-cat');
let fitCatBox = document.querySelector('.example__slider-image--fit-cat');

buttonToggle.addEventListener('change', () => {
    let buttonToggleValue = document.querySelector('.example__slider-toggle-range-mobile').value;
    if (buttonToggleValue == 1) {
        fitCatBox.classList.add("visually-hidden");
        fatCatBox.style="display: block";
    } else {
        if (buttonToggleValue == 2) {
            fatCatBox.style="display: none";
            fitCatBox.classList.remove('visually-hidden');
        }
    }
})

/*before & after for tablet and desktop*/
let buttonToggleNotMobile = document.querySelector('.example__slider-toggle-range-not-mobile');
let buttonToggleNotMobileBasicValue = document.querySelector('.example__slider-toggle-range-not-mobile').value;
let fatCatBoxBasic = document.querySelector('.example__slider-image--big-cat').offsetWidth;

buttonToggleNotMobile.addEventListener('input', () => {
    let buttonToggleNotMobileNewValue = document.querySelector('.example__slider-toggle-range-not-mobile').value;
    let viewportChanges = buttonToggleNotMobileNewValue - buttonToggleNotMobileBasicValue;
    let fatCatBoxNew = fatCatBoxBasic + viewportChanges;
    fatCatBox.style.width = fatCatBoxNew + 'px';
})
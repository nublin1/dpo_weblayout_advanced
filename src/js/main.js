const select1 = new CustomSelect('#select-1');
const select2 = new CustomSelect('#select-2');
const select3 = new CustomSelect('#select-3');
const select4 = new CustomSelect('#select-4');
const select5 = new CustomSelect('#select-5');
const select6 = new CustomSelect('#select-6');
const select10 = new CustomSelect('#select-10');

let tabsBtn = document.querySelectorAll('.tabs-nav-btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) { btn.classList.remove('tabs-nav-btn--active') });
        e.currentTarget.classList.add('tabs-nav-btn--active');

        tabsItem.forEach(function(element) { element.classList.remove('tabs-item--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});

let tabsBtn768 = document.querySelectorAll('.tabs-nav-btn768');
let tabsItem768 = document.querySelectorAll('.tabs-item768');

tabsBtn768.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn768.forEach(function(btn) { btn.classList.remove('tabs-nav-btn-active768') });
        e.currentTarget.classList.add('tabs-nav-btn-active768');

        tabsItem768.forEach(function(element) { element.classList.remove('tabs-item-active768') });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item-active768');
    });
});

let tabsBtn1 = document.querySelectorAll('.tabs-nav-btn1');
let tabsItem1 = document.querySelectorAll('.tabs-item1');

tabsBtn1.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn1.forEach(function(btn) { btn.classList.remove('tabs-nav__btn--active1') });
        e.currentTarget.classList.add('tabs-nav__btn--active1');

        tabsItem1.forEach(function(element) { element.classList.remove('tabs-item--active1') });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active1');
    });
});


let tabsBtn2 = document.querySelectorAll('.tabs-nav-btn2');
let tabsItem2 = document.querySelectorAll('.tabs-item2');

tabsBtn2.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn2.forEach(function(btn) { btn.classList.remove('tabs-nav__btn--active2') });
        e.currentTarget.classList.add('tabs-nav__btn--active2');

        tabsItem2.forEach(function(element) { element.classList.remove('tabs-item--active2') });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active2');
    });
});

const rangeSlider = document.getElementById('catalog-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [2000, 150000],
        connect: true,
        step: 1,
        range: {
            'min': 500,
            'max': 200000
        }
    });

    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function(values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    });
};
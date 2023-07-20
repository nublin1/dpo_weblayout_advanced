const swiper5 = new Swiper('.swiper-container-5', {
    slidesPerView: "auto",
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: {
        nextEl: '.card-button-next',
        prevEl: '.card-button-prev',
    },
    breakpoints: {
        1251: {
            slidesPerView: "auto",
            spaceBetween: 38,
        },
        979: {
            direction: 'horizontal',
            spaceBetween: 38,
            slidesPerView: 3,
        },
        577: {
            direction: 'vertical',
            spaceBetween: 18,
            slidesPerView: 4,
        },
        320: {
            direction: 'horizontal',
            spaceBetween: 38,
            slidesPerView: 2,
            slidesPerGroup: 1,
        }
    }
});

const swiper6 = new Swiper('.swiper-container-6', {
    loop: false,
    spaceBetween: 38,
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: {
        nextEl: '.similar-button-next',
        prevEl: '.similar-button-prev',
    },
    breakpoints: {
        1250: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 38,
        },
        978: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 32,
        },
        577: {

        },
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 16,
        }
    }
});

const swiper7 = new Swiper('.swiper-container-7', {
    loop: false,
    spaceBetween: 78,
    slidesPerView: "auto",
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.modal-button-next',
        prevEl: '.modal-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 'auto',
            spaceBetween: 100,
        },
        577: {
            slidesPerView: 'auto',
            spaceBetween: 78,
        },
        978: {
            slidesPerView: "auto",
        },
    }
});

const validate = new window.JustValidate('#form');

const validation = new JustValidate('#form', {
    errorLabelStyle: {
        color: '#FF6972'
    }
});

validation
    .addField('#name', [{
            rule: 'minLength',
            value: 2,
            errorMessage: 'Минимум 2 символа',
        },
        {
            rule: 'maxLength',
            value: 30,
        },
        {
            rule: 'customRegexp',
            value: /^([а-яА-Я])/,
            errorMessage: 'Недопустимый формат'
        },
        {
            rule: 'required',
            errorMessage: 'Обязательное поле',
        },
    ])
    .addField('#tel', [{
            rule: 'required',
            errorMessage: 'Обязательное поле',
        },
        {
            rule: 'customRegexp',
            value: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
            errorMessage: 'Недопустимый формат'
        },
    ]);


var phoneMask = IMask(
    document.getElementById('tel'), {
        mask: '+{7}(000)000-00-00'
    });
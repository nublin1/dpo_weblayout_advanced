const swiper6 = new Swiper(".swiper-container-6", {
  loop: false,
  spaceBetween: 38,
  slidesPerView: 4,
  slidesPerGroup: 4,
  navigation: {
    nextEl: ".similar-button-next",
    prevEl: ".similar-button-prev",
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
    577: {},
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
    },
  },
});

const swiper7 = new Swiper(".swiper-container-7", {
  loop: false,
  spaceBetween: 78,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".modal-button-next",
    prevEl: ".modal-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 100,
    },
    577: {
      slidesPerView: "auto",
      spaceBetween: 78,
    },
    978: {
      slidesPerView: "auto",
    },
  },
});

const swiper5 = new Swiper(document.getElementById("swiper5"), {
  loop: false,
  slidesPerView: 5,
  slidesPerGroup: 5,
  // thumbs: {
  //   swiper: swiper777,
  // },
  navigation: {
    nextEl: ".card-button-next",
    prevEl: ".card-button-prev",
  },
  breakpoints: {
    1251: {
      slidesPerView: "auto",
      spaceBetween: 8,
    },
    979: {
      direction: "horizontal",
      spaceBetween: 38,
      slidesPerView: 3,
    },
    577: {
      direction: "vertical",
      spaceBetween: 18,
      slidesPerView: 4,
    },
    320: {
      direction: "horizontal",
      spaceBetween: 38,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },
});

const swiper555 = new Swiper(document.getElementById("swiper555"), {
  loop: false,
  slidesPerView: 5,
  slidesPerGroup: 5, 
  onlyExternal:true,
  navigation: {
    nextEl: ".card-button-next",
    prevEl: ".card-button-prev",
  },
  breakpoints: {
    1251: {
      slidesPerView: "auto",
      spaceBetween: 8,
    },
    979: {
      direction: "horizontal",
      spaceBetween: 38,
      slidesPerView: 3,
    },
    577: {
      direction: "vertical",
      spaceBetween: 18,
      slidesPerView: 4,
    },
    320: {
      direction: "horizontal",
      spaceBetween: 38,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },
});



const swiper777 = new Swiper(document.getElementById("swiper777"), {
  loop: false,
  spaceBetween: 70,
  thumbs: {
    swiper: swiper5,  
  },
});


const swiper777_2 = new Swiper(document.getElementById("swiper777-2"), {
  loop: false,
  spaceBetween: 70,
  thumbs: {
    swiper: swiper555,
  },
});

const validate = new window.JustValidate("#form");

const validation = new JustValidate("#form", {
  errorLabelStyle: {
    color: "#FF6972",
  },
});

validation
  .addField("#name", [
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Минимум 2 символа",
    },
    {
      rule: "maxLength",
      value: 30,
    },
    {
      rule: "customRegexp",
      value: /^([а-яА-Я])/,
      errorMessage: "Недопустимый формат(только кириллиица)",
    },
    {
      rule: "required",
      errorMessage: "Обязательное поле",
    },
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "Обязательное поле",
    },
    // {
    //     rule: 'customRegexp',
    //     value: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
    //     errorMessage: 'Недопустимый формат'
    // },
  ])
  .addField("#happy", [
    {
      rule: "required",
      errorMessage: "Обязательное поле",
    },
  ]);

validation.onSuccess(function (e) {
  e.preventDefault();
  $("#ex2").modal("show");
});

var phoneMask = IMask(document.getElementById("tel"), {
  mask: "+{7}(000)000-00-00",
});

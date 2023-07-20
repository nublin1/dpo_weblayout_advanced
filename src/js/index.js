const select1 = new CustomSelect('#select-1');
const select2 = new CustomSelect('#select-2');

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: '.hero-pagination',
        type: 'bullets',
        clickable: true, 
    },
});

const swiper2 = new Swiper('.swiper-container-2', {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 32,
    navigation: {
        nextEl: '.offers-button-next',
        prevEl: '.offers-button-prev',
    },
});

const swiper3 = new Swiper('.swiper-container-3', {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 32,
    navigation: {
        nextEl: '.useful-button-next',
        prevEl: '.useful-button-prev',
    },
});

const swiper4 = new Swiper('.swiper-container-4', {
  slidesPerView: "auto",
  loop: false,
  spaceBetween: 32,
  navigation: {
      nextEl: '.catalog-button-next',
      prevEl: '.catalog-button-prev',
  },
});

const validate = new window.JustValidate('#form');

const validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#FF6972'
  }
});

validation
  .addField('#name', [
    {
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
  .addField('#tel', [
    {
        rule: 'required',
        errorMessage: 'Обязательное поле',
    },
    {
        rule: 'customRegexp',
        value: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
        errorMessage: 'Недопустимый формат'
        },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);



    // Начало обёртки, которая нужна чтобы все корректно отображалось на codepen
  
    const quantityParams = {
      quantity: 4,
      boxes: [],
      hiddenIndex: null,
      MOBILE: {
        screen: 576,
        quantity: 2
      },
      TABLET: {
        screen: 1280,
        quantity: 3
      },
      DESKTOP: {
        screen: 1281,
        quantity: 4
      }
    };
  
    function setHiddenIdx() {
      quantityParams.boxes = Array.from(document.querySelectorAll(".box"));
      const newHiddenIdx = quantityParams.boxes.findIndex((box) => isHidden(box))
      quantityParams.hiddenIndex = newHiddenIdx;
    }
  
    function isHidden(el) {
      const style = window.getComputedStyle(el);
      return style.display === "none";
    }
    
    function showHide (btn) {
      for (
          let k = quantityParams.hiddenIndex;
          k < quantityParams.hiddenIndex + quantityParams.quantity;
          k++
        ) {
          if (quantityParams.boxes[k]) {
            quantityParams.boxes[k].style.display = "block";
          } else {
            btn.style.display = "none";
            break;
          }
        }
    }
  
    function getShowQuantity() {
      switch (true) {
        case window.screen.width <= quantityParams.MOBILE.screen:
          if (quantityParams.quantity !== quantityParams.MOBILE.quantity) {
            quantityParams.quantity = quantityParams.MOBILE.quantity;
            setHiddenIdx();
          }
          break;
        case window.screen.width <= quantityParams.TABLET.screen:
          if (quantityParams.quantity !== quantityParams.TABLET.quantity) {
            quantityParams.quantity = quantityParams.TABLET.quantity;
            setHiddenIdx();
          }
          break;
        default:
          if (quantityParams.quantity !== quantityParams.DESKTOP.quantity) {
            quantityParams.quantity = quantityParams.DESKTOP.quantity;
            setHiddenIdx();
          }
      }
    }
  
    function setShowMore() {
      const btn = document.querySelector(".more");
  
      btn.addEventListener("click", function () {
        setHiddenIdx();
        showHide(btn);
        // quantityParams.hiddenIndex += quantityParams.quantity;
      });
      getShowQuantity();
      window.addEventListener(`resize`, getShowQuantity);
    }
  
    setShowMore();
  
    //    Конец обертки

  


var phoneMask = IMask(
  document.getElementById('tel'), {
    mask: '+{7}(000)000-00-00'
  });

  tippy('#myButton', {
    content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
    interactive: true,
  });
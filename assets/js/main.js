//header menu
document.addEventListener("DOMContentLoaded", function () {
  let headerMenuButton = document.querySelector(".header__burger");

  if (headerMenuButton) {
    headerMenuButton.addEventListener("click", function () {
      let headerMenuOpen = document.querySelector(".header__menu");
      let headerNavActive = document.querySelector(".header__nav");
      let overLayActive = document.querySelector(".overlay");

      if (headerMenuOpen) {
        // Активация меню
        headerNavActive.classList.toggle("active");
        headerMenuOpen.classList.toggle("active");
        overLayActive.classList.toggle("active");
        headerMenuButton.classList.toggle("active"); // Анимация превращения в крестик

        // Добавление логотипа и кнопки в мобильное меню при активации 
        if (headerNavActive.classList.contains("active")) {
          let logo = document.querySelector(".header__logo").cloneNode(true);
          let button = document.querySelector(".header__actions").cloneNode(true);

          logo.classList.add("header__logo--mobile");
          button.classList.add("header__actions--mobile");

          headerMenuOpen.prepend(logo);
          headerMenuOpen.append(button);
        } else {
          // Очистка лого и кнопки при закрытии меню
          let mobileLogo = document.querySelector(".header__logo--mobile");
          let mobileButton = document.querySelector(".header__actions--mobile");

          if (mobileLogo) mobileLogo.remove();
          if (mobileButton) mobileButton.remove();
        }
      }
    });
  }
});
// Попап
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.querySelector(".popup");
  const overlay = document.querySelector(".overlay");
  const closeButton = document.querySelector(".popup__close");
  const openButton = document.querySelector(".open__popup");

  function openPopup() {
    if (popup && overlay) {
      popup.classList.add("active");
      overlay.classList.add("active");
    }
  }

  function closePopup() {
    if (popup && overlay) {
      popup.classList.remove("active");
      overlay.classList.remove("active");
    }
  }

  // Проверяем наличие элементов перед добавлением обработчиков событий
  if (openButton) {
    openButton.addEventListener("click", openPopup);
  }

  if (closeButton) {
    closeButton.addEventListener("click", closePopup);
  }

  if (overlay) {
    overlay.addEventListener("click", closePopup);
  }
});
//slider single-post
document.addEventListener("DOMContentLoaded", function () {
  // Проверяем наличие контейнера слайдера, чтобы избежать ошибок
  const sliderContainer = document.querySelector(".project-slider__swiper");

  if (sliderContainer) {
      // Инициализируем Swiper
      const projectSlider = new Swiper(sliderContainer, {          
        
          slidesPerView: 2,
          spaceBetween: 10,
          breakpoints: {
              // Показывает больше слайдов на большем экране
              640: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 40 },
          }
      });

    
  }
});

///Слайдер нашей команды
document.addEventListener('DOMContentLoaded', function () {
  const prevArrow = document.querySelector(".team__slider__arrow--left");
  const nextArrow = document.querySelector(".team__slider__arrow--right");



  const swiper = new Swiper('.team__slider', {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: false,
    navigation: {
      prevEl: prevArrow,
      nextEl: nextArrow,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      640: {
        spaceBetween: 18,
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },   
  });
});



///our clients
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".clients__slider", {
    slidesPerView: "2", // Показывает несколько логотипов
    spaceBetween: 10, // Расстояние между логотипами
    loop: true, // Бесконечный цикл
    autoplay: {
      delay: 0, // Автоматическая прокрутка
      disableOnInteraction: false,
    },
    speed: 2000, // Скорость прокрутки
    breakpoints: {
      639: { 
        slidesPerView: 3, 
      },
    }
  });
});
// Секция отзывов
document.addEventListener("DOMContentLoaded", function () {
  const avatars = document.querySelectorAll(".testimonials__avatar");
  const reviews = document.querySelectorAll(".testimonials__review");
  const prevArrow = document.querySelector(".testimonials__arrow--left");
  const nextArrow = document.querySelector(".testimonials__arrow--right");

  let currentIndex = 0;

  function showReview(index) {
    // Проверяем наличие элементов перед выполнением функции
    if (avatars.length && reviews.length) {
      avatars.forEach((avatar) => avatar.classList.remove("active"));
      reviews.forEach((review) => review.classList.remove("active"));

      avatars[index].classList.add("active");
      reviews[index].classList.add("active");

      updateArrows();
    }
  }

  function updateArrows() {
    if (prevArrow && nextArrow) {
      prevArrow.classList.toggle("disabled", currentIndex === 0);
      nextArrow.classList.toggle("disabled", currentIndex === avatars.length - 1);
    }
  }

  // Проверяем наличие элементов перед добавлением обработчиков событий
  if (prevArrow && nextArrow) {
    prevArrow.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        showReview(currentIndex);
      }
    });

    nextArrow.addEventListener("click", function () {
      if (currentIndex < avatars.length - 1) {
        currentIndex++;
        showReview(currentIndex);
      }
    });
  }

  // Проверяем наличие отзывов и аватаров перед запуском функции
  if (avatars.length && reviews.length) {
    showReview(currentIndex);
  }
});

///Faq
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq__question");
    const answer = item.querySelector(".faq__answer");

    question.addEventListener("click", function () {
      // Если элемент уже активен, закрываем его
      if (item.classList.contains("faq__item_active")) {
        answer.style.height = answer.scrollHeight + "px"; // устанавливаем текущую высоту
        setTimeout(() => {
          answer.style.height = "0"; // и через мгновение ставим её в 0
        }, 0);
        item.classList.remove("faq__item_active");
      }
      // Если элемент не активен, открываем его
      else {
        answer.style.height = answer.scrollHeight + "px"; // устанавливаем высоту на раскрытие
        item.classList.add("faq__item_active");
      }
    });

    // Сброс высоты на "auto" после завершения анимации
    answer.addEventListener("transitionend", function () {
      if (item.classList.contains("faq__item_active")) {
        answer.style.height = "auto";
      }
    });
  });
});

///форма обратной связи

document.addEventListener("DOMContentLoaded", function () {
  const feedbackForm = document.getElementById("feedbackForm");
  const nameInput = document.getElementById("name");
  const contactInput = document.getElementById("contact");
  const ideaTextarea = document.getElementById("idea");
  const charCount = document.getElementById("charCount");
  const fileInput = document.getElementById("file");
  const fileError = document.getElementById("fileError");

  // Обновление счётчика символов
  ideaTextarea.addEventListener("input", () => {
    charCount.textContent = ideaTextarea.value.length;
  });

  // Валидация формы
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let formIsValid = true;

    // Проверка пустых полей
    [nameInput, contactInput, ideaTextarea].forEach((input) => {
      if (!input.value.trim()) {
        input.classList.add("error");
        formIsValid = false;
      } else {
        input.classList.remove("error");
      }
    });

    // Валидация файла
    fileError.textContent = "";
    const file = fileInput.files[0];
    const maxSizeMB = 50;
    const allowedTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "video/mp4",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (file) {
      if (!allowedTypes.includes(file.type)) {
        fileError.textContent =
          "Неверный формат файла. Поддерживаются PDF, PNG, JPG, MP4, DOCX.";
        formIsValid = false;
      } else if (file.size > maxSizeMB * 1024 * 1024) {
        fileError.textContent = `Файл слишком большой. Максимальный размер — ${maxSizeMB} МБ.`;
        formIsValid = false;
      }
    }

    // Отправка формы, если она валидна
    if (formIsValid) {
      feedbackForm.submit();
    }
  });
});

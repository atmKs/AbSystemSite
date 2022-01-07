$(function () {
  /* Nav Toggle on mobile */

  let navToggle = $("#navToggle");
  let nav = $("#nav");

  navToggle.on("click", function (event) {
    event.preventDefault();

    $("body").toggleClass("show-nav");
    $(this).toggleClass("active");
    nav.toggleClass("show");
  });

  $(window).on("resize", function () {
    $("body").removeClass("show-nav");
    navToggle.removeClass("active");
    nav.removeClass("show");
  });

  let intro = $("#intro");
  let header = $("#header");
  let introH = intro.innerHeight();
  let headerH = header.innerHeight();
  let scrollTop = $(window).scrollTop();

  /* Header class on scroll */

  headerScroll();

  $(window).on("scroll  resize", function () {
    headerScroll();
  });

  function headerScroll() {
    introH = intro.innerHeight();
    headerH = header.innerHeight();

    let scrollTop = $(this).scrollTop();

    if (scrollTop >= introH - headerH) {
      header.addClass("header__color");
    } else {
      header.removeClass("header__color");
    }
  }

  /* Smooth Scroll to sections */

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let scrollEl = $(this).data("scroll");
    let scrollElPos = $(scrollEl).offset().top;

    $("body").removeClass("show-nav");
    navToggle.removeClass("active");
    nav.removeClass("show");

    $("html, body").animate(
      {
        scrollTop: scrollElPos - headerH,
      },
      500
    );
  });

  /* ScrollSpy */
  let windowH = $(window).height();
  scrollSpy(scrollTop);

  $(window).on("scroll", function () {
    scrollTop = $(this).scrollTop();
    scrollSpy(scrollTop);
  });

  function scrollSpy(scrollTop) {
    $("[data-scrollspy]").each(function () {
      let $this = $(this);
      let sectionId = $this.data("scrollspy");
      let sectionOffset = $this.offset().top;
      sectionOffset = sectionOffset - windowH * 0.33333;

      if (scrollTop >= sectionOffset) {
        $("#nav [data-scroll]").removeClass("active");
        $('#nav [data-scroll="' + sectionId + '"]').addClass("active");
      }

      if (scrollTop == 0) {
        $("#nav [data-scroll]").removeClass("active");
      }
    });
  }

  /* Modal */

  $("[data-modal]").on("click", function (event) {
    event.preventDefault();
    let modal = $(this).data("modal");

    $("body").addClass("no-scroll");
    $(modal).addClass("show");

    setTimeout(function () {
      $(modal).find(".modal__content").css({
        transform: "scale(1)",
        opacity: "1",
      });
    }, 100);
  });

  $("[data-modal-close]").on("click", function (event) {
    event.preventDefault();
    let modal = $(this).parents(".modal");
    modalClose(modal);
  });

  $(".modal").on("click", function () {
    let modal = $(this);
    modalClose(modal);
  });

  $(".modal__content").on("click", function (event) {
    event.stopPropagation();
  });

  function modalClose(modal) {
    modal.find(".modal__content").css({
      transform: "scale(0.5)",
      opacity: "0",
    });

    setTimeout(function () {
      $("body").removeClass("no-scroll");
      modal.removeClass("show");
    }, 200);
  }

  /* Slick slider */

  /* Intro Slider */
  let introSlider = $("#introSlider");

  introSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1500,
  });

  $("#introSliderPrev").on("click", function () {
    introSlider.slick("slickPrev");
  });

  $("#introSliderNext").on("click", function () {
    introSlider.slick("slickNext");
  });

  /* Reviews Slider */
  let reviewsSlider = $("#reviewsSlider");

  reviewsSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  /* InfoPopup Slider*/
  let proectSystem = $("#proectSystem");

  proectSystem.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  let developSsr = $("#developSsr");

  developSsr.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  let upgrade = $("#upgrade");

  upgrade.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  /*  Aos.js  */

  AOS.init({
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 80, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
});

const openPopup = document.querySelector(".btn--popup"),
  openModalPopup = document.querySelector(".btn-modal--popup"),
  popUp = document.querySelector(".pop_up"),
  openInfoPopupFirst = document.querySelector("#first_info_pop_up"),
  firstInfoPopup = document.querySelector("#first_info"),
  openInfoPopupSecond = document.querySelector("#second_info_pop_up"),
  secondInfoPopup = document.querySelector("#second_info"),
  openInfoPopupThird = document.querySelector("#third_info_pop_up"),
  thirdInfoPopup = document.querySelector("#third_info"),
  openInfoPopupFour = document.querySelector("#four_info_pop_up"),
  fourInfoPopup = document.querySelector("#four_info"),
  phoneInput = document.querySelector(".input--phone"),
  maskOptions = {
    mask: "+{7}(000)000-00-00",
  },
  mask = IMask(phoneInput, maskOptions);

openPopup.addEventListener("click", () => {
  popUp.classList.add("_active");
});

openModalPopup.addEventListener("click", () => {
  popUp.classList.add("_active");
});

popUp.addEventListener("click", (e) => {
  const target = e.target;
  if (target.closest(".pop_up_close")) {
    popUp.classList.remove("_active");
  }
});

// Info-popups
function openInfoPopup(popup, popupInfo) {
  popup.addEventListener("click", function (e) {
    e.preventDefault();
    popupInfo.classList.add("_active");
    popupInfo.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest(".modal__close")) {
        popupInfo.classList.remove("_active");
      }
    });
  });
}

openInfoPopup(openInfoPopupFirst, firstInfoPopup);
openInfoPopup(openInfoPopupSecond, secondInfoPopup);
openInfoPopup(openInfoPopupThird, thirdInfoPopup);
openInfoPopup(openInfoPopupFour, fourInfoPopup);

import "../css/index.css";

const actions = {
  toggleMenu,
  changeSlide,
};

document.addEventListener("click", (event) => {
  handleMenuClickOutside(event);

  const action = getClosestAction(event.target);
  if (!action) {
    return;
  }

  event.currentEl = action.target;

  actions[action.name](event);
});

function handleMenuClickOutside(event) {
  if (!event.target.closest("header")) {
    document.querySelector("header")?.classList.remove("js-active");
  }
}

function getClosestAction(el) {
  const actionName = el?.getAttribute("data-action");
  if (actionName) {
    return { name: actionName, target: el };
  }

  if (el.parentElement) {
    return getClosestAction(el.parentNode);
  }

  return null;
}

function toggleMenu(event) {
  const wrapper = event.currentEl.closest(".group");
  wrapper.classList.toggle("js-active");
}

const slider = {
  wrapper: document.querySelector(".guides"),
  inner: document.querySelector(".guides-inner"),
  articles: document.querySelectorAll(".guides article"),
  prevBtn: document.querySelector("[data-value='prev']"),
  nextBtn: document.querySelector("[data-value='next']"),
  currentIndex: 0,
  next() {
    this.currentIndex = Math.min(++this.currentIndex, this.articles.length);
    updateSliderSlider();
  },
  prev() {
    this.currentIndex = Math.max(--this.currentIndex, 0);
    updateSliderSlider();
  },
};

window.onresize = updateSliderSlider;

function changeSlide(event) {
  const { value } = event.currentEl.dataset;

  slider[value]();
}

function updateSliderSlider() {
  updateSliderButtons();
  const { inner, articles } = slider;

  const articlesWidth = getSlidesWidth(articles),
    wrapperWidth = getWrapperWidth();

  const offset = (articlesWidth - wrapperWidth) * (slider.currentIndex / (articles.length - 1));

  inner.style.transform = `translate3d(-${offset}px, 0, 0)`;
}

function updateSliderButtons() {
  toggleSliderButton(slider.prevBtn, slider.currentIndex === 0);
  toggleSliderButton(slider.nextBtn, slider.currentIndex === slider.articles.length - 1);
}

function toggleSliderButton(button, condition) {
  if (condition) {
    button.setAttribute("disabled", "disabled");
  } else {
    button.removeAttribute("disabled");
  }
}

function getSlidesWidth(articles) {
  return [...articles].reduce((sum, item) => {
    sum += item.offsetWidth;
    return sum;
  }, 0) + (slider.articles.length - 1) * 30;
}

function getWrapperWidth() {
  return slider.wrapper.clientWidth;
}

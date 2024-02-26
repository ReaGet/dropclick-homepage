import "../css/index.css";

const actions = {
  toggleMenu,
  changeSlide,
};

document.addEventListener("click", (event) => {
  const action = getClosestAction(event.target);
  if (!action) {
    return;
  }

  event.currentEl = action.target;

  actions[action.name](event);
});

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

let activeIndex = 0;

const slider = {
  next: nextSlide,
  prev: prevSlide,
};

function changeSlide(event) {
  const articles = document.querySelectorAll(".guides-wrapper article");
  const { value } = event.currentEl.dataset;

  slider[value](articles, );
  console.log(outerWidth)
}

function nextSlide(articles) {
  const outerWidth = getSlidesWidth(articles);
  activeIndex = Math.min(++activeIndex, articles.length);
  console.log("next", activeIndex);
}

function prevSlide() {
  activeIndex = Math.max(--activeIndex, 0);
  console.log("prev", activeIndex);
}

function updateSliderButtons() {
  
}

function getSlidesWidth(articles) {
  return [...articles].reduce((sum, item) => {
    sum += item.offsetWidth;
    return sum;
  }, 0);
}
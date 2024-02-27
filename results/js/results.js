import "../../src/css/index.css";

const actions = {
  toggleMenu,
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
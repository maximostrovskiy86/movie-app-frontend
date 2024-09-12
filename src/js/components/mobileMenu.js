const mobileMenuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');

const onStateMobileMenuFn = () => {
  const expanded = mobileMenuBtnRef.getAttribute('aria-expanded') === true || false;

  mobileMenuBtnRef.classList.toggle('is-open');
  mobileMenuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
};

mobileMenuBtnRef.addEventListener('click', onStateMobileMenuFn);

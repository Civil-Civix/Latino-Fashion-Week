const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('[data-menu]');
const mobile = window.matchMedia('(max-width: 760px)');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
  menu.hidden = mobile.matches && !open;
}
function resetMenu() { setMenu(false); }
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false); toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (mobile.matches && !event.target.closest('.site-header')) setMenu(false);
});
mobile.addEventListener('change', resetMenu);
resetMenu();

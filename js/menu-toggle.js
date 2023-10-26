class MenuToggle extends HTMLElement {
  connectedCallback() {
    const button = this.querySelector('button');
    const expandedNav = document.querySelector('.site-header');

    const toggleMenu = () => {
      const open = button.getAttribute('aria-expanded') == 'true';

      if (open) {
        button.setAttribute('aria-expanded', false);
        expandedNav.setAttribute('data-status', 'closed');
      } else {
        button.setAttribute('aria-expanded', true);
        expandedNav.setAttribute('data-status', 'opened');
      }
    };

    this.addEventListener('click', toggleMenu, false);
  }
}
window.customElements.define('menu-toggle', MenuToggle);

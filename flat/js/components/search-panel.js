class SearchPanel extends HTMLElement {
  connectedCallback() {
    const triggers = document.querySelectorAll(`[data-trigger="${this.getAttribute('id')}"]`);

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        this.toggleAttribute('data-active');
        
        setTimeout(() => {
          this.focus();
        }, 500);
      });
    });
  }

  focus() {
    const input = this.querySelector('input');
    console.log(input);
    
    if (input) {
      input.focus();
    }
  }
}
window.customElements.define('search-panel', SearchPanel);

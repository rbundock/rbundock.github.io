class LogoGlitch extends HTMLElement {
  connectedCallback() {
    this.rectangles = this.querySelectorAll('svg g g path');
    this.addTransition = this.addTransition.bind(this);
    this.swapFillColors = this.swapFillColors.bind(this);
    this.getRandomElement = this.getRandomElement.bind(this);

    this.addTransition();

    setInterval(this.swapFillColors, 300);
  }

  addTransition() {
    this.rectangles.forEach(rect => {
      rect.style.transition = '0.6s linear fill'
    });
  }

  swapFillColors() {
    const rect = this.getRandomElement(this.rectangles);

    rect.classList.add('glitch');

    const randomColor = rect.getAttribute('fill') == '#DAFF02' ? "#FF46FA" : "#DAFF02";
    rect.setAttribute('fill', randomColor);
    
    setTimeout(() => {
      rect.classList.remove('glitch');
    }, 400);
  }

  getRandomElement(elements) {
    if (elements.length === 0) {
      return null; // No elements found
    }
    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex];
  }
}
window.customElements.define('logo-glitch', LogoGlitch);

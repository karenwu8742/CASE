class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <footer class="text-center bg-light">
          <div class="text-center p-3" style="background-color: #D9D9D9;">
            © Carnegie Mellon University 2023
          </div>
        </footer>
        `;
      }
}

customElements.define('footer-component', Footer);
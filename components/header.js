class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <style>
        </style>
        <header>
          <nav class="navbar navbar-light bg-light pl-5 pr-5">
            <a class="navbar-brand" href="https://www.cs.cmu.edu/">
              <img src="assets/scs-unitmark.png" width="200" height="37" class="d-inline-block align-top" alt="">
            </a>
            <div class="justify-content-end">
              <img src="assets/healthicons_ui-user-profile.png" width="37" height="37" class="d-inline-block align-top" alt="">
            </div>
          </nav>
        </header>
        `;
      }
}

customElements.define('header-component', Header);
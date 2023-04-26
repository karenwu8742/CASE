class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <header>
          <nav class="navbar bg-light pl-5 pr-5" style="background-color: #D9D9D9 !important;">
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
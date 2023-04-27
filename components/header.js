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
              <span class="material-symbols-outlined" style="font-size:45px;color: #999999;">
              account_circle
              </span>
            </div>
          </nav>
        </header>
        `;
      }
}

customElements.define('header-component', Header);
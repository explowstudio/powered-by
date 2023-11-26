class PoweredBy extends HTMLElement {
  constructor() {
    super();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../styles/index.css";

    document.head.appendChild(link)
  }

  connectedCallback() {
    this.innerHTML = `
      <a href="https://explow.studio" class="powered-by" target="_blank">
        Powered by <img src="../assets/logo.svg" alt="Explow" />
      </a>
    `;
  }
}

customElements.define("powered-by", PoweredBy);

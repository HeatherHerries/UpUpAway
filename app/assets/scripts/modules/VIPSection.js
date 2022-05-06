import Axios from "axios";

class VIPSection {
  constructor() {
    this.injectHTML();
    this.form = document.querySelector(".vip-section__form");
    this.field = document.querySelector(".vip-section__input");
    this.contentArea = document.querySelector(".vip-section__content-area");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", e => {
      e.preventDefault();
      this.sendRequest();
    });
  }

  sendRequest() {
    Axios.post(
      "https://friendly-custard-5d1ec0.netlify.app/.netlify/functions/VIPSection",
      { password: this.field.value }
    )
      .then(response => {
        this.form.remove();
        this.contentArea.innerHTML = response.data;
      })
      .catch(() => {
        this.contentArea.innerHTML = `<p class="vip-section__error">That password is incorrect. Please try again.</p>`;
        this.field.value = "";
        this.field.focus();
      });
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
    <div class="vip-section">
      <div class="wrapper wrapper--medium">
        <h2 class="section-title section-title--blue">VIP Section</h2>
        <form class="vip-section__form" action="">
          <input class="vip-section__input" type="text" placeholder="Enter your password">
          <button class="btn btn--orange">Submit</button>
        </form>
        <div class="vip-section__content-area"></div>
      </div>
    </div>
    `
    );
  }
}

export default VIPSection;

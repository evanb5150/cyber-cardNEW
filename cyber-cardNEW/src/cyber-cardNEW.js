import { LitElement, html, css } from 'lit';

// Fix: Unused variable 'logo'
// const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CyberCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: #1a2b42;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    background-color: var(--my-cardNEW-background-color);
  }

  .card {
    background-color: white;
    max-width: 500px;
    max-height: 500px;
  }

  .btn-image{
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    max-width: 100%;
    height: auto;
  }

  .btn-wrapper {
    margin: 10px auto;
    
  }

  .btn-wrapper button {
    font-size: 12px;
    color: blue;
    background-color: white;

  }

  .details-button button {
    font-size: 12px;
    color: blue;
    background-color: white;

  }

  .dup-btn button {
    font-size: 12px;
    color: blue;
    background-color: white;
    margin: 24px auto;

  }

  .color-btn button{
    font-size: 12px;
    color: blue;
    background-color: white;
    margin: 24px auto;
  }

  .text-btn button{
    font-size: 12px;
    color: blue;
    background-color: white;
    margin: 24px auto;
  }

  .delete-btn button{
    font-size: 12px;
    color: blue;
    background-color: white;
    margin: 24px auto;
  }

  .dup-btn button:hover{
    color:white;
    background-color:black;
  }

  .dup-btn button:focus{
    background-color:blue;
    color:green;
  }

  .btn-wrapper button:hover {
    color: white;
    background-color: red;
  }
    .details-button button:hover {
    color: white;
    background-color: red;
  }

  .card:hover{
    width: 100%;
    background-size: auto;
    background-color: blue;
  }


  main {
    flex-grow: 1;
  }

  .logo {
    margin-top: 36px;
    animation: app-logo-spin infinite 20s linear;
  }

  @keyframes app-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .app-footer {
    font-size: calc(12px + 0.5vmin);
    align-items: center;
  }

  .app-footer a {
    margin-left: 5px;
  }

  @media (max-width: 600px) and (min-width: 500px){
    details-button{
       display: none;
     }
   }
   
   @media screen and (max-width: 600px){
     .card{
       max-width: 500px;
     }
     
   }

  `;

  constructor() {
    super();
    this.header = 'My app';

    
  }

 

  // eslint-disable-next-line class-methods-use-this
  randomColorGenerator() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  
  }

  // eslint-disable-next-line class-methods-use-this
  duplicateCard() {
    const p = CyberCard.getElementById("card");
    const d = p.cloneNode(true);
    CyberCard.body.appendChild(d);
  }

  // eslint-disable-next-line class-methods-use-this
  changeTitle() {
    const title = document.querySelector("h1");
    title.innerHTML = "Penn State Quarterback";
  }

  // eslint-disable-next-line class-methods-use-this
  deleteCard() {
    const card = document.getElementById("card");
    card.remove();
  }

  firstUpdated() {
    const colbtn = document.getElementById("colbtn"); 
    const textbtn = document.getElementById("textbtn");
    const deletebtn = document.getElementById("deletebtn");
    const dupbtn = document.getElementById("dup");
    
    
        

    colbtn.addEventListener("click", this.randomColorGenerator);
    textbtn.addEventListener("click", this.changeTitle);
    deletebtn.addEventListener("click", this.deleteCard);
    dupbtn.addEventListener("click", this.duplicateCard);

  }


  render() {
    return html`
    <div class="card" id="card">
    <h1>Drew Allar</h1>
    <div class="btn-image">
        // eslint-disable-next-line lit/attribute-value-entities
        <img src="https://th.bing.com/th/id/OIP.yghP1TEXURUPo9L6TeInkAHaD4?w=331&amp;h=180&amp;c=7&amp;r=0&amp;o=5&amp;dpr=2.5&amp;pid=1.7"
            alt="Drew Allar's">
        <p>Drew Allar</p>
    </div>

    <div class="btn-wrapper">
        <button onclick="window.location.href='https://gopsusports.com/sports/football/roster/drew-allar/13992';"
            id="stat">Stats</button>
    </div>

    <div class="details-button">
        <button onclick="window.location.href='https://hax.psu.edu/';" id="det">Details</button>
    </div>

    <div class="dup-btn">
        <button id="dup">Duplicate</button>
    </div>

    <div class="color-btn">
        <button id="colbtn">Change Color</button>
    </div>

    <div class="text-btn">
        <button id="textbtn">Change Title</button>
    </div>

    <div class="delete-btn">
        <button id="deletebtn">Delete Card</button>
    </div>
</div>

    `;
  }
}

customElements.define('cyber-card', CyberCard);
/* common.js */
function layoutNav() {
  if (document.querySelector('.nav')) return;

  const navHTML = `
    <div class="nav">
      <div class="nav-logo">
        <img src="./images/rogo.PNG" alt="HAGUMO" style="height: 30px;" onerror="this.src='./rogo.PNG'">
      </div>
      <div class="nav-links">
        <a href="./index.html" class="nav-link">HOME</a>
        <a href="./world.html" class="nav-link">WORLD</a>
        <a href="./hagumo.html" class="nav-link">HAGUMO</a>
        <a href="./diagnosis.html" class="nav-link">DIAGNOSIS</a>
        <a href="./product.html" class="nav-link">PRODUCT</a>
        <a href="./my.html" class="nav-link">MY HAGUMO</a>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  // カレント表示のロジックはそのまま維持
}
window.addEventListener('DOMContentLoaded', layoutNav);


/* common.js */
function layoutNav() {
  // すでにナビがある場合は作らない
  if (document.querySelector('.nav')) return;

  const navHTML = `
    <div class="nav">
      <div class="nav-logo">
        <a href="./index.html">
          <img src="./images/rogo.PNG" alt="HAGUMO" style="height: 35px;" onerror="this.src='./rogo.PNG'">
        </a>
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

  // --- 今いるページを光らせる（Active判定） ---
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    // href属性を取得して、現在のファイル名と一致するかチェック
    const href = link.getAttribute('href').replace('./', '');
    if (currentPath === href || (currentPath === "" && href === "index.html")) {
      link.classList.add('active');
    }
  });
}

// ページ読み込み時に実行
window.addEventListener('DOMContentLoaded', layoutNav);

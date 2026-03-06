// common.js
function layoutNav() {
  const navHTML = `
    <div class="nav">
      <a href="index.html" class="nav-link">HOME</a>
      <a href="world.html" class="nav-link">WORLD</a>
      <a href="hagumo.html" class="nav-link">HAGUMO</a>
      <a href="diagnosis.html" class="nav-link">DIAGNOSIS</a>
      <a href="product.html" class="nav-link">PRODUCT</a>
      <a href="my.html" class="nav-link">MY HAGUMO</a>
    </div>
  `;

  // bodyの先頭にナビゲーションを挿入
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // 現在のページに合わせてリンクの色を変える処理
  const links = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.style.color = "#ff4fa3";
      link.style.borderBottom = "3px solid #ff4fa3";
    }
  });
}

// ページ読み込み時に実行
window.addEventListener('DOMContentLoaded', layoutNav);

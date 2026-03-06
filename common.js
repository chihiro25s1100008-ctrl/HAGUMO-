/* common.js */
function layoutNav() {
  // すでにナビが存在する場合は重複して作らない
  if (document.querySelector('.nav')) return;

  // 全ページ共通のナビゲーション構造
  const navHTML = `
    <nav class="nav">
      <div class="nav-logo">
        <a href="index.html">
          <img src="images/rogo.PNG" alt="HAGUMO" style="height: 35px;" onerror="this.src='rogo.PNG'">
        </a>
      </div>
      <div class="nav-links">
        <a href="index.html" class="nav-link" data-page="index.html">HOME</a>
        <a href="world.html" class="nav-link" data-page="world.html">WORLD</a>
        <a href="hagumo.html" class="nav-link" data-page="hagumo.html">HAGUMO</a>
        <a href="diagnosis.html" class="nav-link" data-page="diagnosis.html">DIAGNOSIS</a>
        <a href="product.html" class="nav-link" data-page="product.html">PRODUCT</a>
        <a href="my.html" class="nav-link" data-page="my.html">MY HAGUMO</a>
      </div>
    </nav>
  `;

  // bodyの先頭に挿入
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // --- カレント表示（今いるページを光らせる）のロジック ---
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const targetPage = link.getAttribute('data-page');
    // ファイル名が一致するか、トップページ（空）でHOMEを指している場合
    if (currentPath === targetPage || (currentPath === "" && targetPage === "index.html")) {
      link.classList.add('active');
    }
  });
}

// 読み込み完了時に実行
window.addEventListener('DOMContentLoaded', layoutNav);

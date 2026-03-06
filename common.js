/* common.js - HAGUMO Project 全ページ共通スクリプト */

function layoutNav() {
  // すでにナビゲーションが存在する場合は重複して作成しない
  if (document.querySelector('.nav')) return;

  // ナビゲーションのHTML構造
  // 全てのリンクはカレントディレクトリ（./）からの相対パスで統一
  const navHTML = `
    <nav class="nav">
      <div class="nav-logo">
        <a href="./index.html">
          <img src="./images/rogo.PNG" alt="HAGUMO" style="height: 35px;" onerror="this.src='./rogo.PNG'">
        </a>
      </div>
      <div class="nav-links">
        <a href="./index.html" class="nav-link" data-page="index.html">HOME</a>
        <a href="./world.html" class="nav-link" data-page="world.html">WORLD</a>
        <a href="./hagumo.html" class="nav-link" data-page="hagumo.html">HAGUMO</a>
        <a href="./diagnosis.html" class="nav-link" data-page="diagnosis.html">DIAGNOSIS</a>
        <a href="./product.html" class="nav-link" data-page="product.html">PRODUCT</a>
        <a href="./my.html" class="nav-link" data-page="my.html">MY HAGUMO</a>
      </div>
    </nav>
  `;

  // bodyタグの最上部に挿入
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // --- カレント表示（今いるページをピンクにする）のロジック ---
  
  // 1. 現在のURLからファイル名を取得（例: index.html）
  let currentFile = window.location.pathname.split("/").pop();
  
  // 2. もしファイル名が空（ドメイン直下など）なら index.html とみなす
  if (currentFile === "" || currentFile === "/") {
    currentFile = "index.html";
  }

  // 3. 全てのナビリンクを確認して、hrefが現在のファイル名と一致したら active クラスを付与
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    // href属性から ./ を取り除いた純粋なファイル名を取得
    const linkHref = link.getAttribute('href').replace('./', '');
    
    if (currentFile === linkHref) {
      link.classList.add('active');
    }
  });
}

// HTMLの解析が終わったタイミングで実行
document.addEventListener('DOMContentLoaded', layoutNav);

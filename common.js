function layoutNav() {
  if (document.querySelector('.nav')) return;
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
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  const links = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.style.color = "#ff7eb9";
      link.style.borderBottom = "2px solid #ff7eb9";
    }
  });
}
window.onload = layoutNav;

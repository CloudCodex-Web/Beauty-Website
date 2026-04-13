const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Toggle icon
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
window.addEventListener("load", () => {
  const skeleton = document.getElementById("skeleton");
  const content = document.getElementById("main-content");

  skeleton.style.display = "none";
  content.style.display = "block";

  setTimeout(() => {
    content.style.opacity = "1";
  }, 100);
});
let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

// Filter Function
function filterProducts(category) {
  let products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    if (category === "all") {
      product.style.display = "block";
    } else {
      if (product.classList.contains(category)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    }
  });
}
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
});
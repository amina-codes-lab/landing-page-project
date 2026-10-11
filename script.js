const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  const isOpen = navLinks.classList.contains("active");
  menuBtn.textContent = isOpen ? "X" : "≡";
  menuBtn.setAttribute("aria-expanded", isOpen);
});
const contactBtn = document.getElementById("contactBtn");
const footerContactBtn = document.getElementById("footerContactBtn");
const contactPopup = document.getElementById("contactPopup");
const closePopup = document.getElementById("closePopup");
contactBtn.addEventListener("click", function (e) {
  e.preventDefault();
  contactPopup.style.display = "flex";
});
footerContactBtn.addEventListener("click", function (e) {
  e.preventDefault();
  contactPopup.style.display = "flex";
});
closePopup.addEventListener("click", function () {
  contactPopup.style.display = "none";
});
contactPopup.addEventListener("click", function (e) {
  if (e.target === contactPopup) {
    contactPopup.style.display = "none";
  }
});

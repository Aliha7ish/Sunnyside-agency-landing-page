const btnNavEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function(){
    headerEl.classList.toggle("nav-open");
})

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");


    if (link.classList.contains("btn"))
      headerEl.classList.toggle("nav-open");

    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
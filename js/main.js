const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const copyIcon = document.querySelector('.ri-file-copy-line');

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__item", {
  ...scrollRevealOption,
  interval: 500,
});

// stats container
ScrollReveal().reveal(".stats__image img", {
  ...scrollRevealOption,
  origin: "right",
  interval: 500,
});

ScrollReveal().reveal(".stats__card", {
  interval: 500,
  duration: 500,
  delay: 1000,
});

// blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});


// copy email


function copyToClipboard() {
  // The email to copy
  const email = `${document.querySelector("#mailId").innerText}`;
  
  // Copy the email to the clipboard
  navigator.clipboard.writeText(email).then(() => {
    copyMail.style.display = "inline";
    setTimeout(()=> {
      copyMail.style.display = "none";
    }, 1500)      
  }).catch(err => {
    copyMail.style.display = "inline";
    setTimeout(()=> {
      copyMail.style.display = "failed to copy";
    }, 1500) 
  });
}

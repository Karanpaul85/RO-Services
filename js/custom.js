var sliderSec = document.querySelector(".splide");
if (sliderSec) {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
  });
  splide.mount();
}

//btn click
const links = document.querySelectorAll("nav ul li a");
const formLink = document.querySelectorAll(".gotoform");
const menuList = document.querySelector("nav");

// Add event listener to all links
links.forEach(function (elem) {
  elem.addEventListener("click", smoothScroll);
});

formLink.forEach(function (elem) {
  if (elem.hash) {
    elem.addEventListener("click", smoothScroll);
  }
});
// Magic function to scroll smooth!
function smoothScroll(e) {
  const hm = document.querySelector(".hm");
  // Prevent default anchor behaviour
  e.preventDefault();
  links.forEach(function (elem) {
    elem.classList.remove("active");
  });
  // Get the targets position
  //   const offsetTop = document.querySelector("#contact").offsetTop;
  const targetElem = e.target.getAttribute("href")
    ? e.target.getAttribute("href")
    : e.target.parentNode.getAttribute("href");
  const offsetTop = targetElem && document.querySelector(targetElem).offsetTop;
  e.target.classList.add("active");
  if (menuList.classList.contains("open")) {
    menuList.classList.remove("open");
  }
  if (hm && hm.classList.contains("open")) {
    hm.classList.remove("open");
  }

  // Finally scroll to target
  scroll({
    top: offsetTop - 80,
    behavior: "smooth",
  });
}

//form validation
var form = document.getElementById("contactForm");

form && form.addEventListener("submit", function (error) {
  var errorClasses = document.querySelectorAll(".errors"),
    name = document.getElementById("name"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    services = document.getElementById("servicesType");
  //remove error classes
  errorClasses?.forEach(function (err) {
    err.remove();
  });
  //add error class and msg
  if (name && name.value === "") {
    addError(name, "Name is required");
    error.preventDefault();
  }
  if (email && email.value === "") {
    addError(email, "Email is required");
    error.preventDefault();
  }
  if (phone && phone.value === "") {
    addError(phone, "Phone Number is required");
    error.preventDefault();
  }
  if (services && services.value === "") {
    addError(services, "Please select any service");
    error.preventDefault();
  }
});

//add error msg
function addError(elem, msg) {
  var spanElm = document.createElement("span");
  spanElm.className = "errors";
  spanElm.textContent = msg;
  if (elem.parentNode.tagName === "LABEL") {
    elem.parentNode.after(spanElm);
  } else {
    elem.after(spanElm);
  }

  elem.classList.add("errors1");
}
//mobile menu
if (screen.width < 769) {
  const hm = document.querySelector(".headerRight");
  if (hm) {
    const hmSpan = document.createElement("div");
    hmSpan.className = "hm";
    hm.appendChild(hmSpan);
    hmSpan.addEventListener("click", function () {
      const mobileMenu = document.querySelector(".hm");
      if (mobileMenu && menuList) {
        if (mobileMenu.classList.contains("open")) {
          mobileMenu.classList.remove("open");
          menuList.classList.remove("open");
        } else {
          mobileMenu.classList.add("open");
          menuList.classList.add("open");
        }
      }
    });
  }
}

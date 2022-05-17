window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// Login api
const loginForm = document.querySelector("#loginForm");

function onLogin(event) {
  const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;
  const emailValidValue =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  event.preventDefault();
  console.log(event);

  if (!emailValidValue.test(userEmail)) {
    alert("올바른 이메일 주소를 입력해주세요");
    return false;
  }
}

loginForm.addEventListener("submit", onLogin);

//date.toLocaleTimeString('ko-KR') -> 시계

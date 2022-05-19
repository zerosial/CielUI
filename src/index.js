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
const loginButton = document.querySelector("#loginButton");
const userName = document.querySelector("#userName");

if (!localStorage.getItem("userEmail")) {
  loginButton.outerHTML =
    '<button type="button" class="btn btn-light btn-lg dropdown-toggle" data-bs-toggle="dropdown" ata-bs-auto-close="true" id="loginButton">로그인</button>';
  loginForm.addEventListener("submit", onLogin);
}

if (localStorage.getItem("userEmail")) {
  loginButton.outerHTML =
    '<button type="button" class="btn btn-light btn-lg" id="logoutButton">로그 아웃</button>';
  const logoutButton = document.querySelector("#logoutButton");

  userName.innerHTML = `${localStorage.getItem(
    "userEmail"
  )}님 <br> 안녕하십니까`;
  logoutButton.addEventListener("click", onlogOut);
}

function onLogin() {
  const userEmail = document.getElementById("email").value;
  const emailValidValue =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!emailValidValue.test(userEmail)) {
    alert("올바른 이메일 주소를 입력해주세요");
    return false;
  }

  localStorage.setItem("userEmail", userEmail);
}

function onlogOut() {
  localStorage.removeItem("userEmail");
  location.reload();
}

// SideBar
const sideBar = document.querySelector("#sideBar");
const toggle = document.querySelector("#toggle");
let isSideBar = false;

sideBar.addEventListener("click", onClickSideBar);

function onClickSideBar() {
  isSideBar = true;
  //somethig do...
  //date.toLocaleTimeString('ko-KR') -> 시계
}

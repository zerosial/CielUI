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

loginForm.addEventListener("submit", onLogin);

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

// Clock & Whether
window.onload = function () {
  setClock();
  setInterval(setClock, 1000);
};

function setClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const clock = document.querySelector("#clock");

  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=16b8dd3dc6b05d106b703729eea13397&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const locationEl = document.querySelector("#location");
      const whetherEl = document.querySelector("#whether");
      const temperatureEl = document.querySelector("#temperature");
      const humidityEl = document.querySelector("#humidity");
      const windEl = document.querySelector("#wind");

      locationEl.innerText = data.name;
      whetherEl.innerText = data.weather[0].main;
      temperatureEl.innerText = `${Math.round(data.main.temp)} °C`;
      humidityEl.innerText = ` ${data.main.humidity} %`;
      windEl.innerText = `${data.wind.speed} m/s`;
    });
}

function onGeoError() {
  alert("지역 정보가 없으면 날씨 Api가 작동하지 않습니다.");
}

// Random image
const pictureUrl = "https://source.unsplash.com/random";
fetch(pictureUrl).then((response) => {
  const image = response.url;
  const imageEl = document.querySelector("#image");

  imageEl.src = image;
});

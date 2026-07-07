"use strict";

const landingTitle = document.querySelector(".landing__title");
const landingCoursesCount = document.querySelector("#landing-courses__count");
const landingUsersCount = document.querySelector("#landing-users__count");
const landingMinutesCount = document.querySelector("#landing-minutes__count");

window.addEventListener("load", () => {
  let landingText = "ما به هر قیمتی دوره آموزشی تولید نمی‌کنیم !";
  let landingIndex = 0;

  typeWriter(landingText, landingIndex);
  landingCounter(landingCoursesCount, 40);
  landingCounter(landingUsersCount, 650);
  landingCounter(landingMinutesCount, 1_320);
});

const typeWriter = (text, index) => {
  if (index < text.length) {
    landingTitle.innerHTML += text[index];
    index++;
  }

  setTimeout(() => {
    typeWriter(text, index);
  }, 60);
};

const landingCounter = (domElem, maxNumber) => {
  let landingIndex = 0;

  const interval = setInterval(() => {
    if (landingIndex === maxNumber) {
      clearInterval(interval);
    }

    domElem.innerHTML = landingIndex;
    landingIndex++;
  }, 0.2);
};

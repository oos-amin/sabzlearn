"use strict";

const register = () => {
  const name = document.querySelector("#name");
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const password = document.querySelector("#password");

  const newUserInfos = {
    name: name.value.trim(),
    username: username.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim(),
    password: password.value.trim(),
    confirmPassword: password.value.trim(),
  };

  fetch("http://localhost:4000/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserInfos),
  })
    .then((response) => {
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "ثبت نام با موفقیت انجام شد.",
        }).then(() => {
          location.href = "index.html";
        });
      } else if (response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "نام کاربری یا ایمیل قبلا استفاده شده",
        });
      }
    })
    .then((result) => console.log(result));
};

export { register };

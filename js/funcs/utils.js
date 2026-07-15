const showSwal = (icon, title, confirmButtonText, callback) => {
  Swal.fire({
    icon,
    title,
    confirmButtonText,
  }).then((result) => callback(result));
};

const saveIntoLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  return JSON.stringify(localStorage.getItem(key));
};

export { showSwal, saveIntoLocalStorage };

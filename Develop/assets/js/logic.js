// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const themeSwitcher = document.querySelector('#toggle');
const body = document.querySelector('body');

let mode = '.dark';

themeSwitcher.addEventListener('click', function () {
  if (mode === '.dark') {
    mode = '.light';
    body.setAttribute('class', 'light');
  } else {
    mode = '.dark';
    body.setAttribute('class', 'dark');
  }
}
);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function () {
  const data = JSON.parse(localStorage.getItem('blogData'));
  if (!data) {
    return [];
  }
  return data;
};


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function (newData) {
  const data = readLocalStorage();
  data.push(newData);
  localStorage.setItem('blogData', JSON.stringify(data));
};


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};


// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backBtn = document.querySelector('#back');

// TODO: Create a function that builds an element and appends it to the DOM
const buildElement = function (element, text, className, parentElement) {
  const el = document.createElement(element);
  el.textContent = text;
  el.setAttribute('class', className);
  parentElement.appendChild(el);
};

// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = function () {
  buildElement('h2', 'No posts to display', 'card', main);
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = function () {
  const data = readLocalStorage();
  if (data.length === 0) {
    noPosts();
    return;
  }

  data.forEach((post) => {
      const article = document.createElement('article');
      buildElement('h2', post.title, '', article);
      buildElement('blockquote', post.content, '', article);
      buildElement('p', post.username, '', article);
      main.appendChild(article);
    });
    
};

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener('click', function () {
  redirectPage('index.html');
});

// TODO: Button for clearing local storage
const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', function () {
  localStorage.clear();
  main.innerHTML = '';
  noPosts();
})


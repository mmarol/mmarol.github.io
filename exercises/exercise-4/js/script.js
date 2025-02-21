// look through your document and find an element with the ID "dark-mode"
document.querySelector('#dark-mode')
  // check if it is clicked
  .addEventListener("click", function () {
    // find the <body> element and add a CSS class called "dark"
    document.querySelector('body').classList.add('dark');
    // find the <body> element and remove a CSS class called "light"
    document.querySelector('body').classList.remove('light');
  });

// look through your document and find an element with the ID "light-mode"
document.querySelector('#light-mode')
  // check if it is clicked
  .addEventListener("click", function () {
    // find the <body> element and add a CSS class called "light"
    document.querySelector('body').classList.add('light');
    // find the <body> element and remove a CSS class called "dark"
    document.querySelector('body').classList.remove('dark');
  });
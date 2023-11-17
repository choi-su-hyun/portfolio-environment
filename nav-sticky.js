let stickyNav = document.querySelector('header');

const navigation = document.querySelector("nav ul");
const menu = document.querySelector(".mobile-menu");

document.addEventListener('scroll', stickyOn);

function stickyOn() {
  if (window.scrollY > 0) {
    stickyNav.classList.add('sticky-on');
  } else {
    stickyNav.classList.remove('sticky-on');

  }
}




menu.addEventListener("click", () => {
  // The navigation.children.length means the following :-
  // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.
  //   Yup That's all.
  navigation.style.setProperty("--childenNumber", navigation.children.length);

  //    Casually Toggling Classes to make them animate on click
  //   Regular stuff ;)
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});
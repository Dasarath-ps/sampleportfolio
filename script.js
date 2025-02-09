function scrollToElement(elementSelector, instance = 0) {
  //Select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  //Check if there are elements matching the selector and if the required
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: 'smooth' });
  }
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');

link1.addEventListener('click', () => {
  scrollToElement('.header', 0);
})
link2.addEventListener('click', () => {
  scrollToElement('.header', 1);
})
const link3 = document.getElementById('link3');
link3.addEventListener('click', () => {
  scrollToElement('.column');
})
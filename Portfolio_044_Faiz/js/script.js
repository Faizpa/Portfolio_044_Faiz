const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Programmer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 8000); //1s = 1000 milliseconds
};

textLoad();
setInterval(textLoad, 12000);

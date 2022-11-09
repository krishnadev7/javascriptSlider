const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let sliderNumber = 1;

// creating a div dynamically using number of images & creating a class named button for div & appending div element to bottom
for (let i = 0; i < images.length; i++) {         
  const div = document.createElement('div');     
  div.className = 'button';                      
  bottom.appendChild(div);                       
}

//selecting button using queryselector only works below appending div to bottom
const buttons = document.querySelectorAll('.button'); 
buttons[0].style.backgroundColor = 'white';

// for removing background color in button
const resetBg = () => [
  buttons.forEach((button, i) => {
    button.style.backgroundColor = 'transparent';
  }),
];

// for the animation of button color while changing images
buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    sliderNumber = i + 1;
    button.style.backgroundColor = 'white';
  });
});

// changing images to right while clicking right button image
right.addEventListener('click', () => {
  if (sliderNumber < images.length) {
    slider.style.transform = `translateX(-${sliderNumber * 800}px)`; // width of the image is 800px
    sliderNumber++;
    resetBg();
    buttons[sliderNumber - 1].style.backgroundColor = 'white';
  } else {
    slider.style.transform = `translateX(0px)`;
    sliderNumber = 1;
    resetBg();
    buttons[sliderNumber - 1].style.backgroundColor = 'white';
  }
});

// changing images to left while clicking left button image
left.addEventListener('click', () => {
  if (sliderNumber > 1) {
    slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
    sliderNumber--;
    resetBg();
    buttons[sliderNumber - 1].style.backgroundColor = 'white';
  } else {
    slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
    sliderNumber = images.length;
    resetBg();
    buttons[sliderNumber - 1].style.backgroundColor = 'white';
  }
});

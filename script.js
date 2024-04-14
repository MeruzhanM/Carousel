const images = document.querySelectorAll('img');
let counter = 0;
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');
btnRight.addEventListener('click', function() {
    images[counter].style.display = 'none'
    counter = (counter + 1) % images.length;
    images[counter].style.display = 'block';
})

btnLeft.addEventListener('click', function() {
    images[counter].style.display = 'none';
    counter = counter - 1 + images.length
    images[counter].style.display = 'block';
});

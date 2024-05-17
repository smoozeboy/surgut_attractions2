let offset = 0; // смещение
const sliderLine = document.querySelector('.slider-line');
let countclick = 0; // для кружков
dots = document.querySelectorAll('.dot');
document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset + 370;
    if (offset > 1110){
        offset = 0;
    }
    sliderLine.style.top = -offset + 'px';
});
document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset - 370;
    if (offset < 0){
        offset = 1110;
    }
    sliderLine.style.top = -offset + 'px';
});

// form slider

const backBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');
const formTrack = document.querySelector('.form');
const formSlides = Array.from(formTrack.children);
const progressBar = document.querySelector('.test');
const width = formTrack.getBoundingClientRect().width;
let currentSlide = formTrack.querySelector('.current-slide')

if(currentSlide.classList.contains('form-page--1')){
    backBtn.style.visibility = 'hidden';
}
else{
    backBtn
}


console.log(currentSlide)

function moveToSlide(formTrack, currentSlide, targetSlide) {

    formTrack.style.transform = `translateX(-${getComputedStyle(targetSlide).left})`;

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

nextBtn.addEventListener('click', function(e) { 

    let currentSlide = formTrack.querySelector('.current-slide')
    let nextSlide = currentSlide.nextElementSibling;

    moveToSlide(formTrack, currentSlide, nextSlide);
    
    changeProgressBar();

});

backBtn.addEventListener('click', function(e) {

    let currentSlide = formTrack.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;

    moveToSlide(formTrack, currentSlide, prevSlide);
    console.log(currentSlide.classList)

})

function changeProgressBar(){
    if(currentSlide.classList.contains('form-page--1')){
    progressBar.style.width = '17.5%';
    console.log(2)
};
if(currentSlide.classList.contains('form-page--2')){
    progressBar.style.width = '35%';
    console.log(3)
};
if(currentSlide.classList.contains('form-page--3')){
    progressBar.style.width = '52.5%';
    console.log(4)
};
if(currentSlide.classList.contains('form-page--4')){
    progressBar.style.width = '70%';
    console.log(5)
};
}

// nextBtn.addEventListener('click', moveSlide);




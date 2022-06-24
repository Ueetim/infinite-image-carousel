const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let slides = document.querySelectorAll('.slide');
let index = 1;

// clone first slide
const firstClone = slides[0].cloneNode(true);

// clone last slide
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

// get width of single slide
const slideWidth = slides[index].clientWidth;

// define sideshow. Since index is 1, first slide (clone of last is hidden)
slide.style.transform = `translateX(${-slideWidth * index}px)`;

// slideshow func
const startSlide = () => {
    slideId = setInterval(()=>{
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '.7s';
    }, 3000)
}

slide.addEventListener('transitionend', () => {
    slides = document.querySelectorAll('.slide');
    if(slides[index].id === firstClone.id) {
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
})

slideContainer.addEventListener('mouseenter', ()=>{
    clearInterval(slideId);
})

slideContainer.addEventListener('mouseleave', ()=>{
    startSlide();
})

nextBtn.addEventListener('click', moveToNextSide())

startSlide();

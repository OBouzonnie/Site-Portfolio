'use strict'

import imgCarousel from "./imgCarousel.js"

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// DOM
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

const bckgCarousel = document.querySelector('.slider img')
const btnCarousel = document.querySelectorAll('.slider button')

let index = 0

changeImage()

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// Previous/Next
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

function changeImage(){
    bckgCarousel.setAttribute('src', `${imgCarousel[index]}`)
}

function previous(){
    if(index === 0){
        index = imgCarousel.length - 1
        changeImage()
    }else{
        index --;
        changeImage()
    }
}

function next(){
    if(index === imgCarousel.length - 1){
        index = 0
        changeImage()       
    }else{
        index ++;
        changeImage()       
    }
}

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// Carousel
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

btnCarousel[0].addEventListener('click', () => {
    clearInterval(carouselAutomation)
    previous()
    carouselAutomation = setInterval(next, 5000)
})

btnCarousel[1].addEventListener('click', () => {
    clearInterval(carouselAutomation)
    next()
    carouselAutomation = setInterval(next, 5000)
})

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// Automatisation
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

let carouselAutomation = setInterval(next, 5000)
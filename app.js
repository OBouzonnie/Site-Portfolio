'use strict'

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// DOM
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

const allRea = document.querySelectorAll('.gallerie div')
const jeuRea = document.querySelectorAll('.jeu')
const appsRea = document.querySelectorAll('.apps')
const apiRea = document.querySelectorAll('.api')
const btnFiltre = document.querySelectorAll('.btn-filtre div')

const dateFooter = document.getElementById('dateActuelle')

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// Affichage de la date
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

const today = new Date()

let jour = today.getDate()
let mois = today.getMonth() + 1
let annee = today.getFullYear()

if(jour < 10){
    jour = '0' + jour
}
if(mois < 10){
    mois = '0' + mois
}

dateFooter.innerText = `${jour}/${mois}/${annee}`

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// Filtre créations
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

function showAll(){
    allRea.forEach( elem => {
        elem.classList.remove('hidden')
    })
}

function showGamesOnly(){
    allRea.forEach( elem => {
        elem.classList.add('hidden')
    })
    jeuRea.forEach( elem => {
        elem.classList.remove('hidden')
    })
}

function showApiOnly(){
    allRea.forEach( elem => {
        elem.classList.add('hidden')
    })
    apiRea.forEach( elem => {
        elem.classList.remove('hidden')
    }) 
}

function showAppsOnly(){
    allRea.forEach( elem => {
        elem.classList.add('hidden')
    })
    appsRea.forEach( elem => {
        elem.classList.remove('hidden')
    })
}


// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// Boutons filtre
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

btnFiltre[0].addEventListener('click', showAll)
btnFiltre[1].addEventListener('click', showGamesOnly)
btnFiltre[2].addEventListener('click', showAppsOnly)
btnFiltre[3].addEventListener('click', showApiOnly)

import { getAllCharacters, getCharacter } from "./js/Characters.js";

const $nameInput = document.querySelector('.name-search');
const $searchBtn = document.querySelector('.search-btn');

document.addEventListener('click', e => {
    if (e.target === $searchBtn) getCharacter($nameInput.value);;
})


// getCharacter("morty");


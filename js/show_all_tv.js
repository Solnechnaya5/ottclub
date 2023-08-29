// open inputs on the start page

let openArrow = document.querySelector('#show-all img');
let openButton = document.querySelector('#show-all');
let channels = document.querySelector('.channels-list__items');
let divHeight = document.querySelector('.channels');


let textButton = document.querySelector('#show-channels_btn-text');
openButton.addEventListener('click', function showAllTvs() {
    channels.classList.toggle('show-more');
    openArrow.classList.toggle('transform_arrow');
    divHeight.classList.toggle('higher')
    if (channels.classList.contains('show-more')) {
        textButton.textContent="Скрыть";
    }else{
        textButton.textContent ="Показать все";
    }
} )
'use strict';

const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-btn');
const titleInput = document.getElementById('title');
const idInput = document.getElementById('id');
const form = document.querySelector('.form');
const discountCheckbox = document.querySelector('.form__checkbox');
const discountInput = document/querySelector('.discount-gpoup__input');
const totalCost = document.getElementById('totalCost')


function openModal() {
    modal.classList.add('modal--active');
}

function closeModal() {
    modal.classList.remove('modal--active');
}
// Обработчик события для кнопки закрытия
closeButton.addEventListener('click', closeModal);


document.querySelector('.add-btn')addEventListener('click', openModal);
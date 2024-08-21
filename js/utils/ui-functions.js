'use strict';

export function cleanResult( divResult ) {
    divResult.innerHTML = '';
}

export function resetAllButtons(btn1, btn2, btn3) {
    btn1.textContent = 'Nombre de País';
    btn2.textContent = 'Nombre de Capital';
    btn3.textContent = 'Idioma';
}
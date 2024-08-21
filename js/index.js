"use strict";

import {
  initGetAllCountries,
  findCountryByNameOrder,
  findCountryByNameOrderReverse,
  findCapitalByNameOrderAscending,
  findCapitalByNameOrderDescending,
  findLangByNameOrder,
  findLangByNameOrderReverse,
} from "../js/utils/createResult.js";
import { cleanResult, resetAllButtons } from "./utils/ui-functions.js";

const resultSection = document.querySelector("#result");
const inputTxt = document.querySelector("#txtNameCountry");
const btnCountry = document.querySelector("#btnCountry");
const btnCapital = document.querySelector("#btnCapital");
const btnLang = document.querySelector("#btnLangs");
// const btnSts = document.querySelector("#btnSts");
const spanError = document.querySelector("#msjError");

initGetAllCountries(resultSection);

let inputValid = false;
let mode = 0;
let results = [];

inputTxt.addEventListener("keyup", (e) => {
  spanError.textContent = "";
  const val = e.target.value ? e.target.value : null;
  val ? cleanResult(resultSection) : initGetAllCountries(resultSection);
  if (val) {
    const pattern = /^[A-Za-z]*$/gm;
    const result = pattern.exec(val);
    results = [];
    if (!result) {
      spanError.textContent = "Ingrese valores válidos!!";
      spanError.style.color = "red";
      e.target.value = "";
      initGetAllCountries(resultSection);
      inputValid = false;
    } else {
      inputValid = true;
      mode = 0;
      resetButtons();
    }
  }
});

btnCountry.addEventListener("click", () => {
  if (!inputValid) return;
  initCallToActionBtn();

  if (mode === "1u") {
    mode = "1d";
    btnCountry.textContent = "Nombre de País ▼";
    results = findCountryByNameOrderReverse(inputTxt.value, resultSection);
    // if (results.length > 0) {
    //   // btnSts.hidden = false;
    // }
    return;
  } else {
    mode = "1u";
    btnCountry.textContent = "Nombre de País ▲";
    results = findCountryByNameOrder(inputTxt.value, resultSection);
    // if (results.length > 0) {
    //   // btnSts.hidden = false;
    // }
    return;
  }
});

btnCapital.addEventListener("click", () => {
  if (!inputValid) return;
  initCallToActionBtn();

  if (mode === "2u") {
    mode = "2d";
    btnCapital.textContent = "Nombre de Capital ▼";
    results = findCapitalByNameOrderDescending(inputTxt.value, resultSection);
    // if (results.length > 0) {
    //   // btnSts.hidden = false;
    // }
    return;
  } else {
    mode = "2u";
    btnCapital.textContent = "Nombre de Capital ▲";
    results = findCapitalByNameOrderAscending(inputTxt.value, resultSection);
    // if (results.length > 0) {
    //   // btnSts.hidden = false;
    // }
    return;
  }
});

btnLang.addEventListener("click", () => {
  if (!inputValid) return;
  initCallToActionBtn();

  if (mode === "3u") {
    mode = "3d";
    btnLang.textContent = "Idioma ▼";
    results = findLangByNameOrderReverse(inputTxt.value, resultSection);
    // if (results.length > 0) {
    //   // btnSts.hidden = false;
    // }
    return;
  } else {
    mode = "3u";
    btnLang.textContent = "Idioma ▲";
    results = findLangByNameOrder(inputTxt.value, resultSection);
    // if (results.length > 0) {
    //   // btnSts.hidden = false;
    // }
    return;
  }
});

function initCallToActionBtn() {
  if (!inputValid) return;
  resetButtons();
}

function resetButtons() {
  // btnSts.hidden = true;
  results = [];
  resetAllButtons(btnCountry, btnCapital, btnLang);
}

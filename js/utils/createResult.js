"use strict";

import {
  getCountriesDataFull,
  getCountryByNameOrder,
  getCountryByNameOrderReverse,
  getCapitalByNameOrder,
  getCapitalByNameOrderReverse,
  getLangByNameOrder,
  getLangByNameOrderReverse,
} from "../services/countryService.js";

function buildResponseUI(resp, divResult) {
  if (resp.length === 0) return;

  resp.forEach((c) => {
    const divCard = document.createElement("div");
    const imgFlag = document.createElement("img");
    const title = document.createElement("h4");
    const capitalP = document.createElement("p");
    const languagesP = document.createElement("p");
    const populationP = document.createElement("p");
    const regionP = document.createElement("p");
    const divWrapperInfo = document.createElement("div");

    imgFlag.src = c.flag;
    title.textContent = c.name.toUpperCase();
    capitalP.textContent = `Capital: ${c.capital}`;
    languagesP.textContent = `Idiomas: ${c.languages.toString()}`;
    populationP.textContent = `Población: ${new Intl.NumberFormat(
      "es-MX"
    ).format(c.population)} `;
    regionP.textContent = `Región: ${c.region.toUpperCase()}`;

    divWrapperInfo.classList.add("infoContainer");

    divCard.classList.add("card");
    title.classList.add("title-info");
    imgFlag.classList.add("img-flag");
    capitalP.classList.add("txt-info");
    languagesP.classList.add("txt-info");
    populationP.classList.add("txt-info");
    regionP.classList.add("txt-info");

    divCard.appendChild(imgFlag);
    divCard.appendChild(title);
    divWrapperInfo.appendChild(capitalP);
    divWrapperInfo.appendChild(languagesP);
    divWrapperInfo.appendChild(populationP);
    divWrapperInfo.appendChild(regionP);

    divCard.appendChild(divWrapperInfo);

    divResult.appendChild(divCard);
  });
}

// getLangByNameOrder, getLangByNameOrderReverse
export function findLangByNameOrder(name, divResult) {
  const resp = getLangByNameOrder(name);
  divResult.innerHTML = "";
  buildResponseUI(resp, divResult);
  return (resp.length === 0) ? [] : resp;
}

export function findLangByNameOrderReverse(name, divResult) {
  const resp = getLangByNameOrderReverse(name);
  divResult.innerHTML = "";
  buildResponseUI(resp, divResult);
  return (resp.length === 0) ? [] : resp;
}

export function findCapitalByNameOrderAscending(name, divResult) {
  const resp = getCapitalByNameOrder(name);
  divResult.innerHTML = "";
  buildResponseUI(resp, divResult);
  return (resp.length === 0) ? [] : resp;
}

export function findCapitalByNameOrderDescending(name, divResult) {
  const resp = getCapitalByNameOrderReverse(name);
  divResult.innerHTML = "";
  buildResponseUI(resp, divResult); 
  return (resp.length === 0) ? [] : resp; 
}

export function findCountryByNameOrder(name, divResult) {
  const resp = getCountryByNameOrder(name);
  divResult.innerHTML = "";
  buildResponseUI(resp, divResult);
  return (resp.length === 0) ? [] : resp;
}

export function findCountryByNameOrderReverse(name, divResult) {
  const resp = getCountryByNameOrderReverse(name);
  divResult.innerHTML = "";
  buildResponseUI(resp, divResult);
  return (resp.length === 0) ? [] : resp;
}

export function initGetAllCountries(divResult) {
  divResult.innerHTML = "";
  getCountriesDataFull().forEach((c) => {
    const divCard = document.createElement("div");
    const imgFlag = document.createElement("img");
    const title = document.createElement("h4");
    const capitalP = document.createElement("p");
    const languagesP = document.createElement("p");
    const populationP = document.createElement("p");
    const regionP = document.createElement("p");
    const divWrapperInfo = document.createElement("div");

    imgFlag.src = c.imgFlag;
    title.textContent = c.country.toUpperCase();
    capitalP.textContent = `Capital: ${c.capital}`;
    languagesP.textContent = `Idiomas: ${c.languages.toString()}`;
    populationP.textContent = `Población: ${new Intl.NumberFormat(
      "es-MX"
    ).format(c.population)} `;
    regionP.textContent = `Región: ${c.region.toUpperCase()}`;

    divWrapperInfo.classList.add("infoContainer");

    divCard.classList.add("card");
    title.classList.add("title-info");
    imgFlag.classList.add("img-flag");
    capitalP.classList.add("txt-info");
    languagesP.classList.add("txt-info");
    populationP.classList.add("txt-info");
    regionP.classList.add("txt-info");

    divCard.appendChild(imgFlag);
    divCard.appendChild(title);
    divWrapperInfo.appendChild(capitalP);
    divWrapperInfo.appendChild(languagesP);
    divWrapperInfo.appendChild(populationP);
    divWrapperInfo.appendChild(regionP);

    divCard.appendChild(divWrapperInfo);

    divResult.appendChild(divCard);
  });
}

import { countries_data } from "../../data/countries.js";

export function getCountriesDataFull() {
  const countries = countries_data
    .map((c) => {
      return {
        country: c.name,
        capital: c.capital,
        population: c.population,
        languages: c.languages,
        imgFlag: c.flag,
        region: c.region,
      };
    })
    .sort((a, b) => {
      return b.population - a.population;
    });

  return countries;
}

//#region name country

export function getCountryByNameOrder(name) {
  const countries = countries_data
    .filter((c) => c.name.toLowerCase().includes(name.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return countries ? countries : [];
}

export function getCountryByNameOrderReverse(name) {
  const countries = countries_data
    .filter((c) => c.name.toLowerCase().includes(name.toLowerCase()))
    .sort((a, b) => b.name.localeCompare(a.name));

  return countries ? countries : [];
}

//#endregion

//#region name capital
export function getCapitalByNameOrder(name) {
  const countries = countries_data
    .filter((c) => c.capital?.toLowerCase().includes(name.toLowerCase()))
    .sort((a, b) => a.capital.localeCompare(b.capital));

  return countries ? countries : [];
}

export function getCapitalByNameOrderReverse(name) {
  const countries = countries_data
    .filter((c) => c.capital?.toLowerCase().includes(name.toLowerCase()))
    .sort((a, b) => b.capital.localeCompare(a.capital));

  return countries ? countries : [];
}
//#endregion

//#region languages
export function getLangByNameOrder(name) {
  const countries = countries_data
    .filter((c) => c.languages?.toString().toLowerCase().includes(name.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return countries ? countries : [];
}
export function getLangByNameOrderReverse(name) {
  const countries = countries_data
    .filter((c) => c.languages?.toString().toLowerCase().includes(name.toLowerCase()))
    .sort((a, b) => b.name.localeCompare(a.name));

  return countries ? countries : [];
}
//#endregion

export function countriesSortedByPopulation() {
  const countries = countries_data
    .map((c) => {
      return {
        country: c.name,
        capital: c.capital,
        population: c.population,
      };
    })
    .filter((c) => {
      if (c.population && c.capital) return c;
    });
  //  .sort((a, b) => {
  //    return b.population - a.population;
  //  });

  //return countries;
  const world = countries.reduce((acum, c) => {
    return acum + c.population;
  }, 0);

  countries.push({
    country: "World Total",
    capital: "World",
    population: world,
  });

  countries.sort((a, b) => {
    return b.population - a.population;
  });

  return countries;
}

export function countriesSortedByArea() {
  const countries = countries_data
    .map((c) => {
      return {
        country: c.name,
        area: c.area,
      };
    })
    .filter((c) => {
      if (c.area) return c;
    })
    .sort((a, b) => {
      return b.area - a.area;
    });

  return countries;
}

export function mostSpokenLanguages() {
  const allLanguages = countries_data.reduce((acc, country) => {
    return acc.concat(country.languages);
  }, []);

  const languageCounts = allLanguages.reduce((acc, language) => {
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  }, {});

  const languageArray = Object.entries(languageCounts).map(
    ([language, count]) => {
      return { language, count };
    }
  );

  return languageArray.sort((a, b) => b.count - a.count);
}

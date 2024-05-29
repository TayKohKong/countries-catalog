import axios from "axios";

const resFields = "name,altSpellings,flags,cca2,cca3,idd,population,capital,region,area";

async function getAllCountry() {
    const url = `https://restcountries.com/v3.1/all?fields=${resFields}`;
    const max = 10;
    let retry = 1;
    while(retry <= max) {
      try {
        const { data, status } = await axios.get(url);
        if (status === 200) {
            return data;
          }
        return [];
      } catch (error) {
        if(retry === max) {
            return [{"error": `Api error`}];
        } else {
          retry++;
        }
      }
    }
}

export {
  getAllCountry
}
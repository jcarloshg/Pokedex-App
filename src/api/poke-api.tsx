import axios from "axios";

export const pokeApi = (url: string) => axios.create({
    baseURL: url
});

export const pokemonApi = (url: string) =>  axios.create({
    baseURL: url
});
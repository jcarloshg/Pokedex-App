import axios from "axios";

export const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export const pokemonApi = (url: string) =>  axios.create({
    baseURL: url
});
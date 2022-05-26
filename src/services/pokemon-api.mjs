import got from 'got';

const apiBaseURL = 'https://pokeapi.co/api/v2';

const gotInstance = got.extend({ prefixUrl: apiBaseURL });

export async function getPokemons(options = {}) {
  const res = await gotInstance.get('pokemon', options).json();

  return res;
}

export async function getPokemonById(id, options = {}) {
  const res = await gotInstance.get(`pokemon/${id}`, options).json();

  return res;
}

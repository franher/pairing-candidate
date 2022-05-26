import { getPokemons, getPokemonById } from '../services/pokemon-api.mjs';

export default async function pokemonsPlugin(fastify) {
  /**
   * ROUTES
   */
  fastify.get('/pokemons', async () => {
    const pokemons = await getPokemons();
    return pokemons;
  });

  fastify.get('/pokemons/:id', async (req) => {
    const pokemons = await getPokemonById(req.params.id);
    return pokemons;
  });
}

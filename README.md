# pairing-candidate

## Prerequisites

- Use Node.js >=18x LTS version.

## Contributing

- Install the project dependencies.

```console
npm i
```

- Run the API on your local environment.

```console
npm start
```

- Run the tests.

```console
npm test
```

## Link of interests

- [Fastify documentation](https://www.fastify.io/).
- [Got](https://www.npmjs.com/package/got).
- [PokéAPI](https://pokeapi.co/).
- [Tap documentation](https://node-tap.org/docs/getting-started/).

## Suggested improvements

1. Map the `results` array of the response of `GET /pokemons` as follow:

- Capitalizing the `name` of the pokémon: `bulbasur` -> `Bulbasur`.
- Adapt the `url` of the pokemon details to our own server URL. Just for the exercise purpose, you can use http://localhost:3000 as URL host: `https://pokeapi.co/api/v2/pokemon/1/` -> `http://localhost:3000/pokemons/1`.

2. Make a unit test of the previous mapping function.
3. Manage limit and offset query params on the `GET /pokemons` endpoint.
4. Creates a new GET API endpoint (to your election :wink:) which must integrates the - [PokéAPI](https://pokeapi.co/).

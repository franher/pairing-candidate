import fastify from 'fastify';
import helloWorldPlugin from './plugins/hello-world.mjs';
import pokemonsPlugin from './plugins/pokemons.mjs';

export default function build(opts = {}) {
  const app = fastify(opts);

  app.register(helloWorldPlugin);
  app.register(pokemonsPlugin);

  app.setErrorHandler((error, request, reply) => {
    request.log.error(error, 'Error happened:');

    reply
      .code(error.statusCode || 500)
      .type('application/json')
      .send({ error: 'Something wrong happened!' });
  });

  return app;
}

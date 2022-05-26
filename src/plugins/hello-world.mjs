export default async function helloWorldPlugin(fastify) {
  /**
   * ROUTES
   */
  fastify.get('/hello-world', async () => {
    return { hello: 'world' };
  });
}

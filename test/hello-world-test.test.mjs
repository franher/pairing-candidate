import { test } from 'tap';
import appBuilder from '../src/app.mjs';

test('GET /hello-world', async (t) => {
  const app = appBuilder();

  const response = await app.inject({
    method: 'GET',
    url: '/hello-world',
  });

  t.equal(response.statusCode, 200, 'returns a status code of 200');
});

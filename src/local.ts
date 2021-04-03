import { devServer } from './server';

devServer.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});

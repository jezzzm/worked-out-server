import { ApolloServer } from 'apollo-server';
import typeDefs from './type-defs';
import { routines } from './database';

const resolvers = {
  Query: {
    routines: () => routines,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});

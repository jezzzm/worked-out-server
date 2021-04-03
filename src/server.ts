import { ApolloServer } from 'apollo-server-lambda';
import { ApolloServer as DevServer } from 'apollo-server';
import typeDefs from './type-defs';
import RoutinesAPI from './data-sources/routine';

const resolvers = {
  Query: {
    routines: async (source, args, { dataSources }, state) =>
      dataSources.routinesApi.getAllRoutines(),

    routine: async (source, args, { dataSources }, state) => {
      const { id } = args;

      if (!id) {
        return null;
      }

      return dataSources.routinesApi.getRoutine(id) || null;
    },
  },
};

const options = {
  typeDefs,
  resolvers,
  dataSources: () => ({ routinesApi: new RoutinesAPI() }),
  context: () => ({}),
};

const server = new ApolloServer(options);

export const devServer = new DevServer(options);

export default server;

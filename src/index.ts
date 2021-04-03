import server from './server';

// lambda handler
const handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  return server.createHandler()(event, context, callback);
};

export default handler;

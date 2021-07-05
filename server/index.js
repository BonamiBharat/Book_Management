import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolver.js';
import typeDefs from './schema.js';

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log('Server is running on localhost:4000'));
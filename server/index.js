import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolver.js';
import typeDefs from './schema.js';

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/book', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log('Connection successfully')})
.catch((error)=>{console.log(error)});

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log('Server is running on localhost:4000'));
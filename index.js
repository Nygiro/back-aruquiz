require('dotenv').config();
const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const User = require('./resolvers/User')
const Quiz = require('./resolvers/Quiz')
const Question = require('./resolvers/Question')
const Report = require('./resolvers/Report')


const SchoolClass = require('./resolvers/SchoolClass')

const resolvers = {
  Mutation,
  Query,
  User,
  SchoolClass,
  Quiz,
  Question,
  Report
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))
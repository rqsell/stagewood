const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");
const { getUserId } = require("./utils");
const fs = require("fs");
const path = require("path");
const prisma = new PrismaClient();
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");

const resolvers = {
  Query,
  Mutation,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
  introspection: true,
  playground: true,
  context: ({ req }) => {
    // console.log(userId);
    // console.log("connect");
    return {
      ...req,
      prisma,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`🚀 Server CAT ready at ${url}`);
// });

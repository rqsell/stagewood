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
  context: ({ req }) => {
    console.log(req.headers, "panda");
    return {
      ...req,
      prisma,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
// const server = new ApolloServer({
//   typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
//   resolvers,
//   context: ({ req }) => {
//     return {
//       ...req,
//       prisma,
//       userId: req && req.headers.authorization ? getUserId(req) : null,
//     };
//   },
// });
// server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
// var corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, // <-- REQUIRED backend setting
// };
// server.use(cors(corsOptions));

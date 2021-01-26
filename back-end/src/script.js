// 1
const { PrismaClient } = require("@prisma/client");

// 2
const prisma = new PrismaClient();

//3
async function main() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  // enable cors
  var corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, // <-- REQUIRED backend setting
  };
  server.use(cors(corsOptions));
  //4
  main()
    .catch((e) => {
      throw e;
    })
    // 5
    .finally(async () => {
      await prisma.$disconnect();
    });
}

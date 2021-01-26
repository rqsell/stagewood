function users(parent, args, context, info) {
  const where = args.id;
  console.log("piglet");
  return context.prisma.user.findMany();
}

function getUser(parent, args, context, info) {
  const where = args.id;
  console.log("hamster", context.userId, "???");
  let user = context.prisma.user.findUnique({
    where: { id: context.userId },
  });
  console.log(user, " ?"); //, an);
  return user;
}
module.exports = {
  users,
  getUser,
};

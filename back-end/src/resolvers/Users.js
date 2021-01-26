async function users(parent, args, context) {
  await context.prisma.User.findUnique({ where: { id: parent.id } }).links();
}

module.exports = {
  users,
};

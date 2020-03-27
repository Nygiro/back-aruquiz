const answers = async (parent, args, context) => await context.prisma.question({ id: parent.id }).answers();
module.exports = {
  answers
}
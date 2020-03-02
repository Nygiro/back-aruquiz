const students = async (parent, args, context) => await context.prisma.schoolClass({ id: parent.id }).students();

module.exports = {
  students,
}
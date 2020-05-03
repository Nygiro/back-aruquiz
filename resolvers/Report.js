const student = async (parent, args, context) => await context.prisma.report({ id: parent.id }).student();
const schoolClass = async (parent, args, context) => await context.prisma.report({ id: parent.id }).schoolClass();
const quiz = async (parent, args, context) => await context.prisma.report({ id: parent.id }).quiz();
const question = async (parent, args, context) => await context.prisma.report({ id: parent.id }).question();
const answer = async (parent, args, context) => await context.prisma.report({ id: parent.id }).answer();


module.exports = {
  student,
  schoolClass,
  quiz,
  question,
  answer
}
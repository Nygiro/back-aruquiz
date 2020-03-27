const schoolSubject = async (parent, args, context) => await context.prisma.quiz({id: parent.id}).schoolSubject();
const questions = async (parent, args, context) => await context.prisma.quiz({id: parent.id}).questions()
module.exports = {
    schoolSubject,
    questions
}
const quizzes = async (parent, args, context) => await context.prisma.user({id: parent.id}).quizzes();
const schoolClasses = async (parent, args, context) => await context.prisma.user({id: parent.id}).schoolClasses();

module.exports = {
    quizzes,
    schoolClasses
}
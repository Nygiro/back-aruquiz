const quizzes = async (parent, args, context) => await context.prisma.user({id: parent.id}).quizzes();

module.exports = {
    quizzes
}
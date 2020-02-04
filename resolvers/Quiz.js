const schoolSubject = async (parent, args, context) => await context.prisma.quiz({id: parent.id}).schoolSubject();

module.exports = {
    schoolSubject
}
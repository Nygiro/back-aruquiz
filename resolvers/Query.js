const {getUserId} = require('../utils')

const users = async (root, args, context) => await context.prisma.users();
const user = async (root, args, context) => await context.prisma.user({id: args.userId});
const currentUser = async (root, args, context) => await context.prisma.user({id: getUserId(context)});

const quizzes = async (root, args, context) => {
    const where = args.filter ? {
        OR: [
            {name_contains: args.filter},
            // {schoolSubject_contains: args.filter},
        ],
    } : {}

    return await context.prisma.quizzes({
        where,
        skip: args.skip,
        first: args.first
    })
}

const quiz = async (root, args, context) => await context.prisma.quiz({id: args.quizId});


module.exports = {
    users,
    user,
    currentUser,
    quizzes,
    quiz,
}
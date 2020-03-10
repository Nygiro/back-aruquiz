const { getUserId } = require('../utils')

const users = async (root, args, context) => await context.prisma.users();
const user = async (root, args, context) => await context.prisma.user({ id: args.userId });
const currentUser = async (root, args, context) => await context.prisma.user({ id: getUserId(context) });

const quizzes = async (root, args, context) => {
    const where = args.filter ? {
        OR: [
            { name_contains: args.filter },
        ],
    } : {}

    return await context.prisma.quizzes({
        where,
        skip: args.skip,
        first: args.first
    })
}


const quizzesBySchoolClass = async (root, args, context) => {
    let where = {};
    if (args.filter) {
        where = {
            ...where,
            schoolSubject: {
                name_in: args.filter
            }
        }
    }
    if (args.forCurrentUser) {
        where = {
            ...where,
            createdBy: {
                id: getUserId(context)
            }
        }
    }

    if (args.search !== '') {
        where = {
            ...where,
            name_contains: args.search
        }
    }

    return await context.prisma.quizzes({
        where,
        skip: args.skip,
        first: args.first
    })
}

const quiz = async (root, args, context) => await context.prisma.quiz({ id: args.quizId });

const schoolSubjects = async (root, args, context) => await context.prisma.schoolSubjects();

const schoolClass = async (root, args, context) => await context.prisma.schoolClass({ id: args.schoolClassId });


module.exports = {
    users,
    user,
    currentUser,
    quizzes,
    quizzesBySchoolClass,
    quiz,
    schoolSubjects,
    schoolClass
}
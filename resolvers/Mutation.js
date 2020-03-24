
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils')

const signup = async (parent, args, context, info) => {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return {
    token,
    user,
  }
}

const login = async (parent, args, context, info) => {
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error('No such user found');
  }
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return {
    token,
    user,
  }
}

const createQuiz = async (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.prisma.createQuiz({
    name: args.name,
    schoolSubject: {
      connect: { id: args.schoolSubjectId },
    },
    createdBy: { connect: { id: userId } },
  })
}

const createSchoolClass = async (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.prisma.createSchoolClass({
    name: args.name,
    teacher: {
      connect: { id: userId },
    }
  })
}

const deleteSchoolClass = async (parent, args, context, info) => {
  return context.prisma.deleteSchoolClass({
    id: args.schoolClassId
  })
};


const createStudent = async (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.prisma.createStudent({
    name: args.name,
    markerId: args.markerId,
    schoolClass: {
      connect: { id: args.schoolClassId },
    },
  })
}

const updateStudent = async (parent, args, context, info) => {
  return context.prisma.updateStudent({
    data: {
      name: args.name,
      markerId: args.markerId
    },
    where: {
      id: args.studentId
    }
  })
};

const deleteStudent = async (parent, args, context, info) => {
  return context.prisma.deleteStudent({
    id: args.studentId
  })
};

const upsertQuestion = async (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.prisma.upsertQuestion({
    where: {
      id: args.questionId
    },
    update: {
      label: args.label,
    },
    create: {
      label: args.label,
      quiz: {
        connect: { id: args.quizId },
      },
    },
  })
}

const upsertAnswer = async (parent, args, context, info) => {
  const userId = getUserId(context)
  return context.prisma.upsertAnswer({
    where: {
      id: args.answerId,
    },
    update: {
      label: args.label,
      isRight: args.isRight,
    },
    create: {
      label: args.label,
      isRight: args.isRight,
      question: {
        connect: { id: args.questionId },
      },
    },
  })
}

const updateAnswerIsRightField = async (parent, args, context, info) => {
  // const userId = getUserId(context)
  return context.prisma.updateAnswer({
    data: {
      isRight: args.isRight,
    },
    where: {
      id: args.answerId
    }
  })
}

module.exports = {
  signup,
  login,
  createQuiz,
  createSchoolClass,
  deleteSchoolClass,
  createStudent,
  updateStudent,
  deleteStudent,
  upsertQuestion,
  upsertAnswer,
  updateAnswerIsRightField
}
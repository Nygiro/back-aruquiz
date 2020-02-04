"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "SchoolClass",
    embedded: false
  },
  {
    name: "Student",
    embedded: false
  },
  {
    name: "Marker",
    embedded: false
  },
  {
    name: "SchoolSubject",
    embedded: false
  },
  {
    name: "Quiz",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "Answer",
    embedded: false
  },
  {
    name: "Report",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://back-aruquiz-806c7eb587.herokuapp.com/back-aruquiz/dev`
});
exports.prisma = new exports.Prisma();

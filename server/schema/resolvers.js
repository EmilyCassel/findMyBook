const { User, Note } = require('../models')
const { sign, verify } = require('jsonwebtoken')
const { GraphQLError } = require('graphql')

function createToken(user_id) {
  const token = sign({ user_id }, process.env.JWT_SECRET)

  return token
}

const resolvers = {
  Query: {
    async getAllNotes() {
      const notes = await Note.find()

      return notes
    },
   
  },

 // Mutation: {}
}

module.exports = resolvers
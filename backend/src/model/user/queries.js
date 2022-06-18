const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat } = require('graphql')
const type = require('./type')
const Moyen = require('./type_moyen')
const mutation = require('./mutations')
const User = require("./user")

// Defines the queries
module.exports = {
    users: {
        type: new GraphQLList(type),
        args: {
          
        },
        resolve: User.findMatching.bind(User)
    },
    user: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: User.getByID.bind(User)
    },
    average: {
        type : Moyen,
        args: {
            
        },
        resolve:  User.getcountNote.bind(User)
    }
}
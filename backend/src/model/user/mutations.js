const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
const User = require('./user')

// Defines the mutations
module.exports = {
    addUser: {
        type,
        args: {
            email:   { type: new GraphQLNonNull(GraphQLString) },
            last_name:  { type: new GraphQLNonNull(GraphQLString) },
            first_name:  { type: new GraphQLNonNull(GraphQLString) },
            adresse:  { type: GraphQLString },
            note:  { type: new GraphQLNonNull(GraphQLFloat) },
        },
        resolve: User.createEntry.bind(User)
    },
    updateUser: {
        type,
        args: {
            id:     { type: GraphQLID },
            last_name:  { type: GraphQLString },
            first_name:  { type: GraphQLString},
            adresse:  { type: GraphQLString },
            note:  { type: new GraphQLNonNull(GraphQLFloat) },
        },
        resolve: User.updateEntry.bind(User)
    }
}

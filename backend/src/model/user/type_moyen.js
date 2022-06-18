let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Moyen',
    description: 'A moyen',
    fields: {
        notesum: {
            type: GraphQLFloat
        }
    }
})
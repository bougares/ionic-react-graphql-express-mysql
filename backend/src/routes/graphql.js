const graphqlHTTP = require('express-graphql').graphqlHTTP;
const router = require('express').Router()
const util = require('../util/util')
const schema = require('../schema/index')

router.get('/', graphqlHTTP({
    schema,
    graphiql: !util.isProduction()
}))

router.post('/', graphqlHTTP({
    schema,
    graphiql: true
}))

module.exports = router

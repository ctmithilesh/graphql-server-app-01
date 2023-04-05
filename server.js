const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP

const { 
        GraphQLSchema, 
        GraphQLObjectType,
        GraphQLString,
} = require('graphql')

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld', // no whitespaces
        fields:()=>({
            message:{ 
                type: GraphQLString,
                resolve: ()=> 'HelloWorld'
            }
        })
    })
})

const app = express()   


app.use('/',expressGraphQL({
    schema:schema,
    graphiql: true,

}))

const PORT = 8080 || process.env.PORT
app.listen(PORT,()=> console.log('Server Running'))




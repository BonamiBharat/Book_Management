const schema = `
type Query{
    getBooks(id: ID!): [Books]
    getBooksAll: [Books]
}

type Books {
    id: String
    name: String
    author: String
    genre: String
    ISBN: String
}

input BooksInput{
    id: String
    name: String
    author: String
    genre: String
    ISBN: String
}

type Login{
    status: Boolean
    token: String
}

input LoginInput {
    userid: String
    pwd: String
}

input userInput {
    name: String
    userid: String
    pwd: String
    description: String
}

type User {
    name: String
    userid: String
    pwd: String
    description: String
}

type Mutation {
    createBooks(booData: BooksInput) : Books
    loginCheck(logindata: LoginInput) : Login
    createUser(userdata: userInput): User
}`;

export default schema;

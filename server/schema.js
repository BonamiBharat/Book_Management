const schema = `
type Query{
    getBooks: [Books]
    getBooksAll: [Books]
}

type Books {
    name: String
    author: String
    genre: String
    isbn: String
    status: Boolean
}

input BooksInput{

    name: String
    author: String
    genre: String
    isbn: String
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
 status: Boolean
}

type Mutation {
    createBooks(booData: BooksInput) : Books
    loginCheck(logindata: LoginInput) : Login
    createUser(userdata: userInput): User
}`;

export default schema;

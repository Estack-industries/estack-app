
# Back-end Readme
## MySQL setup
Go to [MySQL setup doc](./docs/mysql/readme.md)
## Setup backend
```
npm start
```
If there exists some dependency not found, `npm install [dependency]` will help.
## SignIn System
Go to [user.js](routes/users.js)
### API
1. `get /login` returns users stored in session. 
   1. Frontend doesn't support session management.
2. `post /Auth` checks if users already exist
   1. Input: users' emails
   2. check whether emails are already inserted in the database
   3. Output: message `error, User already exists, [object: user info]`
3. `post /register` inserts a new account email and hashed password into the database
4. `post/login` checks if login details match existing users in the database
   1. Input: email, password
   2. check whether these match an existing user
   3. Output: message `Wrong Password, Email Address not found, logged in`
### TODO
`get /login` requires frontend session management.
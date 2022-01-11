
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

---

`post /account` Retrieves information from an account.

\- Message me, Kyle Smith, if you have any questions.

Response and request properties could be renamed to fit your naming scheme. 

Please note that I prefer this to be multiple requests, not one big HTTP request.

Request body
```ts
{
   uid: string,
   token: string
} // Or however you authentificate a user on the backend, idk.
``` 

Response body
```ts
{
   picture: string | Buffer | Image,
   favoritedHomes: {
      image: string | Buffer | Image,
      address: string,
      price: number,
      beds: number,
      baths: number,
      sqft: number,
      new: boolean,
   }[],
   schedules: { // Anything on schedule: payments, tour, etc.
      name: string,
      date: string | number | Date,
      cost: number,
   }[],
   cards: {
      balance: number,
      profit: number,
      payment: { // Payments to properties: rent, utilities, etc.
         date: string | number | Date,
         amount: number,
         address: string,
      }[]
   }[],
   pinnedAddresses: { // Homes the user has pinned to their homepage, could be where the user lives.
      image: string | Buffer | Image,
      address: string,
      cost: number,
      costInterval: number, // Time in milliseconds.
   }[],
   rent: { // History of rent payments every month.
      date: string | number | Date,
      amount: number,
   }[],
}
```
---
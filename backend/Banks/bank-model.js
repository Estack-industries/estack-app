const db = require('../data/dbConfig')
const bcrypt = require('bcryptjs') 

function list() {
    return db("banks")
    .select("bankLogo", "bankName", "loanAPR")
}
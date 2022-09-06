const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
  const hashGenerator = (password, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
    })
  }

  const create = (req, res) => {
    hashGenerator(req.body.password, hash => {
      const password = hash 
      console.log(req.body)
      app.db('users').insert({
        name: req.body.name,
        email: req.body.email,
        password: password
      }).then(_ => res.status(204).send())
        .catch(err => res.status(500).json(err))
    })
  }

  return { create }
}
const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    // res.render('/users', { title: "Users List" })
    res.send("Users Page")
})


module.exports = router
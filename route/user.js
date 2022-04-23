const express = require("express");
const router = express.Router()
const {getUser,getUsers,postUser,putUser,deleteUser} = require('../controller/function')



router.get('/',getUsers)
router.get('/:id',getUser)
router.post('/',postUser)
router.put('/:id',putUser)
router.delete('/:id',deleteUser)


module.exports = router
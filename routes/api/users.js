const express = require('express');

const router = express.Router();

//@route     post api/users
//@desc      register user
//@access    Public
router.post('/', (req, res) => {
	console.log(req.body);

	res.send('Users route');
});

module.exports = router;

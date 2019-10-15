var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* 系统登录接口 */
router.post('/system/login',function (req , res, next) {
	var param = {
		userName : req.body.userName,
		password : req.body.password
	};
	console.log(param);
	res.json({
		status : '0',
		msg : '',
		result : {

		}
	});
});

module.exports = router;

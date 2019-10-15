
// 引入Mongoose
const mongoose = require('mongoose');

// 链接数据库
mongoose.connect('mongodb://127.0.0.1:27017/tiansuo');		// 一般默认如此，要是有账号密码就另说
// 下面是连接数据库的三种情况（监听）
mongoose.connection.on("connected",function () {	
	console.log("MongoDB connected success");
});
mongoose.connection.on("error",function () {
	console.log("MongoDB connected fail");
});
mongoose.connection.on("disconnected",function () {
	console.log("MongoDB connected disconnected");
});
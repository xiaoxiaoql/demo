//var module = require("./module/module.js");
//console.log(module)
//引入http创建服务器
var http = require("http");
//console.log(http)
//创建服务器
http.createServer(function(request,response){
	//$_GET[]/$_POST[]
	// /?name=ABC&title=ASD
	// name=ABC&title=ASD
	response.setHeader('Access-Control-Allow-Origin','*');
	
	response.end(JSON.stringify(123))
}).listen(12345)
console.log('123')
//0~65536
//module.obj.skill()
/*setInterval(function() {
	console.log(a);
	a++
}, 1000)*/
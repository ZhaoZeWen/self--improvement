// 由JavaScript本身定义的内置错误类“伪代码”
class Error{
    constructor(message) {
        this.message = message;
        this.name = "Error";  //不同内置错误类别的名称
        //非标准，但大多数环境支持它
        this.stack = <nested calls>;  
    }
}

class ValidationError extends Error{
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function test(){
    throw new ValidationError("Whoops!");
}

try {
    test();
}
catch

const http = require('http')
class Application{
    /**
     * 使用中间件
     */
    use(fn){
        //存下传进来的函数
        this.fn = fn 
    }

    /**
     * 监听端口号
     * @param  {...any} args 
     */
    listen(...args){
       const server = http.createServer(this.callback)
       console.log('listen in koa ')
       server.listen(...args)
    }

    // callback(){
    // //this 指向不对
    //     console.log('callback1')
    //     console.log(this) //Server
    // }


    // callback() {
    //     //但是 server 里面要使用bind   const server = http.createServer(this.callback.bind(this))
    //     console.log('callback use bind')
    //     console.log(this) //Application  保证this正确指向
    // }

    // callback(){
    //     return ()=>{
    //         console.log('use hoc fucntion  to keep this correct')
    //         console.log(this)//Application {}
    //     }
    // }

    callback = (req, res )=>{
        console.log('callback arrow function')
        console.log(this) //Application  保证this正确指向
        //执行传递过来的fn 并且将需要的参数 req res 传递过去
        this.fn(req,res)
    }
}

module.exports = Application
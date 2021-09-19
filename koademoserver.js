const Koa = require('koa')
const app = new Koa()


app.use( ctx =>{
    ctx.body = 'hello koa'
})

app.listen(2021, ()=>{
    console.log('server is running on port 2021')
})
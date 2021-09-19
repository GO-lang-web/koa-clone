const MyKoa = require('./koa')
console.log(new MyKoa().use)//[Function: use]
console.log(new MyKoa().listen)//[Function: listen]
const app = new MyKoa()


app.use( (req,res) =>{
  res.end('ok')
})

app.listen(2021, ()=>{
    console.log('server is running on port 2021')
})
const app = require('express')()
app.get('/home', (req,res)=> {
  res.end("HELLO THERE")  
})
app.post('/api/uploadfile', (req, res)=> {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log("Successful")
  })
app.listen(5000, ()=> {
    console.log("Express app listening")
})
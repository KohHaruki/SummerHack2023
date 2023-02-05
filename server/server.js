const app = require('express')()

// Code for python
const { spawn } = require('child_process');
const fs = require('fs');


app.get('/home', (req,res)=> {
  res.end("HELLO THERE")  
})
app.post('/api/uploadfile', (req, res)=> {
  console.log("API Reached")
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // TEST
  const image = req.body;

  const pathToImage = '../scanner/image_to_scan/image.png';
  // console.log(typeof(image))
  // fs.writeFileSync(pathToImage, image);
  console.log("API Reached 2")

  const pythonProcess = spawn('python3', ["../scanner/pipeline.py", pathToImage]);
  pythonProcess.stdout.on('data', (data) => {
    // Handle the data returned from the Python function
    const result = JSON.parse(data.toString());
    res.json(result);
  });
  })

app.listen(5000, ()=> {
    console.log("Express app listening")
})
const app = require('express')()

// Code for python
const { spawn } = require('child_process');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/home', (req,res)=> {
  res.end("HELLO THERE")  
})
app.post('/api/uploadfile', (req, res)=> {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // TEST
  const formData = req.body;
  //const image = formData.get(`file_0`); EXTRA
  console.log(req)

  const pathToImage = '../scanner/image_to_scan/image.png';
  console.log(typeof(image))
  // fs.writeFileSync(pathToImage, image);
  
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
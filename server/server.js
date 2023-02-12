const app = require('express')()
const cors = require('cors')

const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../scanner/image_to_scan")
  },
  filename: (req, file, cb) => {
    cb(null, "image.png")
  }
})

const upload = multer({ storage: fileStorageEngine})

// Code for python
const { spawn } = require('child_process');
const bodyParser = require('body-parser');

app.use(cors({origin:"http://localhost:5173"}));

app.get('/home', (req,res)=> {
  res.end("HELLO THERE")  
})

app.post('/api/uploadfile', upload.single('image'), (req, res)=> {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT POST")
  console.log("post request loading")
  const pythonPath = "../scanner/pipeline.py"
  const cwd = "../scanner";
  const pythonProcess = spawn('python3', [pythonPath], { cwd });
  pythonProcess.stdout.on('data', (data) => {
    // Handle the data returned from the Python function
    const result = JSON.parse(data.toString());
    res.json(result);
  });
})

app.listen(8080, ()=> {
    console.log("Express app listening")
})
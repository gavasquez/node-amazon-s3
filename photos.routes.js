const { Router } = require('express');
//const { uploadFile, readFile } = require( './s3' );

const router = Router();


router.get('/', (req, res) => {
  res.send('Welcom to my API');
});

router.post('/upload',  async (req, res) => {
  
  console.log(req.files)
  //const result = await uploadFile(req.files['photo']);
  return res.send('File uploaded');
});

router.get('/archivo/:fileName', async (req, res) => {
  //const result = await readFile();
  const fileName = req.params.fileName;
  console.log({fileName})
  return res.send('GetFile');
});


module.exports = router;


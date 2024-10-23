const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const photosRoutes = require('./photos.routes');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : './archivos'
}));

app.use(photosRoutes);

app.use(express.static('images'));


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
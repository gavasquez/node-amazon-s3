require('dotenv').config();
const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');

const AWS_PUBLIC_KEY = process.env.AWS_PUBLIC_KEY;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;

const client = new S3Client({ region: AWS_BUCKET_REGION, credentials: { accessKeyId: AWS_PUBLIC_KEY, secretAccessKey: AWS_SECRET_KEY } });

async function uploadFile(file) {

  const stream = fs.createReadStream(file.tempFilePath);

  const uploadParans = {
    Bucket: AWS_BUCKET_NAME, // name of the bucket
    Key: file.name, // name of the file
    Body: stream, // file content
  }
  const command = new PutObjectCommand(uploadParans);
  return await client.send(command);
}

async function readFile(file){
  conts command = new GetObjectCommand({
    Bucket: AWS_BUCKET_NAME, // name of the bucket
    Key: file, // name of the file
  });

  const result =await client.send(command)

  result.Body.pipe(fs.createWriteStream('./images/newImage.png'));
}

module.exports = { uploadFile, readFile };
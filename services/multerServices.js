const multer = require('multer');
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const s3 = new aws.S3();

process.env.NODE_ENV == 'production' ? aws.config.update({
    secretAccessKey: process.env.S3_ACCESS_SECRET,
    accessKeyId: process.env.S3_ACCESS_KEY,
    region: "ap-south-1",
}) : '';

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        try {
            cb(null, 'public');
        } catch (error) {
            console.log('DESTINATION', error);
        }
    },
    filename: (req, file, cb) => {
        try {
            cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, ''))
        } catch (error) {
            console.log('FILENAME:-', error)
        }
    }
});

const uploadToS3 = process.env.NODE_ENV == 'production' ? multer({
    fileFilter,
    storage: multerS3({
      acl: "public-read",
      s3,
      bucket: process.env.BUCKET_NAME,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, ''));
      },
    }),
}).single('image') : '';

const upload = multer({ storage: storage }).single('image');

process.env.NODE_ENV == 'production' ? module.exports = { upload, uploadToS3 } : module.exports = { upload };
// module.exports = uploadToS3;
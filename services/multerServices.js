const multer = require('multer');

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
})

const upload = multer({ storage: storage }).single('image');

module.exports = upload;
const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        //file: tipo do arquivo, extensão, tamanho
        //callback: é chamada assim que o nome do arquivo estiver pronto
        filename: (req, file, callback) => {
            //extensão do arquivo
            const ext = path.extname(file.originalname);
            //nome original do arquivo
            const name = path.basename(file.originalname, ext);
            callback(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};
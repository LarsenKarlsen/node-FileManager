import fs from 'fs';
import path from 'path';

import getAbsPath from './getAbsPath.js';
import getFileName from './getFileName.js'

const copyFile = async(pathFrom, pathTo, currentdir ) => {
    try {
        const absPathFrom = getAbsPath(pathFrom, currentdir);
        const fileName = getFileName(absPathFrom);
        const absPathTo = path.join(getAbsPath(pathTo, currentdir), fileName);
        
        const readStream = fs.createReadStream(absPathFrom);
        const writableStream = fs.createWriteStream(absPathTo);

        readStream.pipe(writableStream);
    } catch(err) {
        console.log('Operation Failed');
        console.log(err);
    }
};

export default copyFile;
import fs from 'fs';
import path from 'path';

import getAbsPath from './getAbsPath.js';

const rename = async (pathTo, currentdir, newFileName) => {
    const absPath = getAbsPath(pathTo, currentdir);
    const renameFilePath = path.join(absPath.split('/').slice(0, -1).join('/'), newFileName);

    if (absPath === renameFilePath) {
        console.log('Operation Failed');
        console.log('File had the same name.');
    };

    await fs.promises.rename(absPath, renameFilePath)
    .catch((err)=>{
        console.log('Operation Failed');
        console.log(err);
    });
}

export default rename;
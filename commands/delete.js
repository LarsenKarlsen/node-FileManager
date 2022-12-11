import fs from 'fs';

import getAbsPath from './getAbsPath.js';

const deleteFile = async (pathTo, currentdir) => {
    const delFilePath = getAbsPath(pathTo, currentdir);

    await fs.promises.unlink(delFilePath)
    .catch((err)=>{
        console.log('Operation Failed');
        console.log(err);
    });
}

export default deleteFile;
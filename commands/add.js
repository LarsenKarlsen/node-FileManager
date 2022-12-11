import fs from 'fs';

import getAbsPath from "./getAbsPath.js";


const add = async(pathTo, currentdir) => {
    const absFilePath = getAbsPath(pathTo, currentdir);

    await fs.promises.writeFile(absFilePath, '')
    .catch((err)=>{
        console.log('Operation failed');
        console.log(err)
    })
}

export default add;
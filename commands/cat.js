import getAbsPath from "./getAbsPath.js";
import fs from 'fs';

const cat = async (pathTo, currentdir) => {
    const filePath = getAbsPath(pathTo, currentdir);

    const data = await fs.promises.readFile(filePath, 'utf-8')
    .then((data)=>{
        return data;
    })
    .catch((err)=>{
        console.log('Operation failed');
        console.log(err);
    })

    console.log(data)
};

export default cat
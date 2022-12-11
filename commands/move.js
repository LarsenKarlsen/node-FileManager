import deleteFile from "./delete.js";
import copyFile from "./copy.js";

const moveFile = async(pathFrom, pathTo, currentdir) => {
    await copyFile(pathFrom, pathTo, currentdir)
    .then(async()=>{
        await deleteFile(pathFrom, currentdir);
    })
    .catch((err)=>{
        console.log('Operation failed');
        console.log(err);
    })
    
};

export default moveFile;
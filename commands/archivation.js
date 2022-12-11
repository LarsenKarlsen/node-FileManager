import getAbsPath from "./getAbsPath.js";
import path from 'path';
import fs from 'fs';
import zlib from "zlib";

export const compressBrotli = async(pathFrom, pathTo, currentdir) => {
    try {
        const absPathFrom = getAbsPath(pathFrom, currentdir);
        const filename = absPathFrom.split('/').slice(-1)[0] + '.br';
        const absPathTo = path.join(getAbsPath(pathTo, currentdir), filename);

        const readStream = fs.createReadStream(absPathFrom);
        const writableStream = fs.createWriteStream(absPathTo);

        const brotli = zlib.createBrotliCompress();

        readStream.pipe(brotli).pipe(writableStream);
    } catch(err){
        console.log('Operation failed');
        console.log(err);
    }
}

export const decompressBrotli = async(pathFrom, pathTo, currentdir) => {
    try {
        const absPathFrom = getAbsPath(pathFrom, currentdir);
        const filename = absPathFrom.split('/').slice(-1)[0].split('.').slice(0,-1).join('.');
        const absPathTo = path.join(getAbsPath(pathTo, currentdir), filename);
        const readStream = fs.createReadStream(absPathFrom);
        const writableStream = fs.createWriteStream(absPathTo);

        const brotli = zlib.createBrotliDecompress();

        readStream.pipe(brotli).pipe(writableStream);
    } catch(err){
        console.log('Operation failed');
        console.log(err);
    }
};
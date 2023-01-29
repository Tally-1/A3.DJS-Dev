// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import path from "path";
import fs from "fs";

export default
function removeCachedFiles(){
    const mapsFolder = path.join(__dirname,"..","..","..","..","..","..", "maps");
    
    const mapFolders = fs.readdirSync(mapsFolder);
    // console.dir(mapFolders)
    
    let filesRemoved = 0;
  
    for (const folder of mapFolders) {
        const cacheFolder = path.join(mapsFolder, folder, "cache");
        const cacheFolders = fs.readdirSync(cacheFolder);
        
        for (const fldr of cacheFolders) {
           const pth = path.join(cacheFolder, fldr);
           filesRemoved = deleteFilesInFolder(pth, filesRemoved)
        };
    };
  
    if(filesRemoved>0){console.log("Removed "+filesRemoved+" cached file(s)");};
    // process.exit()
    
  };
  
export
function deleteFilesInFolder(folder:string, filesRemoved:number) {
    const files = fs.readdirSync(folder);
    for (const file of files) {
        const dir = path.join(".",folder, file);
        fs.unlinkSync(dir);
        filesRemoved++
    };
    return filesRemoved;
  };
// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import path from "path";
import fs from "fs";

export default
function removeCachedFiles(){
    const mapsFolder = path.join(__dirname,"..","..","..","..","..","..", "maps");
    const mapFolders = fs.readdirSync(mapsFolder);
    let filesRemoved = 0;
  
    for (const folder of mapFolders) {
        const cacheFolder = path.join(".", "maps", folder, "cache");
        const cacheFolders = fs.readdirSync(cacheFolder);
        
        for (const fldr of cacheFolders) {
           const pth = path.join(".", "maps", folder, "cache", fldr);
           filesRemoved = deleteFilesInFolder(pth, filesRemoved)
        };
    };
  
    if(filesRemoved>0){console.log("Removed "+filesRemoved+" cached file(s)");};
    
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
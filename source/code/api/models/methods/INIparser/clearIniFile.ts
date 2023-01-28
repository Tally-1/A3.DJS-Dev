// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import path from "path";
import fs from "fs";


export default
function clearIniFile(folder:string, fileName:string) {
    const header = "["+fileName+"]";
    const completeFileName = fileName+".ini";
    const filePath = path.join(folder, completeFileName);
    fs.writeFileSync(filePath, header);
}
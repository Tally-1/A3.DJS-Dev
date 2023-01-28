// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import path from "path";
import fs from "fs";


export default
function clearIniFile(folder:string, fileName:string) {
    const header = "["+fileName+"]";
    const completeFileName = fileName+".ini";
    const filePath = path.join(folder, completeFileName);
    fs.writeFileSync(filePath, header);
}
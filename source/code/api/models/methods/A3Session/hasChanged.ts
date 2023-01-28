// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../classes/A3Session";

export default
function hasChanged(this:A3session, updateOnchange?:boolean){
    const { sessionName } = this.parseSessionFile();
    const changed = sessionName !== this.sessionName;
    
    if(changed && updateOnchange){
        this.update();
    };

    return changed;
};
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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
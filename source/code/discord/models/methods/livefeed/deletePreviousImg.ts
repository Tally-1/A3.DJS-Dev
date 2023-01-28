// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import LiveFeed from "../../classes/LiveFeed";

export default
async function deletePreviousImg(this:LiveFeed){
    const msg = this.previousImageMsg;
    if(!msg){return;};
    if(!msg.deletable){return;};
    try{await msg.delete()}catch(e){};
};
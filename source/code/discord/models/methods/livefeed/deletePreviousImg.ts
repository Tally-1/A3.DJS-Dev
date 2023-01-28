// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import LiveFeed from "../../classes/LiveFeed";

export default
async function deletePreviousImg(this:LiveFeed){
    const msg = this.previousImageMsg;
    if(!msg){return;};
    if(!msg.deletable){return;};
    try{await msg.delete()}catch(e){};
};
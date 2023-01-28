// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import LiveEmbed from "../../classes/liveEmbed";
import LiveFeed from "../../classes/LiveFeed";

export default
async function initTransmission(this:LiveFeed){
    await this.cleanUp(this.liveChannel);
    await this.cleanUp(this.imageChannel);
    
    
    const imageUrl = await this.sendSnapImg(false);

    if(imageUrl){

        this.imageUrl = imageUrl;
        const embed = new LiveEmbed(this);//buildLiveEmbed(this);
        this.liveMsgId = (await this.liveChannel.send({ embeds: [embed] })).id;
        
    };
}
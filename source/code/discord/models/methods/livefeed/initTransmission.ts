// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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
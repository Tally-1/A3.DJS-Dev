// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import Snapshot from "../../../../api/models/classes/snapshot";
import LiveEmbed from "../../classes/liveEmbed";
import LiveFeed from "../../classes/LiveFeed";
import { setTimeout } from 'node:timers/promises'

export default
async function updateTransmission(this:LiveFeed ,snapshot:Snapshot){

    this.snapshot = snapshot;

    if(!this.liveMsgId){return false};

    const liveMessage = await this.liveChannel.messages.fetch(this.liveMsgId);
    if(!liveMessage){return false};

    const imageUrl = await this.sendSnapImg();

    //for some reason the embed is not edited after a while, even though the image is sent, testing to see if timout will fix it.
    await setTimeout(100);
    
    if(!imageUrl){return false};

    this.imageUrl = imageUrl;
    const newEmbed = new LiveEmbed(this);

   await liveMessage.edit({content:"...",embeds: []});
   await liveMessage.edit({embeds: [newEmbed]});
   return true;
};
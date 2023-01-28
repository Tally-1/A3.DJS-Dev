// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import Snapshot from "../../../../api/models/classes/snapshot";
import LiveEmbed from "../../classes/liveEmbed";
import LiveFeed from "../../classes/LiveFeed";

export default
async function updateTransmission(this:LiveFeed ,snapshot:Snapshot){

    this.snapshot = snapshot;

    if(!this.liveMsgId){return};

    const liveMessage = await this.liveChannel.messages.fetch(this.liveMsgId);
    if(!liveMessage){return};

    const imageUrl = await this.sendSnapImg();
    if(!imageUrl){return};

    this.imageUrl = imageUrl;
    const newEmbed = new LiveEmbed(this);

   await liveMessage.edit("...");
   liveMessage.edit({embeds: [newEmbed]});

};
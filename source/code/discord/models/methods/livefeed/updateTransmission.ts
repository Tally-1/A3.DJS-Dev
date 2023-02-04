// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import Snapshot from "../../../../api/models/classes/snapshot";
import LiveEmbed from "../../classes/liveEmbed";
import LiveFeed from "../../classes/LiveFeed";
import { setTimeout } from 'node:timers/promises'

export default
async function updateTransmission(this:LiveFeed ,snapshot:Snapshot){

    try {
            const timeSinceLast = (new Date().getTime()) - this.lastUpdate;
            if(timeSinceLast < this.updateFrequency){return "Too soon";};

            this.snapshot = snapshot;

            if(!this.liveMsgId){return "Id not found"};

            const liveMessage = await this.liveChannel.messages.fetch(this.liveMsgId);
            
            if(liveMessage === undefined){return "Message not found"};
            if(!liveMessage){return "Message not found"};
            

            const imageUrl = await this.sendSnapImg();

            //for some reason the embed is not edited after a while, even though the image is sent, testing to see if timout will fix it.
            await setTimeout(100);
            
            if(!imageUrl){return "Could not get URL for image"};

            this.imageUrl = imageUrl;
            const newEmbed = new LiveEmbed(this);

            await liveMessage.edit({embeds: [newEmbed]});

            this.lastUpdate = new Date().getTime();
            return "Livefeed updated";

    }catch(e){
        console.log("Something went wrong updating the livefeed");
        return "update failed";
    }
};
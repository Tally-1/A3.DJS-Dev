// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import path from "path"; 
import LiveFeed from "../../classes/LiveFeed";
import { setTimeout } from 'node:timers/promises'


export default
async function sendSnapImg(this: LiveFeed,deletePrevious?:boolean){



    if(this.sendingImage){return;};

    this.sendingImage = true;

    if(deletePrevious === undefined){ deletePrevious = true; };


    try {

        const snapshotPath = path.join("gameImages", "snapShot.jpg");
        const newMessage = await this.imageChannel.send({files:[snapshotPath]});
        if(!newMessage){return;};

        if(deletePrevious && this.previousImageMsg){
            await this.deletePreviousImg();
        };
        
        
        this.previousImageMsg = newMessage;
        const imageUrl = newMessage.attachments.at(0)?.url;
        
        this.sendingImage = false;
        
        return imageUrl;

    } catch (error) {
        this.sendingImage = false;
        return;
    };        
};
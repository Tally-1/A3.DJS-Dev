// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import LiveFeed from "../../classes/LiveFeed";

export default
async function sendSnapImg(this: LiveFeed,deletePrevious?:boolean){



    if(this.sendingImage){return;};

    const timeSinceLast = (new Date().getTime()) - this.lastImgOutTime;

    if(timeSinceLast < this.updateFrequency){return;};

    this.sendingImage = true;

    if(deletePrevious === undefined){deletePrevious = true;};


    try {

        const newMessage = await this.imageChannel.send({files:["./gameImages/snapShot.jpg"]});
        if(!newMessage){return;};

        if(deletePrevious && this.previousImageMsg){
            await this.deletePreviousImg();
        };
        
        
        this.previousImageMsg = newMessage;
        const imageUrl = newMessage.attachments.at(0)?.url;

        this.lastImgOutTime = new Date().getTime();
        this.sendingImage = false;
        
        return imageUrl;

    } catch (error) {
        this.sendingImage = false;
        return;
    };        
};
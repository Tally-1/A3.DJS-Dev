// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { Client, Message, TextChannel } from "discord.js";
import A3session from "../../../api/models/classes/A3Session";
import Snapshot from "../../../api/models/classes/snapshot";
import cleanUp from "../methods/livefeed/cleanUp";
import deletePreviousImg from "../methods/livefeed/deletePreviousImg";
import initLiveFeed from "../methods/livefeed/initLiveFeed";
import initTransmission from "../methods/livefeed/initTransmission";
import newGame from "../methods/livefeed/newGame";
import sendSnapImg from "../methods/livefeed/sendSnapImg";
import updateTransmission from "../methods/livefeed/updateTransmission";
import BotX from "./botX";
import { A3ChannelList } from "./types";

export default
class LiveFeed{
    bot:BotX;
    sessionData:A3session;
    snapshot:Snapshot;
    chatChannel:TextChannel;
    liveChannel:TextChannel;
    imageChannel:TextChannel;
    previousImageMsg:Message|undefined;
    sendingImage:boolean;
    updateStatus:     "update failed" 
                    | "Too soon" 
                    | "Id not found" 
                    | "Message not found" 
                    | "Could not get URL for image" 
                    | "Livefeed updated" 
                    | "Update never sent" 
                    | "Feed initialized"
    lastUpdate:number;
    updateFrequency:number;
    startTime:number;
    imageUrl?:string;
    liveMsgId?:string;
    

    constructor(bot:BotX, sessionData:A3session){
        const A3Channels      = bot.A3Channels as A3ChannelList;
        this.sessionData      = sessionData
        this.bot              = bot as BotX;
        this.chatChannel      = A3Channels.chatChannel;
        this.liveChannel      = A3Channels.liveChannel;
        this.imageChannel     = A3Channels.imgChannel;
        this.previousImageMsg = undefined;
        this.sendingImage     = false;
        this.startTime        = new Date().getTime();
        this.updateFrequency  = 7000;
        this.lastUpdate       = this.startTime - (this.updateFrequency);//@ts-expect-error
        this.snapshot         = process.state.currentSnap;
        this.updateStatus     = "Update never sent"
        
    };

    static initLiveFeed = initLiveFeed;
    initTransmission    = initTransmission;
    updateTransmission  = updateTransmission;
    newGame             = newGame;
    sendSnapImg         = sendSnapImg;
    deletePreviousImg   = deletePreviousImg;
    cleanUp             = cleanUp;

};






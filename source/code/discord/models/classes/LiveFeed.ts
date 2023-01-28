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
    bot:Client;
    sessionData:A3session;
    snapshot:Snapshot;
    chatChannel:TextChannel;
    liveChannel:TextChannel;
    imageChannel:TextChannel;
    previousImageMsg:Message|undefined;
    sendingImage:boolean;
    lastImgOutTime:number;
    updateFrequency:number;
    imageUrl?:string;
    liveMsgId?:string;
    

    constructor(bot:BotX, sessionData:A3session){
        const A3Channels      = bot.A3Channels as A3ChannelList;
        this.sessionData      = sessionData
        this.bot              = bot;
        this.chatChannel      = A3Channels.chatChannel;
        this.liveChannel      = A3Channels.liveChannel;
        this.imageChannel     = A3Channels.imgChannel;
        this.previousImageMsg = undefined;
        this.sendingImage     = false;
        this.updateFrequency  = 5000;
        this.lastImgOutTime   = new Date().getTime() - (this.updateFrequency);//@ts-expect-error
        this.snapshot         = process.state.currentSnap;
                
    };

    static initLiveFeed = initLiveFeed;
    initTransmission    = initTransmission;
    updateTransmission  = updateTransmission;
    newGame             = newGame;
    sendSnapImg         = sendSnapImg;
    deletePreviousImg   = deletePreviousImg;
    cleanUp             = cleanUp;

};






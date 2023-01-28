// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { Client, Collection, Guild } from "discord.js";
import { genericObject } from "../../../api/models/types";
import A3djsConfig from "./config";
import fs from "fs";
import { A3ChannelList } from "./types";
import A3session from "../../../api/models/classes/A3Session";
import Snapshot from "../../../api/models/classes/snapshot";
import getResponse from "../methods/botX/getResponse";
import commandResponseReply from "../methods/botX/commandResponseReply";
import interactionBaseData from "../methods/botX/interactionBaseData";
import messageHandler from "../methods/botX/messageHandler";
import buildChannel from "../methods/botX/buildChannel";
import constructMissingChannels from "../methods/botX/constructMissingChannels";
import getA3Channels from "../methods/botX/getA3Channels";
import sendChatToArmA from "../methods/botX/sendChatToArmA";
import sendChatToDiscord from "../methods/botX/sendChatToDiscord";
import validMessage from "../methods/botX/validMessage";
import startUpMessage from "../methods/botX/startUpMessage";
import onLoadBot from "../methods/botX/onLoadBot";
import setCommands from "../methods/botX/commandDeployment/setCommands";
import registerCommands from "../methods/botX/commandDeployment/registerCommands";
import deployCommands from "../methods/botX/commandDeployment/deployCommands";
import getCommandsData from "../methods/botX/commandDeployment/getCommandsData";
import actionHandler from "../methods/botX/commandDeployment/actionHandler";

export
type statusResponseData = [
    number, //damage (0-1)
    [
        string, //uniform
        string, //backpack
        string, //vest
        string, //weapon
        string, //launcher
        string  //sidearm
    ]
]

export default
class BotX extends Client{
    commands:genericObject;
    A3DJS_folder:string;
    startUpTime:number;
    config:A3djsConfig;
    configFile:string;
    snapshot:Snapshot
    channelsLoaded:boolean;
    A3Channels?:A3ChannelList
    sessionData?:A3session;
    discordServer?:Guild
    
    constructor(folder:string, configFile:string){
        super({ intents: ["Guilds", "GuildMessages", "DirectMessages", "MessageContent"] });
        
        const jsonConfig = fs.readFileSync(configFile) as unknown as string;
        const config = JSON.parse(jsonConfig) as A3djsConfig;

        
        this.commands     = new Collection();
        this.startUpTime  = new Date().getTime();
        this.A3DJS_folder = folder;
        this.config       = config
        this.configFile   = configFile
        this.snapshot     = Snapshot.getCurrent(folder);
        this.channelsLoaded = false;

    }
    
    static sendChatToArmA = sendChatToArmA;
    static sendChatToDiscord = sendChatToDiscord;
    static validMessage = validMessage;
    static constructMissingChannels = constructMissingChannels;
    static getA3Channels = getA3Channels;
    static buildChannel = buildChannel;
    static interactionBaseData = interactionBaseData;
    
    //@ts-expect-error
    getSnapshot(){return process.state.currentSnap};
    getResponse = getResponse;
    commandResponseReply = commandResponseReply;
    getA3Channels = getA3Channels;
    messageHandler = messageHandler;
    startUpMessage = startUpMessage;
    onLoadBot = onLoadBot;

    setCommands = setCommands;
    registerCommands = registerCommands;
    deployCommands = deployCommands;
    getCommandsData = getCommandsData;
    
    actionHandler = actionHandler;
};
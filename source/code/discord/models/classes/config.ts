// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License


export default
interface A3djsConfig {
    token:string;
    imgChannel:string;
    chatChannel:string;
    liveChannel: string;
    serverId:string;
    botId:string;
    channelTypes:string[];
    port:number;
    prefix:string,
    owner:string
    [key:string]:string|number|string[];
}
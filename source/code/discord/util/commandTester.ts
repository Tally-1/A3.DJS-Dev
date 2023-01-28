// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { Message } from "discord.js";
import INIparser from "../../api/models/classes/INIparser";

/*TEST SECTION*/
// testMessage(message, bot.A3DJS_folder);



function testMessage(message:Message, folder:string){
    const text = message.content;

    //string + admin permission
    /*Added*//*WORKS*/if(text == "hint"){
        const rawRequest = [
            "", 
            "Sender", 
            (new Date().getTime().toString()), 
            "This is a string"
        ] as [string, string, string, string];
        //console.log(request); //process.exit();
        INIparser.sendCommand(rawRequest, "hint-global", folder);
    };
    /*Added*//*WORKS*/if(text == "sys"){
        const rawRequest = [
            "", 
            "Sender", 
            (new Date().getTime().toString()), 
            "This is a string"
        ]as [string, string, string, string];

        INIparser.sendCommand(rawRequest, "syschat-global", folder)
    };
    
    //integer+Admin permission
    /*Added*//*WORKS*/if(text == "fog"){
        const rawRequest = [
            "", 
            "Sender", 
            (new Date().getTime().toString()), 
            "1"
        ]as [string, string, string, string];
        
        INIparser.sendCommand(rawRequest, "set-fog", folder)
    };
    /*Added*//*WORKS*/if(text == "wind"){
        const rawRequest = [
            "", 
            "Sender", 
            (new Date().getTime().toString()), 
            "1"
        ] as [string, string, string, string];

        INIparser.sendCommand(rawRequest, "set-wind", folder)
    };
    /*Added*//*WORKS*/if(text == "time"){
        const rawRequest = [
            "", 
            "Sender", 
            (new Date().getTime().toString()), 
            "1"
        ] as [string, string, string, string];
        INIparser.sendCommand(rawRequest, "set-daytime", folder)
    };
    

    /*works*/if(text == "zap"){
        const rawRequest = [
            "76561198034951030", 
            "Sender", 
            (new Date().getTime().toString())
        ] as [string, string, string];
        
        INIparser.sendCommand(rawRequest, "zap-unit", folder)
    };//admin
    /*works*/if(text == "dm"){
        const rawRequest = [
            "76561198034951030", 
            "Sender", 
            (new Date().getTime().toString()),
            "Hello there"
        ] as [string, string, string, string];
        INIparser.sendCommand(rawRequest, "dm-player", folder)
    };//all
    /*works*/if(text == "status"){
        const rawRequest = [
            "76561198034951030", 
            "Sender", 
            (new Date().getTime().toString())
        ]as [string, string, string];

        INIparser.sendCommand(rawRequest, "get-unit-status", folder)
    }//all
}

//request: ["target", "sender", "RequestId", "stringParam"]
//response:[[_callId, _callStatus, _responseData], "response"]
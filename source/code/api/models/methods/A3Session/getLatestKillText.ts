// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../classes/A3Session";
import Snapshot from "../../classes/snapshot";

export default
function getLatestKillText(
    this:A3session,
    snapshot:Snapshot, 
    textSize?:"short"|"medium"|"long",
    timeLimit?:number, 
    playersOnly?:boolean
    ){
    const latestKill = this.getLatestKill(timeLimit, playersOnly);

    if(!latestKill){return;};
    
    if(this.latestKillText && this.latestKillText.id === latestKill.victimId){
      return this.latestKillText.text;
    };
    const latestKillTxt = latestKill.killText(snapshot, textSize);

    if(!latestKillTxt){return;};

    this.latestKillText={id:latestKill.victimId, text:latestKillTxt}

    return latestKillTxt;
  };
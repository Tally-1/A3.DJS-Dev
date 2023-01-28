// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import A3session from "../../classes/A3Session";
import Kill from "../../classes/kill";

export default
function getLatestKill(this:A3session, timeLimit?:number, playersOnly?:boolean){
    const victimIds = Object.keys(this.stats.kills);

    if(victimIds.length === 0){return;};
    

    const kills:Kill[] = [];
    const playerKills:Kill[] = [];
    
    victimIds.map((id)=>{
      const kill = this.stats.kills[id];
      kills.push(kill);

      if(kill.killerId.startsWith("7656")){
        playerKills.push(kill);
      };

    });
    
    
    const sortedKills = kills.sort((a, b) => {return a.time - b.time;});
    let last    = sortedKills[kills.length-1];

    if(victimIds.length === 1){
      last = this.stats.kills[victimIds[0]];
    };

    if(!timeLimit && !playersOnly){return last;};

    if(timeLimit && !playersOnly){
      const valid = last.time > (new Date().getTime() - timeLimit);
      if(valid){return last;};
    };
    
    if(playerKills.length === 0){return;};

    const sortedPlayerKills = playerKills.sort((a, b)=>{return a.time - b.time;});
    const lastPlayerKill    = sortedPlayerKills[kills.length];

    if(!timeLimit){return lastPlayerKill;};

    const valid = lastPlayerKill?.time > (new Date().getTime() + timeLimit);
      
    if(valid){return last;};

    return;

  };
// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import Snapshot from "../../../../api/models/classes/snapshot";
import LiveEmbed from "../../classes/liveEmbed";

export default
function liveFeedUnitsSide(this:LiveEmbed, snapshot:Snapshot){
    const bluForCount = Object.keys(snapshot.getUnitsBySide(["WEST"])).length;
    const opForCount  = Object.keys(snapshot.getUnitsBySide(["EAST"])).length;
    const indyCount   = Object.keys(snapshot.getUnitsBySide(["GUER"])).length;

    const sum =(bluForCount+opForCount+indyCount);

    if(sum === 0){return this};

    this.addFields({ name: '\u200B', value: '\u200B'+'Unit-count pr side:' });
    
    if(bluForCount>0){this.addFields({ name: 'Blufor', value: ""+bluForCount, inline: true });};
    if(opForCount>0){this.addFields({ name: 'Opfor', value: ""+opForCount, inline: true });};
    if(indyCount>0){this.addFields({ name: 'Independent', value: ""+indyCount, inline: true });};

    return this;
};
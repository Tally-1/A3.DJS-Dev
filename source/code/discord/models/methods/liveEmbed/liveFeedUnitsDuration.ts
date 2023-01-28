// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import Snapshot from "../../../../api/models/classes/snapshot";
import LiveEmbed from "../../classes/liveEmbed";

export default
function liveFeedUnitsDuration(this:LiveEmbed, snapshot:Snapshot){
    const playerCount = Object.keys(snapshot.players).length;
    const unitCount   = Object.keys(snapshot.units).length;
    const aiCount     = unitCount-playerCount;
    const duration    = Math.floor(snapshot.time/60);

    this.addFields({ name: 'Players', value: playerCount+"", inline: true });

    if(aiCount>0){this.addFields({ name: 'Ai', value: aiCount+"", inline: true })};

    this.addFields({ name: 'Duration', value: duration+" minutes", inline: true });
    
    return this;
};
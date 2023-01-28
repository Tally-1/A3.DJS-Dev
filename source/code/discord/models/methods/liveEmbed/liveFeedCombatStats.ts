// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import LiveEmbed from "../../classes/liveEmbed";
import LiveFeed from "../../classes/LiveFeed";

export default
function liveFeedCombatStats(this:LiveEmbed, feed:LiveFeed){
    const killCount  = Object.keys(feed.sessionData.stats.kills).length;
    const explCount  = Object.keys(feed.sessionData.stats.explosions).length;
    const shotsFired = feed.sessionData.stats.shotsFired;

    

    const sum =(killCount+explCount+shotsFired);
    if(sum === 0){return this;};
    

    this.addFields({ name: '\u200B', value: 'Combat statistics:' });
    
    if(killCount>0){this.addFields({ name: 'Kills', value: ""+killCount, inline: true })};
    if(explCount>0){this.addFields({ name: 'Explosions', value: ""+explCount, inline: true })};
    if(shotsFired>0){this.addFields({ name: 'Bullets fired', value: ""+shotsFired, inline: true })};
    
    this.addFields({ name: '\u200B', value: '\u200B' });
        
    return this;
}
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import { EmbedBuilder } from "discord.js";
import Snapshot from "../../../api/models/classes/snapshot";
import Cap1 from "../../../api/util/capOne";
import actionText from "../methods/liveEmbed/actionText";
import emptyField from "../methods/liveEmbed/emptyField";
import liveFeedCombatStats from "../methods/liveEmbed/liveFeedCombatStats";
import liveFeedUnitsDuration from "../methods/liveEmbed/liveFeedUnitsDuration";
import liveFeedUnitsSide from "../methods/liveEmbed/liveFeedUnitsSide";
import LiveFeed from "./LiveFeed";

export default
class LiveEmbed extends EmbedBuilder{

    constructor(feed:LiveFeed){
        super();

        const serverName = feed.sessionData.serverName;
        const mission = feed.sessionData.mission;
        const map = Cap1(feed.sessionData.map);
        const time = feed.snapshot.dayTime;
        const snapshot = feed.snapshot;
        
        
        //@ts-expect-error
        let iconURL = feed.bot.discordServer.iconURL() as string | undefined;
        if(!iconURL){iconURL = 'https://avatars.githubusercontent.com/u/86693523?v=4'};
        this.setThumbnail(iconURL);

        this.setColor(0x0099FF)
        .setTitle("**"+serverName+"**")
        .setDescription("**"+mission+"**")
        .emptyField()
        .liveFeedUnitsDuration(snapshot)
        .liveFeedUnitsSide(snapshot)
        .liveFeedCombatStats(feed)
        .actionText(feed, snapshot)
        .addFields({ name: "\n"+map, value: time})
	    .setFooter({ 
            text: 'Built by Tally#8779', 
            iconURL: 'https://avatars.githubusercontent.com/u/86693523?v=4' 
        })
        .setTimestamp();

        const testImgUrl = "https://akamai.vgc.no/dredition-images/773/845/77384582/77384582-teaser-top-9bc8b06bca4758b857ad5e541c071a7e.jpg?format=auto";

        if(feed.imageUrl){this.setImage(/*testImgUrl*/feed.imageUrl);};
        // console.log(feed.imageUrl);
    }

    emptyField =emptyField;
    liveFeedUnitsDuration=liveFeedUnitsDuration;
    liveFeedUnitsSide=liveFeedUnitsSide;
    actionText=actionText;
    liveFeedCombatStats=liveFeedCombatStats;
}

//could be used for a custom-server link
// this.setURL('https://discord.js.org/')
	    
// for publicity (fiverr?)
// this.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
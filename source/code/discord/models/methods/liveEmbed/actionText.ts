// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import Snapshot from "../../../../api/models/classes/snapshot";
import LiveEmbed from "../../classes/liveEmbed";
import LiveFeed from "../../classes/LiveFeed";

export default
function actionText(this:LiveEmbed, feed:LiveFeed, snapshot:Snapshot){
    const text = feed.sessionData?.getLatestKillText(snapshot, "short", 20000);
    if(text){
        this.addFields({ name: "\n", value: "```"+text+"```"});
    };
    return this;
}
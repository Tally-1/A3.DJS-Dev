// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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
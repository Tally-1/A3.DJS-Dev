// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import LiveEmbed from "../../classes/liveEmbed";

export default
function emptyField(this:LiveEmbed){
    this.addFields({ name: '\u200B', value: '\u200B' });
    return this;
};
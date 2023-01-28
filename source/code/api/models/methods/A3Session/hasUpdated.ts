// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../classes/A3Session";

export default
function hasUpdated(this:A3session, /*updateObject?:boolean*/) {
    const current = this.latestUpdateTime();
    const updated = current !== this.lastGameUpdate;
    this.lastGameUpdate = current;
    return updated;
};
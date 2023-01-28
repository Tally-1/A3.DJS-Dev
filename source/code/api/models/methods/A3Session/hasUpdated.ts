// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import A3session from "../../classes/A3Session";

export default
function hasUpdated(this:A3session, /*updateObject?:boolean*/) {
    const current = this.latestUpdateTime();
    const updated = current !== this.lastGameUpdate;
    this.lastGameUpdate = current;
    return updated;
};
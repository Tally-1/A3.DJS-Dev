// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import Snapshot from "../../classes/snapshot";

export default
function getNames(this:Snapshot, playersOnly:boolean){
    let units = this.units;
    if(playersOnly){
        units = this.players;
    };
    const names:string[] = [];

    const ids = Object.keys(units);
    for (const id of ids) {
        const unit = units[id];
        names.push(unit.name);
    };
    return names;
}
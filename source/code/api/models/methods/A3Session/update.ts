// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../classes/A3Session";

export default
function update(this:A3session){
    const sessionData = this.parseSessionFile();

    this.updateFrequency = sessionData.updateFrequency;
    this.sessionName = sessionData.sessionName;
    this.map = sessionData.map;
    this.mapData = sessionData.mapData;
    this.focusType = sessionData.focusType;
    this.focusEnemy = sessionData.focusEnemy;
}
// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import A3session from "../../classes/A3Session";

export default
function focusTypeText(this: A3session) {
    let focusType = [
        "Whole Map",
        "Players",
        "Blufor",
        "Opfor",
        "Independent",
        "Civilian",
        "Blufor, Opfor",
        "Blufor, Independent",
        "Opfor, Independent",
        "All units"
    ][this.focusType];

    if(this.focusEnemy && this.focusType !== 9)
    {
        focusType = focusType + " and known enemies"
    }

    focusType = focusType+".";

    return focusType;
  };
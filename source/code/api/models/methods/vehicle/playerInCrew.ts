// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

export default function playerInCrew(crew:string[]):boolean{
    let playerCrew = false
    for (const unit of crew) {
        if((unit.startsWith("7656"))
        ||((unit.startsWith("_SP_PLAYER_"))))
        {playerCrew = true;};
    }
    return playerCrew;
};
// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

export default function playerInCrew(crew:string[]):boolean{
    let playerCrew = false
    for (const unit of crew) {
        if((unit.startsWith("7656"))
        ||((unit.startsWith("_SP_PLAYER_"))))
        {playerCrew = true;};
    }
    return playerCrew;
};
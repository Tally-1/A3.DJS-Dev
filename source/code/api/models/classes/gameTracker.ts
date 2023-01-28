// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import newGame from "../methods/gameTracker/newGame";
import stateToProccess from "../methods/gameTracker/stateToProccess";
import trackGame from "../methods/gameTracker/trackGame";

export default class GameTracker {
  constructor(){}

    static trackGame = trackGame;
    static newGame = newGame;
    static stateToProccess = stateToProccess;
};
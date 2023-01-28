// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import newGame from "../methods/gameTracker/newGame";
import stateToProccess from "../methods/gameTracker/stateToProccess";
import trackGame from "../methods/gameTracker/trackGame";

export default class GameTracker {
  constructor(){}

    static trackGame = trackGame;
    static newGame = newGame;
    static stateToProccess = stateToProccess;
};
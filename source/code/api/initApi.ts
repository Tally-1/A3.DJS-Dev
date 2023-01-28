// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import GameTracker from "./models/classes/gameTracker";
export function initApi(folder:string) {
  GameTracker.trackGame(folder);

  return;
};

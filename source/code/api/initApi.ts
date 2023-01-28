// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import GameTracker from "./models/classes/gameTracker";
export function initApi(folder:string) {
  GameTracker.trackGame(folder);

  return;
};

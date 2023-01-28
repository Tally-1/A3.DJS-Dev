// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import INIparser from "../../classes/INIparser";
import menFromIniList from "./menFromIniList";

export default function getDeadMen(folder: string) {
    const deathData = INIparser.iniFileToObject(folder, "A3ToDJS_deadMen");
    const deathIniList = INIparser.parseIniArrayList(deathData);
    const deadMen = menFromIniList(deathIniList);
    return deadMen;
  }
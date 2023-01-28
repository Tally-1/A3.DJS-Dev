// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import INIparser from "../../classes/INIparser";
import menFromIniList from "./menFromIniList";

export default function getDeadMen(folder: string) {
    const deathData = INIparser.iniFileToObject(folder, "A3ToDJS_deadMen");
    const deathIniList = INIparser.parseIniArrayList(deathData);
    const deadMen = menFromIniList(deathIniList);
    return deadMen;
  }
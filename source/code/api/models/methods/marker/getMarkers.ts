// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import INIparser from "../../classes/INIparser";
import markersFromIniList from "./markersFromIniList";

export default function getMarkers(folder:string){
    const IniList    = INIparser.iniFileToObject(folder, "A3ToDJS_markers");
    const markerData = INIparser.parseIniArrayList(IniList);
    const markers    = markersFromIniList(markerData);
    return markers;
};
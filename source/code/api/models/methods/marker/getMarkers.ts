// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import INIparser from "../../classes/INIparser";
import markersFromIniList from "./markersFromIniList";

export default function getMarkers(folder:string){
    const IniList    = INIparser.iniFileToObject(folder, "A3ToDJS_markers");
    const markerData = INIparser.parseIniArrayList(IniList);
    const markers    = markersFromIniList(markerData);
    return markers;
};
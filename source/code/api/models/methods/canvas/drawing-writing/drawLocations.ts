// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { SKRSContext2D } from "@napi-rs/canvas";
import A3PosToJsPos from "../../../../util/A3posToJsPos";
import CanvasX from "../../../classes/canvas";
import { backgroundData, Place } from "../../../types";


export default
function drawLocations(this:CanvasX, pencil:SKRSContext2D, backGroundData:backgroundData) {
    const locations = Object.keys(this.mapData.locations);
        for (const name of locations) {
            const location = this.mapData.locations[name];
            showLocation(name, location, backGroundData, pencil);
        };
    }

function showLocation(name:string, location:Place, backGroundData:backgroundData, pencil:SKRSContext2D) {
    const [x,y]=A3PosToJsPos(location.pos, backGroundData);
    
    if((x < 0 || (x > 1000))
    || (y < 0 || (y > 1000)))
    {return;};

    let textSize = 25;

    if(location.type == "NameLocal"
    || location.type == "NameVillage")
    {textSize = 20;};

    pencil.fillStyle = "#ffffffbb";
    pencil.font = textSize+"px Arial";

    pencil.fillText(name, x, y);
};
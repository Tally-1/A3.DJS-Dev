// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import { SKRSContext2D, Image } from "@napi-rs/canvas";
import A3PosToJsPos from "../../../../util/A3posToJsPos";
import Explosion from "../../../classes/explosion";
import Man from "../../../classes/man";
import Snapshot from "../../../classes/snapshot";
import Vehicle from "../../../classes/vehicle";
import { backgroundData } from "../../../types";

export default
function drawObjectMarker(
    object:Man | Vehicle | Explosion, 
    pencil:SKRSContext2D, 
    icon:Image, 
    iconSize:number, 
    backGroundData:backgroundData, 
    snapshot:Snapshot, 
    forcedDir?:number){
    const [x,y]=A3PosToJsPos(object.pos, backGroundData);

    // if the units position is out of bounds then do not draw the marker.
    if((x < 0 || (x > 1000))
    || (y < 0 || (y > 1000)))
    {return;};

    let dir = object.dir;
    if(forcedDir !== undefined){dir = forcedDir};

    const textSize = 15;
    pencil.fillStyle = "#ffffff";
    pencil.font = textSize+"px Arial";
    

    //make sure icon is drawn at center of icon-image
    const cIcon = 0-(iconSize/2);

    //adjust context to wanted position
    pencil.translate(x,y);

    // rotate to wanted dir
    pencil.rotate(dir * Math.PI / 180);

    //draw icon
    pencil.drawImage(icon, cIcon, cIcon, iconSize, iconSize);

    //return context to normal
    pencil.rotate((360-dir) * Math.PI / 180);
    pencil.translate((0-x),(0-y));
    

    if( object instanceof Man 
    &&  object.isPlayer ){

      pencil.fillText(object.name, x, y);
    };

    if(object instanceof Vehicle){
      if(object.playerCrew){
        const textStartY = (y+(iconSize/2));
        const crewIds = object.crew;
        let j = 0;

        for (const id of crewIds) {
            const y = textStartY+((textSize*j) + 5);
            const player = snapshot.players[id];
            if(player)
            {
              pencil.fillText(player.name, x, y);
                j++;
            };            
        };
      };
    }

    return;
};
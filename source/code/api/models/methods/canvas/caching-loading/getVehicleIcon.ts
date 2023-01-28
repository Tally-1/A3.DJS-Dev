// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import CanvasX from "../../../classes/canvas";
import Vehicle from "../../../classes/vehicle";

export default
function getVehicleIcon(this:CanvasX, vehicle:Vehicle){
  
    let icon = this.icons[vehicle.side][vehicle.icon];
    if(icon){return icon;};
  
    icon = this.icons[vehicle.side][(vehicle.icon.toLowerCase())];
    if(icon){return icon;};
  
    icon = this.icons[vehicle.side][(vehicle.type)];
  
    if(!icon){icon = this.icons[vehicle.side]["iconVehicle_ca"];};
    return icon;
  };
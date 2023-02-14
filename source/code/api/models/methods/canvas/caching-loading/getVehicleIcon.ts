// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import CanvasX from "../../../classes/canvas";
import Vehicle from "../../../classes/vehicle";

export default
function getVehicleIcon(this:CanvasX, vehicle:Vehicle){
  
    let icon = this.icons[vehicle.side][vehicle.icon];
    if(icon){return icon;};
  
    icon = this.icons[vehicle.side][(vehicle.icon.toLowerCase())];
    if(icon){return icon;};
  
    this.storeUnknownIconName(vehicle.icon.toLowerCase());

    icon = this.icons[vehicle.side][(vehicle.type)];
  
    if(!icon){icon = this.icons[vehicle.side]["iconVehicle_ca"];};
    return icon;
  };
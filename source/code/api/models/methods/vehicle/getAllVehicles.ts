// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import INIparser from "../../classes/INIparser";
import Vehicle, { listOfVehicles, vehicleDataArr } from "../../classes/vehicle";

export default function getAllVehicles(stringArr:string) {
    const parsedArray = INIparser.parseStringArr(stringArr);
    const vehicles = {} as listOfVehicles;

    for (const vArr of parsedArray){
        const data = vArr as vehicleDataArr;
        const vehicle = new Vehicle(...data);
        vehicles[vehicle.uid] = vehicle;
    };

    return vehicles;

};
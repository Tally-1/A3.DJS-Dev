// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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
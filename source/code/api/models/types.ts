// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import Explosion from "./classes/explosion";
import Kill from "./classes/kill";
import Man from "./classes/man";
import Marker from "./classes/marker";
import Vehicle from "./classes/vehicle";

// interface locData {type:string, pos:position3D};
export interface Place {type:string, pos:position3D}
export interface LocationList {[key: string]:Place};
export type discordChatParams = [string, string, string];

export interface mapData{
    name:string,
    size:number,
    locations:LocationList,
    waterGrids:string[]
};

export interface positionData{
    pos      : position2D | position3D,
    round100 : position2D,
    grid     : position2D,
    gridPos  : position2D,
    subGrid  : position2D
}

export interface backgroundData {
    center:position2D,
    bottomLeft:position2D,
    imgCacheName:string,
    size:number,
    sizeFactor:number,
    positionsFound:boolean
};

export type params = string[]|number[]|boolean[];
export type outCommand = [params, string];
// [["stringParam", 2, true],"CommandType"];

export type multiTypeArr = Explosion[] | Man[] | Vehicle[] | Kill[] | Marker[];
export interface genericList {[key:string]: (Explosion | Man | Vehicle | Kill | Marker)}
export interface IniArrayList {[key: string]: any[]};
export interface genericObject {[key: string]: any};
export type genericKey = keyof object;
export type position3D = [number, number, number];
export type position2D = [number, number];

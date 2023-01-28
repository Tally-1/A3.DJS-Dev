// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

import getMarkers from "../methods/marker/getMarkers";

export type markerSize = [number,number];
export type markerDataArr = [string,string,string,string,string,number,string,markerSize,number,number[],any[]];
export interface listOfmarkers {[key: string]: Marker};

export default
class Marker {
    name:string;
    type:string;
    brush:string;
    shape:string;
    color:string;
    alpha:number;
    text:string;
    size:[number, number];
    dir:number;
    pos:number[];
    line:number[];

    constructor(
    name:string,
    type:string,
    brush:string,
    shape:string,
    color:string,
    alpha:number,
    text:string,
    size:[number, number],
    dir:number,
    pos:number[],
    line:number[],
    ){
        this.name=name;
        this.type=type
        this.brush=brush
        this.shape=shape
        this.color=color
        this.alpha=alpha
        this.text=text
        this.size=size
        this.dir=dir
        this.pos=pos
        this.line=line
    };

     static getMarkers = getMarkers;
}
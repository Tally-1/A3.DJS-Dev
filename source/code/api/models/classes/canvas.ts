// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

import path from "path";
import { mapData } from "../types";
import fs from "fs";
import preLoadImages from "../methods/canvas/caching-loading/preLoadImages";
import * as Cnvs from "@napi-rs/canvas";
import { Image } from "@napi-rs/canvas";
import setBackgroundSync from "../methods/canvas/background/setBackgroundSync";
import setBackground from "../methods/canvas/background/setBackground";
import customGridImage from "../methods/canvas/background/customGridImage";
import cacheTempImg from "../methods/canvas/caching-loading/cacheTempImg";
import storeFrame from "../methods/canvas/caching-loading/storeFrame";
import x3gridImage from "../methods/canvas/background/x3gridImage";
import load3x3background from "../methods/canvas/background/load3x3background";
import drawSnapShot from "../methods/canvas/drawSnapshot";
import backGroundCached from "../methods/canvas/background/backGroundCached";
import writeGameInfo from "../methods/canvas/drawing-writing/writeGameInfo";
import drawKills from "../methods/canvas/drawing-writing/drawKills";
import drawLocations from "../methods/canvas/drawing-writing/drawLocations";
import drawObjectMarker from "../methods/canvas/drawing-writing/drawObjectMarker";
import getVehicleIcon from "../methods/canvas/caching-loading/getVehicleIcon";
import drawDeadMen from "../methods/canvas/drawing-writing/drawDeadMen";
import drawMen from "../methods/canvas/drawing-writing/drawMen";
import drawVehicles from "../methods/canvas/drawing-writing/drawVehicles";
import drawExplosions from "../methods/canvas/drawing-writing/drawExplosions";
import drawGameData from "../methods/canvas/drawing-writing/drawGameData";
import drawMultiGrid from "../methods/canvas/drawing-writing/drawMultiGrid";
import removeCachedFiles from "../methods/canvas/removeCachedFiles";
import logAndCacheManager from "../methods/canvas/caching-loading/logAndCacheManager";
import cleanCache from "../methods/canvas/caching-loading/cleanCache";


/*
Given that Canvas for node is not being maintained, I had to do some weird 
workArounds in order to get this working when switching to TS
Be aware that there will be some weird stuff whenever dealing with CanvasJs for nodeJs.
*/

export interface listOfImages {[key: string]: Image};
export interface parentImageList {[key: string]: listOfImages}
export default
class CanvasX {
  [key: string]:any;

  //|properties retrieved from the canvasJs package\\
  clearAllCache: (typeof Cnvs.clearAllCache);
  Canvas: (typeof Cnvs.Canvas);
  createCanvas: (typeof Cnvs.createCanvas);
  Path2D: (typeof Cnvs.Path2D);
  ImageData: (typeof Cnvs.ImageData);
  Image: (typeof Cnvs.Image);
  PathOp: (typeof Cnvs.PathOp);
  FillType: (typeof Cnvs.FillType);
  StrokeCap: (typeof Cnvs.StrokeCap);
  StrokeJoin: (typeof Cnvs.StrokeJoin);
  SvgExportFlag: (typeof Cnvs.SvgExportFlag);
  GlobalFonts: (typeof Cnvs.GlobalFonts);
  convertSVGTextToPath: (typeof Cnvs.convertSVGTextToPath);
  DOMPoint: (typeof Cnvs.DOMPoint);
  DOMMatrix: (typeof Cnvs.DOMMatrix);
  DOMRect: (typeof Cnvs.DOMRect);
  loadImage: (typeof Cnvs.loadImage);
  //|------------------------------------------------------------\\
  
  mapData: mapData;
  icons: parentImageList;
  grids: listOfImages;
  customGrids: listOfImages;
  x3Grids: listOfImages;
  multiGrids: listOfImages;
  loaded:boolean  

  constructor(map:string){
    
    //|properties retrieved from the canvasJs package\\
    this.clearAllCache = Cnvs.clearAllCache;
    this.Canvas = Cnvs.Canvas;
    this.createCanvas = Cnvs.createCanvas;
    this.Path2D = Cnvs.Path2D;
    this.ImageData = Cnvs.ImageData;
    this.Image = Cnvs.Image;
    this.PathOp = Cnvs.PathOp;
    this.FillType = Cnvs.FillType;
    this.StrokeCap = Cnvs.StrokeCap;
    this.StrokeJoin = Cnvs.StrokeJoin;
    this.SvgExportFlag = Cnvs.SvgExportFlag;
    this.GlobalFonts = Cnvs.GlobalFonts;
    this.convertSVGTextToPath = Cnvs.convertSVGTextToPath;
    this.DOMPoint = Cnvs.DOMPoint;
    this.DOMMatrix = Cnvs.DOMMatrix;
    this.DOMRect = Cnvs.DOMRect;
    this.loadImage = Cnvs.loadImage;
    //|------------------------------------------------------------\\


    const dataPath = path.join(".", "maps", map, "mapData.json");
    const data = fs.readFileSync(dataPath) as unknown as string;
    const mapData = JSON.parse(data);

    this.mapData     = mapData;
    this.customGrids = {} as listOfImages;
    this.x3Grids     = {} as listOfImages;
    this.multiGrids  = {} as listOfImages;
    this.icons       = {} as parentImageList;
    this.grids       = {} as listOfImages;
    this.loaded      = false;

    preLoadImages(this, map); //this preLoad may take a couple of seconds
  }

  drawSnapShot = drawSnapShot;

  backGroundCached = backGroundCached;
  setBackgroundSync = setBackgroundSync;
  setBackground = setBackground;
  load3x3background = load3x3background;
  drawMultiGrid = drawMultiGrid;
  x3gridImage = x3gridImage;
  cacheTempImg = cacheTempImg;
  logAndCacheManager = logAndCacheManager;
  cleanCache = cleanCache;
  customGridImage = customGridImage;

  writeGameInfo = writeGameInfo;
  
  drawGameData = drawGameData;

  drawLocations = drawLocations;
  drawKills = drawKills;
  drawDeadMen = drawDeadMen;
  drawMen = drawMen;
  drawVehicles = drawVehicles;
  drawExplosions = drawExplosions;
  drawObjectMarker = drawObjectMarker;

  getVehicleIcon = getVehicleIcon;
    
  static removeCachedFiles = removeCachedFiles;
  static storeFrame = storeFrame;
};

